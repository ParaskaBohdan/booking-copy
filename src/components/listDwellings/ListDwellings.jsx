import React from 'react';
import ModalDwelling from '../modalDwelling/ModalDwelling';
import './style.css';

const ListDwellings = (props) => {
  const { Dwellings, filters } = props;

  const filteredDwellings = Dwellings.filter((dwelling) => {
    let cityLowerCase = dwelling.city?.name?.toLowerCase();
    let searchValueLowerCase = filters.searchValue?.toLowerCase();

    const areBothDatesSelected = filters.dates.entryDate && filters.dates.exitDate;
    
    const isCitySelected = filters.searchValue && filters.searchValue.trim() !== '';

    return (
        (isCitySelected ? cityLowerCase.startsWith(searchValueLowerCase) : true) &&
        ((filters.adults + filters.children) <= dwelling.guests) &&
        (areBothDatesSelected ? dwelling.occupied_dates.map((occupied_date) => {
            const entryDate = new Date(filters.dates.entryDate);
            const exitDate = new Date(filters.dates.exitDate);
            const occupiedDate = new Date(occupied_date);
            return (
                (entryDate < occupiedDate && exitDate < occupiedDate) ||
                (entryDate > occupiedDate && exitDate > occupiedDate)
            );
        }).length === 0 : true)
    );
});



  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>City</th>
            <th>Area</th>
            <th>Guests</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!filteredDwellings || filteredDwellings.length <= 0 ? (
            <tr>
              <td colSpan="5" align="center">
                <b>No results found</b>
              </td>
            </tr>
          ) : (
            filteredDwellings.map((dwelling) => (
              <tr key={dwelling.id}>
                <td>{dwelling.title}</td>
                <td>{dwelling.city.name}</td>
                <td>{dwelling.area} m²</td>
                <td>{dwelling.guests} guests</td>
                <td>
                  <ModalDwelling
                    create={false}
                    dwelling={dwelling}
                    resetState={props.resetState}
                    newDwelling={props.newDwelling}
                    onClose={() => {}}
                  />
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
