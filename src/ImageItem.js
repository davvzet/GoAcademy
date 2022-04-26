const ImageItem = (props) => {
  const url = URL.createObjectURL(props.photo);
  return (
    <tr key={props.index} className="align-middle">
      <td>{props.index + 1}</td>
      <td>
        <a target="_blank" href={url} rel="noreferrer">
          <img src={url} alt={`${props.index}`} />
        </a>
      </td>
      <td>{props.photo.name}</td>
      <td>{(props.photo.size * 9.537 * Math.pow(10, -7)).toFixed(3)}</td>
      <td>GPS</td>
      <td>
        <button
          className="btn btn-danger"
          value={props.index}
          onClick={props.removeRow}
        >
          remove
        </button>
      </td>
    </tr>
  );
};

export default ImageItem;
