import ResponsiveAppBar from "../common/ResponsiveAppBar"
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import picture from "../../images/242167442_4837585812921288_7366807970780100911_n.jpg"


export default function AboutMe() {
    return (
        <div>
            <ResponsiveAppBar />
            {/*Title*/}
            <Typography
                variant="h4"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                sx={{
                    fontFamily: 'Roboto Slab',
                    fontWeight: 700,
                    color: '#2E3B55',
                    textDecoration: 'none',
                }}
            >
                Luís Jesus
            </Typography>
            <br></br>
            {/**Small text */}
            <Typography
                textAlign={"center"}
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
                My name is Luís Jesus and I was born in Lisbon in 1963. I works as a Physical Education teacher and I'm self-taught in the field of drawing and painting.
            </Typography>
            <br></br>
            <Divider />
            <br></br>
            {/**Developed activities */}
            <Typography
                sx={{
                    fontFamily: 'Roboto Slab',
                    fontWeight: 500,
                    color: '#2E3B55',
                    textDecoration: 'none',
                }}
                variant="h6"
                marginLeft={"2%"}
            >
                Developed activities
            </Typography>
            <br></br>
            <Typography
                sx={{
                    fontFamily: 'Roboto Slab',
                    fontWeight: 200,
                    color: 'black',
                    textDecoration: 'none',
                }}
                variant="body2"
                marginLeft={"5%"}
            >
                ⭘ Collaborator with work developed within the scope of illustration, for supporting documentation for the different courses at the Cenfic professional training center
                (since 1988 – 2000);
                <br></br>
                <br></br>
                ⭘ Post-Labour Model Drawing Course, at the Society of Fine Arts
                (1991);
                <br></br>
                <br></br>
                ⭘ Various works in the field of graphic design/advertising, namely:
                Design and production of logos, catalogues, flyers, posters and various promotional material, to promote and publicize companies, brands, products, seminars and congresses, this work being developed in partnership with very diverse institutions / companies
                (1991 2018);
                <br></br>
                <br></br>
                ⭘ Work carried out in the scope of design, conception and production of sports equipment for different sports (goals, poles and basketball cars), (2007 – 2010);
                <br></br>
                <br></br>
                ⭘ Exhibition and sale of watercolors about Alfama and Lisbon in several craft shops in Lisbon (2019 present)
            </Typography>
            <br></br>
            <Divider variant="inset" />
            <br></br>
            <Typography
                sx={{
                    fontFamily: 'Roboto Slab',
                    fontWeight: 500,
                    color: '#2E3B55',
                    textDecoration: 'none',
                }}
                variant="h6"
                marginLeft={"2%"}
            >
                Exhibitions
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Roboto Slab',
                    fontWeight: 200,
                    color: 'black',
                    textDecoration: 'none',
                }}
                variant="body2"
                marginLeft={"5%"}
            >
                ⭘ Individual exhibition at Loures Municipal Store (1994)
                <br></br>
                <br></br>
                ⭘ Collective exhibition at the Ericeira Tourist Office (1995)
                <br></br>
                <br></br>
                ⭘ Collective exhibition of the Municipality of Loures ARTESCOLA (2017)
                <br></br>
                <br></br>
                ⭘ Press conference of the Municipality of Loures ARTESCOLA (2019)
            </Typography>

        </div>
    )
}