import ResponsiveAppBar from "../../common/ResponsiveAppBar";
import WorkInfo from "./WorkInfo";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CardActionArea } from '@mui/material';
import { useState } from "react";
import Typography from '@mui/material/Typography';


/**Horizontal Images */
import alfamaViewImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.31.jpeg"
import lisbonBuildingsImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.33.jpeg"
import belemBuildingsImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.34.jpeg"
import clothesDryingImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.35.jpeg"
import buildingsPatternImage from "../../../images/horizontal/WhatsApp Image 2022-09-08 at 17.33.36.jpeg"

import waterColorAbstract from "../../../images/horizontal/11 PRINT OK  -  É O CAMINHO 200 A3  HORIZONTAL   EEA.jpg"
import acrylicPainting5 from "../../../images/horizontal/8012_1168389223174317_6422783645900486280_n.jpg"
import penDrawing from "../../../images/horizontal/10365433_895023477177561_5959023679316597926_o.jpg"
import waterColorPaintingHouses from "../../../images/horizontal/10636908_855543224458920_7248573653353405242_o.jpg"
import digitalPainting from "../../../images/horizontal/12232687_1099316683414905_2621507990335114360_o.jpg"
import nightSkyScenery from "../../../images/horizontal/29511260_1989151991098032_2297300043901532653_n.jpg"
import waterColorLisbon from "../../../images/horizontal/30443131_2008831329130098_487148376261918720_n.jpg"
import topViewWaterColor from "../../../images/horizontal/41826414_2238797246133504_8347112469822439424_n.jpg"
import lisbonView from "../../../images/horizontal/53754255_2505855636094329_6262691285463728128_n.jpg"
import lisbonView2 from "../../../images/horizontal/61673625_2627411670605391_478152726174236672_n.jpg"
import waterColorView from "../../../images/horizontal/116171348_3595815260431689_8973891223819383811_n.jpg"
import skirtPainting from "../../../images/horizontal/272292982_5295857060427492_1155442714926173568_n.jpg"
import digitalPaintingAbstract from "../../../images/horizontal/PRINT 12 OK  - 3  ABSTRACT  FORMATO A2 200 DPI NOVO  200  - FORMATO DA FOLHA A2 HORIZONTAL   EEA.jpg"
import alphabetPainting from "../../../images/horizontal/PRINT 13 OK - NOVO LETRAS  A2  200 - HORIZONTAL  200  -  EEA.jpg"


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
import abstractColors from "../../../images/182423661_4424833480863192_5044848793166104859_n.jpg"
import AcrylicRedPaintingBlueCircle from "../../../images/190695969_4496851760328030_1779139491503742142_n.jpg"
import churchBlueSky from "../../../images/194153151_4512567745423098_7460019725386102766_n.jpg"
import abstractAcrylicMultiColor from "../../../images/215804346_4623588390987699_7449618918348177131_n.jpg"
import churchTower from "../../../images/228240302_4688106837869187_8611892474626808708_n.jpg"
import oldPainting from "../../../images/242167442_4837585812921288_7366807970780100911_n.jpg"
import AcrylicPainting2 from "../../../images/269958154_5174091365937396_1279809786326248223_n.jpg"
import AcrylicPainting3 from "../../../images/271190825_5213010555378810_7260475033957528584_n.jpg"
import churchPencilDrawing from "../../../images/279266684_5590351617644700_7702940570532161143_n.jpg"
import AcrylicPainting4 from "../../../images/279298969_5587948514551677_2837243389122547074_n.jpg"
import linesPainting1 from "../../../images/296968922_5837028956310297_4846095067611844365_n.jpg"
import linesPainting2 from "../../../images/NOO3.jpg"

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
                        <br></br>
                        <Typography
                            textAlign={"center"}
                            marginLeft={"2%"}
                            marginRight={"2%"}
                            variant="body2"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            sx={{
                                fontFamily: 'Roboto Slab',
                                fontWeight: 500,
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                            Some of the paintings shown on the works section of the website are being made into a limited series. These are then numbered, signed and properly authenticated by the author (Luís Jesus). If you wish to get more information, feel free to contact us.
                        </Typography>
                        <ImageList variant="masonry" cols={4} gap={8}
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
        title: "Painting #1 :Watercolor painting of Alfama",
        description: "This is an original Watercolor of Alfama,showing the view from one of the buildings."
    },
    {
        img: lisbonBuildingsImage,
        title: "Painting #2: Watercolor painting of Lisbon buildings",
        description: "Water color painting of old buildings in Lisbon"
    },
    {
        img: belemBuildingsImage,
        title: "Painting #3",
        description: "Water color painting of old buildings in Lisbon"
    },
    {
        img: clothesDryingImage,
        title: "Painting #4",
        description: "Clothes drying near a window"
    },
    {
        img: buildingsPatternImage,
        title: "Painting #5: Buildings pattern",
        description: "Various Lisbon traditional buildings forming a pattern"
    },
    {
        img: alfamaRuaDeSaoMiguelImage,
        title: "Painting #6: Yellow building in Alfama",
        description: "Building in Alfama alley"
    },
    {
        img: alfamaRoofsImage,
        title: "Painting #7: Alfama Roofs",
        description: "View of the roofs in Alfama"
    },
    {
        img: churchWaterColor,
        title: "Painting #8: Church in Lisbon",
        description: "Church in Lisbon painted with water color"
    },
    {
        img: blueCircle,
        title: "Painting #9: Blue Circle",
        description: ""
    },
    {
        img: abstractWomenSketch,
        title: "Painting #10",
        description: ""
    },
    {
        img: heartAndSoul,
        title: "Painting #11",
        description: ""
    },
    {
        img: octupus,
        title: "Painting #12",
        description: ""
    },
    {
        img: lemon,
        title: "Painting #13",
        description: ""
    },
    {
        img: blueAndRedSections,
        title: "Painting #14",
        description: ""
    },
    {
        img: abstractColors,
        title: "Painting #15: Abstract Colorful pattern",
        description: "Abstract patern consisting of various colors. Painting made with Acrylic"
    },
    {
        img: AcrylicRedPaintingBlueCircle,
        title: "Painting #16: Blue sphere",
        description: "Abstract Acrylic painting consisting a blue sphere in a crimson background"
    },
    {
        img: abstractAcrylicMultiColor,
        title: "Painting #17: Acrylic painting",
        description: "Abstract Acrylic painting"
    },
    {
        img: churchBlueSky,
        title: "Painting #18: Fuzeta Church",
        description: "Digital painting of a church in Fuseta"
    },
    {
        img: abstractAcrylicMultiColor,
        title: "Painting #19: Multi color strokes",
        description: "Abstract strokes consisting of various colors. Painting made with Acrylic"
    },
    {
        img: churchTower,
        title: "Painting #20: Church tower",
        description: "Paiting depicting a church tower"
    },
    {
        img: oldPainting,
        title: "Painting #21: Abstract draw from 1991",
        description: "Abstract draw from the year of 1991. It depicts various different scenes as well as two figures"
    },
    {
        img: AcrylicPainting2,
        title: "Painting #22: Acrylic painting",
        description: "Acrylic painting depicting a scenery"
    },
    {
        img: AcrylicPainting3,
        title: "Painting #23: Acrylic Painting",
        description: "Multi colored Acrylic painting"
    },
    {
        img: churchPencilDrawing,
        title: "Painting #24: Church pencil drawing",
        description: "Church draw done with pencil"
    },
    {
        img: AcrylicPainting4,
        title: "Painting #25: Acrylic Painting",
        description: "Acrylic painting depicting a blue and orange pattern"
    },
    {
        img: linesPainting1,
        title: "Painting #26: Abstract lines Painting",
        description: "Abstract Acrylic painting depicting a series of white lines on a green and blue pattern of strokes"
    },
    {
        img: linesPainting2,
        title: "Painting #27: Abstract lines Painting",
        description: "Abstract Acrylic painting depicting a series of white lines on a red, ping and yellow pattern of strokes"
    },
    {
        img: waterColorAbstract,
        title: "Painting #28: Abstract watercolor painting",
        description: "Abstract water color painting"
    },
    {
        img: acrylicPainting5,
        title: "Painting #29: Acrylic painting",
        description: "Abstract Acrylic"
    },
    {
        img: penDrawing,
        title: "Painting #30: Pen drawing",
        description: "Abstract Acrylic painting depicting a series of white lines on a red, ping and yellow pattern of strokes"
    },
    {
        img: nightSkyScenery,
        title: "Painting #31: Night scenery",
        description: "Scenery of the night sky with a city in the distance"
    },
    {
        img: waterColorLisbon,
        title: "Painting #32: Watercolor of Lisbon",
        description: "Watercolor painting of Lisbon in a purple and blue sky"
    },
    {
        img: topViewWaterColor,
        title: "Painting #33: Top view of a city",
        description: "Watercolor painting depicting a top view of a city"
    },
    {
        img: skirtPainting,
        title: "Painting #34: Digital painting of someone in a skirt",
        description: "Digital painting of someone in a skirt"
    },
    {
        img: digitalPaintingAbstract,
        title: "Painting #35: Digital abstract painting",
        description: "Abstract digital painting"
    },
    {
        img: alphabetPainting,
        title: "Painting #36: Alphabet",
        description: "Watercolor painting of the alphabet"
    }
]