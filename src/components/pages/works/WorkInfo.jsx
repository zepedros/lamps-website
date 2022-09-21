import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default function WorkInfo(props) {

    return (
        <div>
            {/**
             * <Card
                sx={{ maxWidth: "80vw", maxHeight: "auto" }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "100vh",//100% view height
                    width: "100vw"
                }}
            >
                
            </Card>
             */}

            <Grid container spacing={2}
                sx={{
                    height: "80vh",//100% view height
                    width: "auto",  // 100% view width
                }}
            >
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
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            {"90x160cm"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {"Oil"}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        onClick={props.handleClosing}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}