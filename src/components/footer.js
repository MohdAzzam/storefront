
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    bg: {
        backgroundColor: '#f5f5f5',
        padding: 50,
        // display:'block',
        marginTop:'19rem'
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.bg} >
            <Typography variant="h5" color="textPrimary"> &copy; 2021 Mohammad Alazzam  JavaScript 401</Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography color="textPrimary">Material-UI</Typography>
                <Typography color="textPrimary">Redux</Typography>
                <Typography color="textPrimary">React</Typography>
            </Breadcrumbs>
        </Grid>
        </>
    );
}