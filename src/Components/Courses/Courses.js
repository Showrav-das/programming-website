import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCourse from '../SingleCourse/SingleCourse';


const Courses = () => {
    const [courses, setCouses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCouses(data.slice(0,8)));
    }, []);
    return (
        <div>
            <h1 style={{marginLeft:"0px",color:"chocolate"}}>Our Courses</h1>
            <Box style={{marginLeft:"30px"}} sx={{ width: '100%' }}>
      <Grid container rowSpacing={{ xs: 2,md:4 }} columnSpacing={{md:-12}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        courses.map(course => <Grid  item xs={2} sm={4} md={4} >
                            <SingleCourse key={course.id} course={course}></SingleCourse>
                        </Grid>)}
      </Grid>
    </Box>

        </div>
    );
};

export default Courses;