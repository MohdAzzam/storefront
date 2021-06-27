import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { connect } from 'react-redux';
import { choose } from '../store/categories';


const useStyles = makeStyles((theme) => ({}));

function Categories(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Tabs
                value="FOOD"
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
    );
}


const mapStateToProps = state => ({
    categories: state.categories
});
const mapDispatchToProps = { choose };

export default connect(mapStateToProps, mapDispatchToProps)(Categories)