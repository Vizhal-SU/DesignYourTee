import state from '../store';

export const saveCanvasToDatabase = async (username) => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();

  // Design type based on state
  let designType;
  if (state.isLogoTexture && state.isFullTexture) {
    designType = 'both';
  } else if (state.isLogoTexture) {
    designType = 'logo';
  } else if (state.isFullTexture) {
    designType = 'design';
  } else {
    designType = 'plain';
  }

  try {
    const response = await fetch('http://localhost:8000/api/v1/cart/add-cart-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, design: dataURL, type: designType, qty: 1, size: 'M' }) // Added qty with default 1
    });

    if (!response.ok) {
      throw new Error('Failed to save image to database');
    }

    return response.json();
  } catch (error) {
    console.error('Error saving canvas to database:', error);
  }
};


export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
};
