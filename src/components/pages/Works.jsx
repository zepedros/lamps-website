import PaintingCard from "../common/PaintingCard"
import ResponsiveAppBar from "../common/ResponsiveAppBar";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import image1 from "./../../images/23edf836-06ad-4a28-95c4-2f4c87b3f727.jpeg"
import image2 from "./../../images/horizontal/andreas-gucklhorn-mawU2PoJWfU-unsplash.jpg"
import image3 from "./../../images/bcqd1xykujg61.jpg"
import image4 from "./../../images/horizontal/kym-mackinnon-uWuqq0qWUMo-unsplash.jpg"
import json_data from "../../data.json"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from 'react'
//import image2 from "./../images/"


export default function Works() {
    //console.log(json_data.images);
    /*
    let array = json_data
    let cardList = array.map(imageObject => {

        return <PaintingCard image={image1} title={imageObject.name} description={imageObject.description} />

    })*/
    return (
        <div>

            <ResponsiveAppBar />
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/*
            <PaintingCard image={image1} title={"Watercolor painting of Alfama"} description={"This is an original Watercolor of Alfama, near an alley."}/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <PaintingCard image={image1} title={"Watercolor painting of Alfama"} description={"This is an original Watercolor of Alfama, near an alley."} />
                </Grid>
                <Grid item xs={6}>
                    <PaintingCard image={image1} title={"Watercolor painting of Alfama"} description={"This is an original Watercolor of Alfama, near an alley."} />
                </Grid>
                <Grid item xs={6}>
                    <PaintingCard image={image1} title={"Watercolor painting of Alfama"} description={"This is an original Watercolor of Alfama, near an alley."} />
                </Grid>
                <Grid item xs={6}>
                    <PaintingCard image={image1} title={"Watercolor painting of Alfama"} description={"This is an original Watercolor of Alfama, near an alley."} />
                </Grid>
            </Grid>
    {*/}
        </div>
    )
}

const itemData = [
    {
        "img": image1,
        "title": "Watercolor painting of Alfama",
        "description": "This is an original Watercolor of Alfama, near an alley."
    },
    {
        "img": image2,
        "title": "Vertical wallpaper",
        "description": "Vertical wallpaper used to test vertical images"
    },
    {
        "img": image4,
        "title": "horizontal picture of the mountains and the moon",
        "description": "horizontal wallpaper used to test vertical images"
    },
    ,
    {
        "img": image3,
        "title": "Vertical wallpaper",
        "description": "Vertical wallpaper used to test vertical images"
    }
]