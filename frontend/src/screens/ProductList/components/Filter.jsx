import { Paper } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import React from 'react'
const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '17px 60px',
    border: '1px solid #e1e1e1',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  color: {
    backgroundColor: whiteText,
    '& label': {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    '& select': {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
  },
  sort: {
    backgroundColor: whiteText,
    '& label': {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    '& select': {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
  },
}))
const Filter = () => {
  const classes = usedStyles()
  return (
    <div>
      <Paper elevation={0}>
        <div className={classes.container}>
          <div className={classes.color}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='uncontrolled-native'>Color</InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: 'name',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
              {/* <FormHelperText>Uncontrolled</FormHelperText> */}
            </FormControl>
          </div>

          <div className={classes.sort}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='uncontrolled-native'>Sort By</InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: 'name',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
              {/* <FormHelperText>Uncontrolled</FormHelperText> */}
            </FormControl>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Filter
