import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
     <Box sx={{
      my: 15,
      p: 2,
      textAlign: 'center',
      "& h4": {
        fontWeight: 'bold'
      },
      "& p": {
        textAlign: 'justify',
        my: 2,
      },
      "@media (max-width:600px)": {
        mt: 0
      }
      }}>
      <Typography variant='h4'>
        Welcome to my Restaurant
        </Typography>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat eius saepe accusantium ipsa, quo veniam modi sed iusto. Dignissimos, reiciendis cum. Sed corporis ex dicta amet deleniti unde totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sapiente odio assumenda tempore aspernatur. Non sequi, ea maiores incidunt doloremque earum labore fugiat, consequatur quas veniam rerum. Molestias, est reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum ex cupiditate doloribus, aperiam sit? Tempore nisi illum libero architecto esse! Voluptas quos, corrupti quo at rerum sint soluta nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis mollitia quod repudiandae fuga provident obcaecati praesentium, architecto sit dolores cumque ut voluptatum nisi sint debitis voluptatem rem illum dolore!</p><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat eius saepe accusantium ipsa, quo veniam modi sed iusto. Dignissimos, reiciendis cum. Sed corporis ex dicta amet deleniti unde totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sapiente odio assumenda tempore aspernatur. Non sequi, ea maiores incidunt doloremque earum labore fugiat, consequatur quas veniam rerum. Molestias, est reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum ex cupiditate doloribus, aperiam sit? Tempore nisi illum libero architecto esse! Voluptas quos, corrupti quo at rerum sint soluta nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis mollitia quod repudiandae fuga provident obcaecati praesentium, architecto sit dolores cumque ut voluptatum nisi sint debitis voluptatem rem illum dolore!</p>
     </Box>
    </Layout>
  );
};

export default About;