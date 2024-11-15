
import { Header } from './header.js';
import { MainImages, displayImages } from './mainimagenes.js';

export const Container = () => {
  const container = document.createElement('main');
  container.className = 'container';

  const { header, searchButton, searchInput } = Header();
  const mainImages = MainImages();

  container.appendChild(header);
  container.appendChild(mainImages);

  const fetchRandomImages = async () => {
    const accessKey = 'w9ElcY7nVEJsKTU-oie_LJd8bMMVjVFsRG9VW0ohQMo';
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=9&client_id=${accessKey}`
    );
    const data = await response.json();
    displayImages(data, mainImages);
  };

  const searchImages = async () => {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
      alert('Por favor, ingrese un término de búsqueda.');
      return;
    }

    const accessKey = '2p1mm-eBK-r3uo-HbbEj0xRy4g_AqVY3FqHtExeMTCg';
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}`
    );
    const data = await response.json();
    if (data.results.length > 0) {
      displayImages(data.results, mainImages);
    } else {
      alert('No se encontraron imágenes, mostrando imágenes aleatorias.');
      fetchRandomImages();
    }

    searchInput.value = '';
  };

  searchButton.addEventListener('click', searchImages);
  fetchRandomImages();

  return container;
};
