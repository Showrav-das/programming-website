import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const SingleCatagory = (props) => {
    const { name, img,id } = props.catagory;
    return (
        <div>
            <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
        <ImageListItem key={id}>
          <img
            src={img}
            srcSet={img}
            alt="this is"
            loading="lazy"
          />
          <ImageListItemBar
            title={name}
          />
        </ImageListItem>
      
    </ImageList>
        </div>
    );
};

export default SingleCatagory;