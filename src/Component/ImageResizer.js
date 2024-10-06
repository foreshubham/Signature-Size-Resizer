// src/ImageResizer.js
import React, { useState, useRef } from 'react';
import Resizer from 'react-image-file-resizer';
import Cropper from 'react-cropper';
import './imageresizer.css';
import 'cropperjs/dist/cropper.css';

const ImageResizer = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const cropperRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    cropper.getCroppedCanvas().toBlob((blob) => {
      const file = new File([blob], "cropped.jpg", { type: "image/jpeg" });
      resizeImage(file);
    }, 'image/jpeg');
  };

  const resizeImage = (file) => {
    let quality = 100;

    const resize = () => {
      Resizer.imageFileResizer(
        file,
        600, // Width in pixels (approx. 6cm)
        200, // Height in pixels (approx. 2cm)
        'JPEG', // Format
        quality, // Quality
        0, // Rotation
        (uri) => {
          // Check the size of the resized image
          const byteString = atob(uri.split(',')[1]);
          const buffer = new ArrayBuffer(byteString.length);
          const intArray = new Uint8Array(buffer);
          for (let i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
          }
          const blob = new Blob([buffer], { type: 'image/jpeg' });
          const sizeInKB = blob.size / 1024;

          if (sizeInKB > 20 && quality > 10) {
            quality -= 10;
            resize();
          } else {
            setResizedImage(uri);
          }
        },
        'base64' // Output type
      );
    };

    resize();
  };

  const downloadImage = () => {
    if (!resizedImage) return;

    const link = document.createElement('a');
    link.href = resizedImage;
    link.download = 'resized-signature.jpg';
    link.click();
  };

  return (
    <div className='main'>
      <h1>Resize Signature Image</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div>
          <h2>Crop Image</h2>
          <Cropper
            src={image}
            style={{ height: 400, width: '100%' }}
            // Cropper.js options
            initialAspectRatio={3}
            aspectRatio={3}
            guides={false}
            crop={handleCrop}
            ref={cropperRef}
          />
          <button onClick={handleCrop}>Crop Image</button>
        </div>
      )}
      {resizedImage && (
        <div>
          <h2>Resized Image</h2>
          <img src={resizedImage} alt="Resized Signature" />
          <button className='button' onClick={downloadImage}>Download Image</button>
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
