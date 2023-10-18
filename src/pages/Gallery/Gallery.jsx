import { useState, useEffect } from 'react';
import './Gallery.css';


const imagesPerPage = 10; 

const images = [
  { src: require('../../assets/img/images/DSC_0177.JPG'), alt: 'Image 1' },
  { src: require('../../assets/img/images/DSC_0181.JPG'), alt: 'Image 2' },
  { src: require('../../assets/img/images/DSC_0090.JPG'), alt: 'Image 3' },
  { src: require('../../assets/img/images/DSC_0158.JPG'), alt: 'Image 4' },
  { src: require('../../assets/img/images/DSC_0442.JPG'), alt: 'Image 5' },
  { src: require('../../assets/img/images/DSC_0222.JPG'), alt: 'Image 6' },
  { src: require('../../assets/img/images/DSC_0163.JPG'), alt: 'Image 7' },
  { src: require('../../assets/img/images/DSC_0212.JPG'), alt: 'Image 8' },
  { src: require('../../assets/img/images/DSC_0183.JPG'), alt: 'Image 9' },
  { src: require('../../assets/img/images/DSC_0194.JPG'), alt: 'Image 10' },
  { src: require('../../assets/img/images/DSC_0228.JPG'), alt: 'Image 11' },
  { src: require('../../assets/img/images/DSC_0122.JPG'), alt: 'Image 12' },
  { src: require('../../assets/img/images/DSC_0116.JPG'), alt: 'Image 13' },
  { src: require('../../assets/img/images/DSC_0253.JPG'), alt: 'Image 14' },
  { src: require('../../assets/img/images/DSC_0257.JPG'), alt: 'Image 15' },
  { src: require('../../assets/img/images/DSC_0261.JPG'), alt: 'Image 16' },
  { src: require('../../assets/img/images/DSC_0300.JPG'), alt: 'Image 17' },
  { src: require('../../assets/img/images/DSC_0330.JPG'), alt: 'Image 18' },
  { src: require('../../assets/img/images/DSC_0373.JPG'), alt: 'Image 19' },
  { src: require('../../assets/img/images/DSC_0203.JPG'), alt: 'Image 20' },
  
];

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, totalImages);

  const visibleImages = images.slice(startIndex, endIndex);

  return (
    <>
    <div className='gallery'>
      {visibleImages.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
          loading='lazy'
        />
      ))}
    </div>
    <div className="pagination">
    <button className='paginationButton' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
    <span className='paginationText'>Page {currentPage} of {totalPages}</span>
    <button className='paginationButton' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
  </div>
  </>
  );
}

export default Gallery;
