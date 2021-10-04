import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const About = () => {
    
    return (
        <div>
            <Card sx={{Width: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Best Learning Programming Site
        </Typography>
        <Typography variant="body2" color="#607d8b" fontSize="20px" textAlign="center">
        Learn key takeaway skills of programming and earn a certificate of completion. Create portfolio projects that showcase your new skills to help land your dream job. Interactive Online Course. Upgrade Your Career Today. Free 7 Day Pro Trial. Leader in Programming Piont Join 45 Million Learners.
          <br />
          {'"Effort Your Best,one day Will Susscess"'}
         </Typography>
         </CardContent>         
    </Card>
        </div>
    );
};

export default About;