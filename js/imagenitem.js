
export const ImageItem = ({ src, alt, creator, likes }) => {
  const imageContainer = document.createElement('section');
  imageContainer.className = 'image-item';

  // Imagen
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;


  const details = document.createElement('section');
  details.className = 'image-details';
  const creatorText = document.createElement('p');
  creatorText.innerText = `Creado por: ${creator}`;
  const likesText = document.createElement('p');
  likesText.innerText = `Likes: ${likes}`;

  details.appendChild(creatorText);
  details.appendChild(likesText);
  imageContainer.appendChild(img);
  imageContainer.appendChild(details);

  return imageContainer;
};
