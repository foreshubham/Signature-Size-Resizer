# Image Resizer and Cropper

This project is a React application that allows users to upload an image, crop it, and resize it to specific dimensions (6cm by 2cm). It also includes drag-and-drop functionality for image uploads and ensures the resized image is between 10KB and 20KB.

## Problem Statement

Many students and job seekers face issues when filling out forms that require signature images to match specific dimensions. This project aims to solve this problem by providing an easy-to-use web application that allows users to upload, crop, and resize their signature images to the required dimensions.

## Features

- **Upload Images:** Upload images via file input or drag-and-drop.
- **Crop Image:** Crop the uploaded image using a responsive cropper.
- **Resize Image:** Resize the cropped image to 6cm by 2cm.
- **Download Image:** Download the resized image.
- **Responsive Design:** Works well on all devices.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/foreshubham/Signature-Size-Resizer.git
    cd Signature-Size-Resizer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Upload an image via file input.
3. Crop the image as desired.
4. Click the "Crop Image" button to apply the crop.
5. The resized image will appear on the below.
6. Click the "Download Image" button to save the resized image.

## Dependencies

- React
- react-image-file-resizer
- react-cropper
- cropperjs
- react-dropzone

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

- Shubham - [foreshubham](https://github.com/foreshubham)
