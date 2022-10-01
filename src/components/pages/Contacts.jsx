import ResponsiveAppBar from "../common/ResponsiveAppBar"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

const FACEBOOK_URL = "https://www.facebook.com/luis.lamparinas"
const WORK_EMAIL = "luis.pais.jesus@gmail.com"

function openLinkInNewTab(event, link) {
    event.preventDefault();
    window.open(link, "_blank")
}

function openEmailClient() {
    window.open(`mailto:${WORK_EMAIL}`)

}
export default function Contacts() {
    return (
        <div>
            <ResponsiveAppBar />
            <br></br>
            <Typography
                textAlign={"center"}
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
                Here are all of my contacts
            </Typography>
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
            <br></br>
            <Grid container spacing={2}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <IconButton
                        onClick={(e) => openEmailClient()}
                    >
                        <AlternateEmailIcon>
                        </AlternateEmailIcon>
                    </IconButton>

                </Grid>
                <Grid item xs={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <IconButton
                        onClick={(e) => openLinkInNewTab(e, FACEBOOK_URL)}
                    >
                        <FacebookIcon>
                        </FacebookIcon>
                    </IconButton>

                </Grid>
            </Grid>

        </div>
    )
}