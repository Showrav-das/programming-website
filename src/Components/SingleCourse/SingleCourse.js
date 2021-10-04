import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@mui/material';
import "./SingleCourse.css";


const SingleCourse = (props) => {
//    destructuring object
    const { img, price, previous, name,last_update,author } = props.course;
    return (
        <div>
            <Card sx={{ width: 350,height:470 }}>
      
      <CardMedia component="img"
                    width="80%"
                    height="200px"
        image={img}
        alt="Programming Image"/>
                <CardContent>
                    <h3>{name}</h3>
                    <h4>{author} </h4>
                    <Typography>
                        <h4>Last update:{last_update} </h4>
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight:"700",color:"black"}}>${price}</span>
                <span id="privious-price">${ previous}</span>
             </Typography>
            <Button variant="contained">Enroll Now</Button>
      </CardContent>
            </Card>

        </div>
    );
};

export default SingleCourse;