import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from "react";

export default function PaintingsGallery(props){

    return (
        <div>
            <ImageList variant="masonry" cols={4} gap={8}
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            {props.itemData.map((item) => (
                                <CardActionArea key={item.img}>
                                    <ImageListItem
                                        onClick={() => props.handleShowImageInfo(true, item.img, item.title, item.description)}
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
                            {props.itemData.map((item) => (
                                <CardActionArea key={item.img}>
                                    <ImageListItem
                                        onClick={() => props.handleShowImageInfo(true, item.img, item.title, item.description)}
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
    )
}