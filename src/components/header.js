import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#f5f5f5',
        color:'#111',
        position: 'relative',
        display: 'flex'
    },
    appbarTitle: {
        flexGrow: "1",
    },
    appbarWrapper:{
        width:"90%",
        margin:'0 auto'
    }
}));
export default function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>Our Store</h1>
                <IconButton>
                    <p>Cart <span>(0)</span></p>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}