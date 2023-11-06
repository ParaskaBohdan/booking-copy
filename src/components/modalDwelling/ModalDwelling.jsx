// import React, { useState, useEffect } from 'react';
import './style.css';
// import { API_URL } from '../../index';
// import axios from 'axios';

const ModalDwelling = (props) => {
//   const { dwelling } = props;
//   const [showModal, setShowModal] = useState(true);
//   const [images, setImages] = useState([]);

//   const handleClose = () => {
//     setShowModal(false);
//     onClose();
//   };

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const imageRequests = dwelling.photos.map((photo) => {
//             console.log(API_URL + photo.image);
//           return axios.get(API_URL + photo.image);
//         });

//         const imageResponses = await Promise.all(imageRequests);
//         const imageUrls = imageResponses.map((response) => {
//           return URL.createObjectURL(new Blob([response.data]));
//         });

//         setImages(imageUrls);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, [dwelling.photos]);
  return (
    // <div className={`modal ${showModal ? 'show' : 'hide'}`}>
    //   <div className="modal-content">
    //     <span className="close" onClick={handleClose}>
    //       &times;
    //     </span>
    //     <h2>{dwelling.title}</h2>
    //     <p>{dwelling.description}</p>
    //     <p>Гостей: {dwelling.guests}</p>
    //     <p>Площа: {dwelling.area} кв. м.</p>
    //     <p>Тип помешкання: {dwelling.dwelling_type.type_name}</p>
    //     <p>Місто: {dwelling.city.name}</p>
    //     <h3>Фотографії:</h3>
    //     {/* <div className="photo-gallery">
    //       {images.map((image, index) => (
    //         <img key={index} src={image} alt={`Image ${index}`} />
    //       ))}
    //     </div> */}
    //     {/* <div className='photo-gallery'>
    //         {dwelling.photos.map((photo) => (
    //             <img key={photo.id} src={axios.get(API_URL + photo.image)} alt='q' />
    //         ))}
    //     </div> */}
    //   </div>
    // </div>
    <></>
  );
};

export default ModalDwelling;
