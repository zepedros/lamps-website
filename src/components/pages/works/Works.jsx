import ResponsiveAppBar from "../../common/ResponsiveAppBar";
import WorkInfo from "./WorkInfo";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CardActionArea } from '@mui/material';
import { useState } from "react";

/**Horizontal Images */
import alfamaViewImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.31.jpeg"
import lisbonBuildingsImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.33.jpeg"
import belemBuildingsImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.34.jpeg"
import clothesDryingImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.35.jpeg"
import buildingsPatternImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.36.jpeg"
//Vertical Images
import alfamaRuaDeSaoMiguelImage from "../../../images/23edf836-06ad-4a28-95c4-2f4c87b3f727.jpeg"
import alfamaRoofsImage from "../../../images/WhatsApp Image 2022-09-08 at 17.33.30.jpeg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"

import blueCircle from "../../../images/38403228_2172272889452607_78789839310290944_n.jpg"
import abstractWomenSketch from "../../../images/49212738_2383709961642231_4030898047918538752_n.jpg"
import heartAndSoul from "../../../images/60134012_2591086547571237_7573481545759981568_n.jpg"
import octupus from "../../../images/128350242_3982015378478340_2030630768029715217_n.jpg"
import lemon from "../../../images/164703303_4296526463693895_5443742767319413468_n.jpg"
import blueAndRedSections from "../../../images/180872235_4420069991339541_2001575597524005924_n.jpg"
/*
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"
import churchWaterColor from "../../../images/16179729_1448576588488911_6675918978981293786_o.jpg"*/

export default function Works() {
    const [showImageInfo, setShowImageInfo] = useState(false)
    const [imageInfo, setImageInfo] = useState({})

    function handleShowImageInfo(open, img, title, description) {
        if (open) {
            setShowImageInfo(open)
            setImageInfo({
                img: img,
                title: title,
                description: description
            })
        } else {
            setShowImageInfo(false)
            setImageInfo({})
        }
    }

    return (
        <div>

            <ResponsiveAppBar />
            {
                showImageInfo ?
                    <div
                        style={
                            {
                                "margin-top": "50px"
                            }
                        }
                    >
                        <WorkInfo
                            img={imageInfo.img}
                            title={imageInfo.title}
                            description={imageInfo.description}
                            handleClosing={() => handleShowImageInfo(false)}
                            onClick={() => handleShowImageInfo(true)}
                        >
                        </WorkInfo>
                    </div>
                    :
                    <div>
                        <ImageList variant="masonry" cols={3} gap={8}
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            {itemData.map((item) => (
                                <CardActionArea key={item.img}>
                                    <ImageListItem
                                        onClick={() => handleShowImageInfo(true, item.img, item.title, item.description)}
                                    >
                                        <img
                                            src={item.img}
                                            srcSet={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                </CardActionArea>
                            ))}
                        </ImageList>
                        <ImageList variant="masonry" cols={2} gap={8}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {itemData.map((item) => (
                                <CardActionArea key={item.img}>
                                    <ImageListItem
                                        onClick={() => handleShowImageInfo(true, item.img, item.title, item.description)}
                                    >
                                        <img
                                            src={item.img}
                                            srcSet={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                </CardActionArea>
                            ))}
                        </ImageList>
                    </div>

            }
        </div>
    )
}

const itemData = [
    {
        img: alfamaViewImage,
        title: "Watercolor painting of Alfama",
        description: "This is an original Watercolor of Alfama, near an alley."
    },
    {
        img: lisbonBuildingsImage,
        title: "Watercolor painting of Lisbon buildings",
        description: "Water color painting of old buildings in Lisbon"
    },
    {
        img: belemBuildingsImage,
        title: "Watercolor painting of Lisbon buildings",
        description: "Water color painting of old buildings in Lisbon"
    },
    {
        img: clothesDryingImage,
        title: "Clothes drying",
        description: "Clothes drying near a window"
    },
    {
        img: buildingsPatternImage,
        title: "Buildings pattern",
        description: "Various Lisbon traditional buildings forming a pattern"
    },
    {
        img: alfamaRuaDeSaoMiguelImage,
        title: "Yellow building in Alfama",
        description: "Building in Alfama alley"
    },
    {
        img: alfamaRoofsImage,
        title: "Alfama Roofs",
        description: "View of the roofs in Alfama"
    },
    {
        img: churchWaterColor,
        title: "Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    },
    {
        img: blueCircle,
        title: "Blue Circle",
        description: ""
    },
    {
        img: abstractWomenSketch,
        title: "Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    },
    {
        img: heartAndSoul,
        title: "Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    },
    {
        img: octupus,
        title: "Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    },
    {
        img: lemon,
        title: "Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    },
    {
        img: blueAndRedSections,
        title: "Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    }
]