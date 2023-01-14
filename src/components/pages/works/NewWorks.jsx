import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { maxHeight, maxWidth } from '@mui/system';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import waterColor from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.31.jpeg"
import acrylicPainting from "../../../images/NOO3.jpg"

import ResponsiveAppBar from '../../common/ResponsiveAppBar';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


export default function NewWorks() {
    return (
        <Card sx={{ width: "max-width"}}>
            <ResponsiveAppBar/>
                <CardActionArea
                    sx={{ maxHeight: (getWindowDimensions().height) / 2 -36 }}
                >

                    <CardMedia
                        component="img"
                        height="auto"
                        image={itemData[0].img}
                        alt="Water Colors"
                    />
                </CardActionArea>
                <CardActionArea
                    sx={{ maxHeight: (getWindowDimensions().height) / 2 }}
                >
                    <CardMedia
                        component="img"
                        height="auto"
                        image={itemData[1].img}
                        alt="Water Colors"
                    />
                </CardActionArea>
            </Card>
    );
}



const itemData = [
    {
        img: waterColor,
        title: "Water Colors"
    },
    {
        img: acrylicPainting,
        title: "Acrylics"
    }
]