import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { maxHeight, maxWidth } from '@mui/system';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import alfamaViewImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.31.jpeg"
import lisbonBuildingsImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.33.jpeg"
import ResponsiveAppBar from '../../common/ResponsiveAppBar';

export default function NewWorks() {
    /*let box = document.querySelector('.box');
    let width = box.offsetWidth;
    let height = box.offsetHeight;*/
    return (
        /*
        <div>
            <ResponsiveAppBar/>
            <ImageList sx={{width: maxWidth, height: "800px" }} cols={1} rowHeight={"auto"}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>*/
        <div
            width="max-width"
        >
            <ResponsiveAppBar />
            <Card sx={{ width: "max-width", maxHeight: getWindowDimensions().height }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: "50%" }}
                        component="img"
                        height="auto"
                        image={itemData[0].img}
                        alt="Water Colors"
                    />
                    <CardMedia
                        sx={{ height: "50%" }}
                        component="img"
                        height="auto"
                        image={itemData[0].img}
                        alt="Water Colors"
                    />
                </CardActionArea>
            </Card>
        </div>
    );
}


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

const itemData = [
    {
        img: alfamaViewImage,
        title: "Title 1"
    },
    {
        img: lisbonBuildingsImage,
        title: "Title 2"
    }
]
