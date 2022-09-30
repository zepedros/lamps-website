import ResponsiveAppBar from "../common/ResponsiveAppBar"
import Typography from '@mui/material/Typography';


export default function AboutMe() {
    return (
        <div>
            <ResponsiveAppBar />
            <Typography
                variant="h3"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                sx={{
                    mr: 3,
                    flexGrow: 1,
                    fontFamily: 'Roboto Slab',
                    fontWeight: 700,
                    color: '#2E3B55',
                    textDecoration: 'none',
                }}
            >
                Luís Jesus
            </Typography>
        </div>
    )
}