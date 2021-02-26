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
    cursor: 'default',    
    animation: '$growDown 300ms ease-in-out forwards',
    transformOrigin: 'top center',
  },
  '@keyframes growDown':{
    '0%': {
      transform: 'scaleY(0)'
    },
    '80%': {
      transform: 'scaleY(1.1)'
    },
    '100%': {
      transform: 'scaleY(1)'
    },
  },
  containDetailCategories: {
    width: maxWidth,
    margin: '0 auto',
    minHeight: 340,
    backgroundColor: whiteText,
    boxShadow: '0 6px 12px rgb(0 0 0 / 18%)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    display: 'block',
  },
  img: {
    margin: '0 auto',
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
              justify='flex-start'
              alignItems='flex-start'
            >
              <Grid item md-8>
                <List>
                  <ChoiceCategories content={category.content} />
                </List>
              </Grid>
              <Grid className={classes.img} item md-4>
                <Link href='#' color='inherit'>
                  <img
                    style={{ width: category.widthImg,height: category.heightImg, margin: '20px auto 0px auto'}}
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
