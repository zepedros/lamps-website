import ResponsiveAppBar from "../common/ResponsiveAppBar"
import CarouselSlide from "./CarouselSlide";

export default function Home() {
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <CarouselSlide></CarouselSlide>
            </div>
        </div>
    )
}