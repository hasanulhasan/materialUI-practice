import { Button } from '@mui/base';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const courses = ['React', 'Django', 'MongoDB']
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>Open</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {
            courses.map(course => (
              <ListItemButton onClick={() => setOpen
                (false)}>
                <ListItemText primary={course} />
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;