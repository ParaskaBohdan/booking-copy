import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const ReviewForm = ({ onSaveReview }) => {
  const [comment, setComment] = useState('');

  const handleSaveReview = () => {
    onSaveReview({ comment });
  };

  return (
    <div>
      <Typography variant="h6">Leave a Review</Typography>
      <TextField
        label="Your Comment"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSaveReview}>
        Save Review
      </Button>
    </div>
  );
};

export default ReviewForm;
