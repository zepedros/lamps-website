import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CardMedia from '@mui/material/CardMedia';
import image1 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.31.jpeg"
import image2 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.33.jpeg"
import image3 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.34.jpeg"
import image4 from "./../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.36.jpeg"
import image5 from "./../../images/23edf836-06ad-4a28-95c4-2f4c87b3f727.jpeg"

import image6 from "../../images/horizontal/11 PRINT OK  -  É O CAMINHO 200 A3  HORIZONTAL   EEA.jpg"
import image7 from "../../images/horizontal/29511260_1989151991098032_2297300043901532653_n.jpg"
import image8 from "../../images/horizontal/PRINT 12 OK  - 3  ABSTRACT  FORMATO A2 200 DPI NOVO  200  - FORMATO DA FOLHA A2 HORIZONTAL   EEA.jpg"
import image9 from "../../images/horizontal/PRINT 13 OK - NOVO LETRAS  A2  200 - HORIZONTAL  200  -  EEA.jpg"
import image10 from "../../images/horizontal/272292982_5295857060427492_1155442714926173568_n.jpg"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function CarouselSlide(props) {
    var items = [
        {
            img: image6
        },
        {
            img: image7
        },
        {
            img: image8
        },
        {
            img: image9
        },
        {
            img: image10
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
                    backgroundColor: '#1976d1',
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
                height: "90vh",//100% view height
                width: "auto",  // 100% view width
            }}
        >
            <CardMedia
                sx={{
                    height: "80vh",//100% view height
                    width: "80vw",  // 100% view width
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