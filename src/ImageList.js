import ImageItem from "./ImageItem";

const ImageList = (props) => {
  return (
    <div className="container col-xs-4 col-sm-6 col-md-8 col-xl-10 col-xxl-12">
      <input
        type="file"
        className="mt-5"
        onChange={props.fileHandler}
        accept=".jpg, .jpeg"
        multiple
      />
      <table className="table mt-5">
        <thead className="thead">
          <tr className="align-middle">
            <td>id</td>
            <td>thumbnail</td>
            <td>name</td>
            <td>size[MB]</td>
            <td>GPS coordinates</td>
            <td>remove</td>
          </tr>
        </thead>
        <tbody>
          {props.photos.map((photo, key) => {
            const error = props.dataValidation(photo);
            const index = key;
            let display = {};
            if (error === 0) {
              display = (
                <ImageItem
                  photo={photo}
                  removeRow={props.removeRow}
                  index={index}
                  key={key}
                />
              );
            } else if (error === 1) {
              display = alert(
                `File ${photo.name} has wrong size, max 1MB allowed`
              );
            } else if (error === 2) {
              display = alert(
                `File ${photo.name} has wrong extension, only .jpg/.jpeg allowed`
              );
            }
            return display;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ImageList;
