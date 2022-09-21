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
import grandCanyonImage from "../../../images/bcqd1xykujg61.jpg"
import alfamaRoofsImage from "../../../images/WhatsApp Image 2022-09-08 at 17.33.30.jpeg"


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
                    <ImageList variant="masonry" cols={2} gap={8}>
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
        img: grandCanyonImage,
        title: "Grand Canyon",
        description: "Grand Canyon wallpaper"
    },
    {
        img: alfamaRoofsImage,
        title: "Alfama Roofs",
        description: "View of the roofs in Alfama"
    }
]