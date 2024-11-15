export const Header = () => {
  const header = document.createElement('header');
  header.className = 'header';

  // Logo
  const logo = document.createElement('img');
  logo.src =
    'https://res.cloudinary.com/dbtc8nyvm/image/upload/v1697558137/pinterest/1200px-Pinterest.svg_lbkvwl.png';
  logo.alt = 'Logo';
  logo.className = 'logo';


  const searchArea = document.createElement('section');
  searchArea.className = 'search-area';
  const searchInput = document.createElement('input');
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Buscar imágenes...';
  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.innerText = 'Buscar';
  searchArea.appendChild(searchInput);
  searchArea.appendChild(searchButton);
  header.appendChild(logo);
  header.appendChild(searchArea);

  return { header, searchButton, searchInput };
};
