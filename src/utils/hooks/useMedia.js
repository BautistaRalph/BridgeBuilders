import { useState } from "react";

const useMedia = (picture) => {
  const [image, setImage] = useState(picture ?? "/src/assets/logo.png");
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const resetImage = () => {
    setImage(null);
  };

  // CLOUDINARY UPLOADING
  /* const uploadImage = () => {

  }
 */

  return {
    image,
    handleImageChange,
    resetImage,
    file,
  };
};

export default useMedia;
