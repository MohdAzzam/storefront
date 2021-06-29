import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cart'
import { toggle } from '../store/button'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    title: {
        color: 'black',
    },

}));
export default function SimpleMenu(props) {
    const data = useSelector(state => {
        return {
            items: state.cart,
            button: state.button
        }
    })
    const dispatch = useDispatch({ toggle, remove })
    const handleClose = (e) => {
        console.log(e);
        dispatch(remove(e))
    };

    const classes = useStyles();
    return (
        <div>
            <Button className={classes.title} aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => dispatch(toggle())}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >Cart</IconButton> ({data.items.length})
            </Button>
            {data.items.length > 0 ? (
                <Menu
                    id="fade-menu"
                    keepMounted
                    open={Boolean(data.button)}
                    onClose={(e) => dispatch(toggle())}
                    className={classes.manue}
                    style={{ marginLeft: 100, marginTop: 0 }}
                >

                    {
                        data.items.map((item, idx) => {

                            return (<MenuItem key={idx}>
                                {item.item} ({item.quantity}) <Button onClick={() => handleClose(item)}>X</Button>
                            </MenuItem>)
                        })
                    }
                </Menu>

            ) : []}
        </div>
    );
}