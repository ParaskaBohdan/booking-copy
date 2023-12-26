import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';
import { API_URL } from '../../index';

const Comments = (props) => {
  const DwellingId = props.id;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await axios.post(`${API_URL}/api/auth/jwt/refresh/`, {
          'refresh': localStorage.getItem('refresh_token'),
        });

        localStorage.setItem('access_token', tokenResponse.data.access);

        let i = 1;
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        };

        while (true) {
          try {
            const response = await axios.get(
              `${API_URL}/api/reviews/${i}`,
              axiosConfig,
            );
            if (response.data.dwelling === DwellingId) {
              setComments((prevComments) => [...prevComments, response.data]);
            }
          } catch (error) {
            setIsLoading(false);
            break;
          }
          i++;
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [DwellingId]);

  const currentItems = comments.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        currentItems.map((comment, index) => (
          <Paper key={index} elevation={3} className="comment">
            <Box className="comment__header" p={2} display="flex" justifyContent="space-between">
              <Box className="comment__author">
                <Typography variant="h6" className="comment__author-name">
                  {comment.user}
                </Typography>
                <Typography variant="subtitle2" className="comment__author-date">
                  {comment.created_at}
                </Typography>
              </Box>
            </Box>
            <Box className="comment__body" p={2}>
              <Typography variant="body1">{comment.comment}</Typography>
            </Box>
          </Paper>
        ))
        
      )}
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </>
  );
};

export default Comments;
