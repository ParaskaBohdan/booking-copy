import React from 'react';
import ModalDwelling from '../modalDwelling/ModalDwelling';
// import AppRemoveDwelling from '../appRemoveDwelling/AppRemoveDwelling';
// import ModalImage from '../modalImage/ModalImage';
import './style.css';

const ListDwellings = (props) => {
  const { Dwellings } = props;

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>City</th>
            <th>Area</th>
            <th>Guests</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!Dwellings || Dwellings.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Пока ничего нет</b>
              </td>
            </tr>
          ) : (
            Dwellings.map((dwelling) => (
              <tr key={dwelling.id}>
                <td>{dwelling.title}</td>
                <td>{dwelling.city.name}</td>
                <td>{dwelling.area} m²</td>
                <td>{dwelling.guests} guests</td>
                {/* <td>
                  <ModalImage Images={dwelling.Images} />
                </td> */}
                <td>
                  <ModalDwelling
                    create={false}
                    dwelling={dwelling}
                    resetState={props.resetState}
                    newDwelling={props.newDwelling}
                    onClose={() => {}}
                  />
                  {/* <AppRemoveDwelling
                    id={dwelling.id}
                    resetState={props.resetState}
                  /> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ListDwellings;
