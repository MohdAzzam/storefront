import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {useDispatch} from 'react-redux';
import {add} from '../store/cart';
import { getRemoteData } from '../store/actions';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '30px',
        marginLeft:'40px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const Products = (props) => {
    const dispatch = useDispatch({add})
    const classes = useStyles();
    useEffect(()=>{
        dispatch(getRemoteData());
    },[])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>


                {
                 props.categories.active? props.products.show.map((item,indx) => {
                     console.log(item);
                        return (
                            <Grid item xs={3}   key={indx}>
                                <Card className={classes.root} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={item.src ?item.src:item.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name?item.name :item.item}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary"
                                        onClick={()=> dispatch(add(item))}
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button size="small" color="primary">
                                            View Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }) : []
                }

            </Grid>
        </div>
    );


}

const mapStateToProps = state => ({
    categories: state.categories,
    products: state.products
});

export default connect(mapStateToProps)(Products)