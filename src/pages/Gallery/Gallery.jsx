import './Gallery.css';

const images = [
    { src: 'https://lh5.googleusercontent.com/p/AF1QipOETT22o9rH--Y4zb060FvaKUFtKnNwGaoCkwKY=w141-h176-n-k-no-nu', alt: 'Image 1' },
    { src: 'https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?size=626&ext=jpg', alt: 'Image 2' },
    { src: 'https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?size=626&ext=jpg', alt: 'Image 3' },
    { src: 'https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?size=626&ext=jpg', alt: 'Image 4' },
    { src: 'https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?size=626&ext=jpg', alt: 'Image 5' },
    { src: 'https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?size=626&ext=jpg', alt: 'Image 5' },
    { src: 'https://img.freepik.com/free-photo/cute-little-girl-holding-books-isolated-studio_1303-31021.jpg?size=626&ext=jpg', alt: 'Image 5' },
    { src: 'https://img.freepik.com/free-photo/charming-little-girl-with-white-shirt-covered-with-different-paints_8353-7532.jpg?size=626&ext=jpg', alt: 'Image 7'},
    { src: 'https://img.freepik.com/free-photo/childhood-dream-about-big-famous-future-pretty-little-kids-isolated-yellow-studio-background_155003-46634.jpg?size=626&ext=jpg', alt: 'Image8'},
    { src: 'https://img.freepik.com/free-photo/cute-little-girl-drawing-with-pencils-home_169016-3329.jpg?size=626&ext=jpg', alt: 'Image 9'},
    { src: 'https://lh5.googleusercontent.com/p/AF1QipO8KIyT2pUGV9vry9jQVYGcnqTuFLFDFVuZmVok=w141-h235-n-k-no-nu', alt: 'Image4'},
    { src: 'https://img.freepik.com/free-photo/hands-child-who-smeared_1150-20658.jpg?size=626&ext=jpg&uid=R116433410&semt=sph', alt: 'Image55'},
    { src: 'https://img.freepik.com/premium-photo/child-pretend-be-pilot-kid-having-fun-home-happy-child-dreaming-about-travel_411285-9366.jpg?size=626&ext=jpg&uid=R116433410&semt=sph', alt:'Image9'},
    { src: 'https://img.freepik.com/free-photo/little-girl-megaphone-positive-shoot_53876-137697.jpg?size=626&ext=jpg&uid=R116433410&semt=sph', alt : 'Image99'},
    { src: 'https://lh5.googleusercontent.com/p/AF1QipNAnPyL2wU_V9Ifmz55apF3ULGngvNV7s7e3GXZ=w141-h101-n-k-no-nu', alt: 'Image5'}
  ];

function Gallery() {
    return(
        <div className='gallery'>
           {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
        </div>
    );
}

export default Gallery;