import { useState } from "react";

const useMedia = () => {
  const [image, setImage] = useState("/src/assets/logo.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
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
  };
};

export default useMedia;
