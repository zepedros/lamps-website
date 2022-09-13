import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ImageListItem from '@mui/material/ImageListItem';
import { Paper, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import image1 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.31.jpeg"
import image2 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.33.jpeg"
import image3 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.34.jpeg"
import image4 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.36.jpeg"
import image5 from "./../../images/23edf836-06ad-4a28-95c4-2f4c87b3f727.jpeg"
import image7 from "./../../images/horizontal/Untitled.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import image6 from "./../../images/bcqd1xykujg61.jpg"
export default function CarouselSlide(props) {
    var items = [
        {
            img: image1
        },
        {
            img: image2
        },
        {
            img: image3
        },
        {
            img: image4
        },
        {
            img: image5
        },
        {
            img: image6
        }
    ]

    return (
        <Carousel
            indicators={false}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosNewIcon />}
            fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: '#1976d2',
                    borderRadius: "6px"
                }
            }}
        >
            {
                items.map((item, i) => {
                    return (
                        <Item key={i} item={item} />
                    )
                })
            }
        </Carousel>
    )

    // return (
    //     <div className="slide-container">
    //         <Fade>
    //             {
    //                 items.map(item => {
    //                     return (
    //                         <div className="each-fade">
    //                             <img src={item.img} />
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </Fade>
    //     </div>
    // )
}

function Item(props) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: "100vh",//100% view height
                width: "100vw"
            }}
        >
            <CardMedia
                sx={{
                    height: "90vh",//100% view height
                    width: "90vw",  // 100% view width
                }}
                component="img"
                image={props.item.img}
            />
        </div>
    )


    // return (
    //     <img
    //         object-fit="contain"
    //         max-width="1920px"
    //         max-height="711px"
    //         src={props.item.img}
    //     >
    //     </img >
    // )
}