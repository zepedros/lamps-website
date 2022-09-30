import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function WorkInfo(props) {

    return (
        <div>
            <Grid container spacing={2}
                sx={{
                    display: { xs: 'none', md: 'flex' }
                }}
            >
                <Grid item>
                    <IconButton onClick={props.handleClosing}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={11}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <CardMedia
                        sx={{
                            height: "80vh",//100% view height
                            width: "auto",  // 100% view width
                        }}
                        component="img"
                        image={props.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 700,
                                color: '#2E3B55',
                                textDecoration: 'none',
                            }}>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 700,
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            {props.description}
                        </Typography>
                        <Typography gutterBottom variant="body2"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 500,
                                color: 'text.secondary',
                                textDecoration: 'none',
                            }}
                        >
                            {"90x160cm"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 500,
                                color: 'text.secondary',
                                textDecoration: 'none',
                            }}
                        >
                            {"Oil"}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={1}
                sx={{
                    display: { xs: 'flex', md: 'none' }
                }}
            >
                <Grid item xs={12}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <CardMedia
                        sx={{
                            height: "auto",//100% view height
                            width: "95vw",  // 100% view width
                            display: { xs: 'flex', md: 'none' }
                        }}
                        component="img"
                        image={props.img}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 700,
                                color: '#2E3B55',
                                textDecoration: 'none',
                            }}>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 700,
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            {props.description}
                        </Typography>
                        <Typography gutterBottom variant="body2"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 500,
                                color: 'text.secondary',
                                textDecoration: 'none',
                            }}
                        >
                            {"90x160cm"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                mr: 3,
                                flexGrow: 1,
                                fontFamily: 'Roboto Slab',
                                fontWeight: 500,
                                color: 'text.secondary',
                                textDecoration: 'none',
                            }}
                        >
                            {"Oil"}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12}>
                    <IconButton onClick={props.handleClosing}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}