import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";

export default function MyEditor() {
  const [image, setImage] = useState("http://example.com/initialimage.jpg");
  
  const handleDrop = (dropped) => {
    setImage(dropped[0]);
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      noClick
      noKeyboard
      style={{ width: "250px", height: "250px" }}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <AvatarEditor width={250} height={250} image={image} />
          <input {...getInputProps()} />
        </div>
      )}
    </Dropzone>
  );
}
