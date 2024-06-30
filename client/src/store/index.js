import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  user: '',
  cart: 'closed',
  rotate: true,
  angle: 0,

  isLogoTexture: true,
  isFullTexture: false,
  isLogoTextureFront: true,
  isFullTextureFront: true,
  isLogoTextureBack: false,
  isFullTextureBack: false,

  logoScaleFront: 0.15,
  fullScaleFront: 1,
  logoScaleBack: 0.15,
  fullScaleBack: 1,

  logoDecalFront: './tiger.png',
  fullDecalFront: './tiger.png',
  logoDecalBack: './tiger.png',
  fullDecalBack: './tiger.png',

  fullPosition: 'none',
  logoPosition: 'front',
});

export default state;