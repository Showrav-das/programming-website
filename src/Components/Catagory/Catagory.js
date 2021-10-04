import React, { useEffect, useState } from 'react';
import {Box,Grid} from '@mui/material';
import SingleCatagory from '../SingleCatagory/SingleCatagory';

const Catagory = () => {
    const [catagorys, setCatagorys] = useState([]);
    useEffect(() => {
        fetch("./courses.JSON")
            .then(res => res.json())
            .then(data => setCatagorys(data.slice(8, 12)));
    }, []);
    return (
        <div>
            <h2 style={{marginLeft:"0px",color:"chocolate"}}>Top Catagory</h2>
            <Box style={{marginLeft:"30px"}} sx={{ width: '100%' }}>
      <Grid container rowSpacing={{ xs: 2,md:4 }} columnSpacing={{md:-12}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        catagorys.map(catagory => <Grid  item xs={2} sm={4} md={4} >
                            <SingleCatagory key={catagory.id} catagory={catagory}></SingleCatagory>
                        </Grid>)}
      </Grid>
    </Box>
        </div>
    );
};

export default Catagory;