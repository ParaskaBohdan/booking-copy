import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";
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
    <TableContainer component={Paper} className="table-container">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>Guests</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!filteredDwellings || filteredDwellings.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="subtitle1">
                  <b>No results found</b>
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            filteredDwellings.map((dwelling) => (
              <TableRow key={dwelling.id}>
                <TableCell>{dwelling.title}</TableCell>
                <TableCell>{dwelling.city.name}</TableCell>
                <TableCell>{dwelling.area} m²</TableCell>
                <TableCell>{dwelling.guests} guests</TableCell>
                <TableCell>
                  <NavLink to={`/dwelling/${dwelling.id}`}>
                    <Typography variant="body2">
                      {dwelling.title}
                    </Typography>
                  </NavLink>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListDwellings;
