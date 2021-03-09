import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth } from 'assets/css_variable/variable'
import categoriesHome from 'mocks/categoriesHome.js'
import React, { useState } from 'react'
import CategoryChild from './CategoryChild'

const usedStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 65,
  },
  container: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',
  },
  title: {
    paddingBottom: 20,
    '& p': {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '1.1px',
      color: mainText,
      margin: 0,
    },
    '& img': {
      marginTop: 10,
    },
  },
  noPadding: {
    padding: 0,
  },
}))
const CategoriesHome = () => {
  const classes = usedStyles()
  const [categories, setCategories] = useState(categoriesHome)
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>EXPLORE OUR WIDE RANGE</p>
            <img src='https://www.jodhpurifurniture.com/assets/images/border2.png' />
          </div>
          <div>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
                >
                  {categories.map((category) => (
                    <Grid key={category._id} item md-2>
                      <CategoryChild category={category} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default CategoriesHome
