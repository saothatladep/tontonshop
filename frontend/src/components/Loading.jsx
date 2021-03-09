import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const usedStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
const Loading = () => {
    const classes = usedStyles();
    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Loading
