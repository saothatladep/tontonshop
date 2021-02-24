import { Box, Container, Grid, Link, List, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import React from 'react'
import ChoiceCategories from './ChoiceCategories'

const usedStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 100,
    float: 'left',
    minWidth: 160,
    textAlign: 'left',
    listStyle: 'none',
    borderRadius: 4,
    padding: 0,
    // display: 'none',
    
  },
  containDetailCategories: {
    width: maxWidth,
    margin: '0 auto',
    minHeight: 290,
    backgroundColor: whiteText,
    boxShadow: '0 6px 12px rgb(0 0 0 / 18%)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    display: 'block',
  },
}))

const DetailCategories = (props) => {
  const classes = usedStyles()
  const { category } = props
  return (
    <ul className={classes.root}>
      <Box className={classes.containDetailCategories}>
          <Container>
            <Grid
              container
              direction='row'
              justify='space-around'
              alignItems='center'
            >
              <Grid item md-8>
                <List>
                  <ChoiceCategories content={category.content} />
                </List>
              </Grid>
              <Grid item md-4>
                <Link href='#' color='inherit'>
                  <img
                    style={{ width: '390px' }}
                    src={category.img}
                    alt=''/>
                </Link>
              </Grid>
            </Grid>
          </Container>
      </Box>
    </ul>
  )
}

export default DetailCategories
