import { Button, CardActions, CardContent, CardMedia, Typography, Card as CardItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import React, { useState } from 'react';

const CardMui = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ margin: '10px' }}>
      <CardItem sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://upload.wikimedia.org/wikipedia/commons/7/7d/Persian_Leopard_sitting.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={() => setOpen(!open)}>Delete</Button>
        </CardActions>
      </CardItem>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error'>cancel</Button>
          <Button variant='contained' color='success' onClick={() => setOpen(!open)}>delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CardMui;