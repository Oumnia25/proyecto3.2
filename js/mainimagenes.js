
import { ImageItem } from './imagenitem.js';

export const MainImages = () => {
  const mainImages = document.createElement('section');
  mainImages.className = 'main-images';

  return mainImages;
};

export const displayImages = (data, container) => {
  container.innerHTML = '';
  data.forEach((photo) => {
    const { alt_description, urls, user, likes } = photo;
    const imageItem = ImageItem({
      src: urls.small,
      alt: alt_description || 'Imagen sin descripción',
      creator: user.name,
      likes: likes
    });
    container.appendChild(imageItem);
  });
};
