import ResponsiveAppBar from "../common/ResponsiveAppBar"
import CarouselSlide from "./CarouselSlide";

const carouselStyle = {
    
}

export default function Home() {
    return (
        <div>
            <ResponsiveAppBar />
            <div style={carouselStyle}>
                <CarouselSlide></CarouselSlide>
            </div>
        </div>
    )
}