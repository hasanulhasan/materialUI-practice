import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: 'bold' } }}>
        <Typography
          variant='h4'
          sx={{ textAlign: 'center' }} >
          Contact with Us
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis consequuntur natus vitae, autem porro eveniet ab animi fugiat ipsum recusandae tempora dolorum labore? Totam sed architecto possimus autem vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, nostrum repellendus, dolorum illo reiciendis minus animi, eum omnis error debitis commodi sequi repellat est quod harum beatae provident sunt sit?</p>
      </Box>
      <Box sx={{
        m: 3,
        width: '600px',
        ml: 10,
        "@media(max-width: 600px)": {
          width: '250px'
        }
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white', textAlign: 'center' }}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><MobileFriendlyIcon sx={{ color: 'green', pt: 1 }} /> 01521401060</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><AddIcCallIcon sx={{ color: 'blue', pt: 1 }} /> 01862086965 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell><AttachEmailIcon sx={{ color: 'red', pt: 1 }} /> hasanulkarimh@gmail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;