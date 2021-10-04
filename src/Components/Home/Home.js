import {Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0,4)));
    }, []);
    return (
        <div className="card">
            <Box sx={{ flexGrow: 1 }}>
                <Grid  container rowSpacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 6 }}>
                    {
              courses.map(course =><Grid className="home-grid-space">

             <Card md={{ width:300,height:300}}>
        <CardMedia
        component="img"
        height="200"
        weight="200"                  
        image={course.img}
        alt="Paella dish"
      />
        <CardHeader
        key={course.id}
        title= {course.name}
        subheader={course.last_update}
      />
      <CardContent>
            <Typography variant="body4">
              <h5>{course.author} </h5>
             <span>${course.price}</span>
              <span className="course-price">${course.previous}</span> <br />
             <Button variant="contained">Enroll Now</Button>                         
    </Typography>
      </CardContent>
    </Card>
</Grid>)}
 </Grid>      
 </Box>         
            
</div>
    );
};

export default Home;

