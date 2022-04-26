import { useState } from "react";
import ImageList from "./ImageList";
import EXIF from "exif-js";

// Unfortunately I couldn't receive the data from EXIF library ;(

function App() {
  const [photos, setPhotos] = useState([]);

  // Save photos in state
  const fileHandler = (event) => {
    setPhotos(Object.values(event.target.files));
  };

  // Remove selected row
  const removeRow = (event) => {
    const update = [...photos];
    update.splice(event.target.value, 1);
    setPhotos(update);
  };

  // Validate file extension and size
  const dataValidation = (photo) => {
    const [, extension] = photo.name.split(".");
    let error = 0;
    if (
      extension.toLowerCase() === "jpg" ||
      extension.toLowerCase() === "jpeg"
    ) {
      if (photo.size >= 1048576) {
        error = 1;
      } else return (error = 0);
    } else return (error = 2);
    return error;
  };

  return (
    <ImageList
      photos={photos}
      fileHandler={fileHandler}
      removeRow={removeRow}
      dataValidation={dataValidation}
    />
  );
}

export default App;
