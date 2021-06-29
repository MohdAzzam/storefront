import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { connect } from 'react-redux';
import { choose } from '../store/categories';
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({}));

function Categories(props) {
    const classes = useStyles();
    console.log(props);
    return (
        <>
            <Paper className={classes.root}>
                <Tabs
                    value={props.categories.active==='FOOD' ?'FOOD':'ELECTRONICS' }
                    onChange={(e, v) => props.choose(v)}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {props.categories.categories.map((category, idx) => {
                        return <Tab label={category} key={idx} value={category} />
                    })}
                </Tabs>
            </Paper>
            <Typography component="div">
                <Box textAlign="center" m={1}>
                    <h2>{props.categories.active}</h2>
                   {props.categories.active ?<p>Description Here ... </p>:[]} 
                </Box>
            </Typography>
        </>
    );
}


const mapStateToProps = state => ({
    categories: state.categories,
});
const mapDispatchToProps = { choose };

export default connect(mapStateToProps, mapDispatchToProps)(Categories)