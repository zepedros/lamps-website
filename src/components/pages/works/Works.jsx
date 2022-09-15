import ResponsiveAppBar from "../../common/ResponsiveAppBar";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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




function openImage(imageTitle){
    alert(imageTitle)
}


export default function Works() {
    return (
        <div>

            <ResponsiveAppBar />
            <ImageList variant="masonry" cols={2} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem 
                    key={item.img}
                    onClick={()=>openImage(item.title)}
                    >
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
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