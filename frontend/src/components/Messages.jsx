import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

const usedStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Messages = () => {
    const classes = usedStyles();
    return (
        <div>
            <div className={classes.root}>
                <Alert variant="outlined" severity="error">
                    This is an error alert — check it out!
                </Alert>
            </div>
        </div>
    )
}

export default Messages
