import { Box, Container, Grid, Link, List, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React from 'react'
import ChoiceCategories from './ChoiceCategories'

const usedStyles = makeStyles((theme) => ({
  containDetailCategories: {
    width: maxWidth,
    margin: '0 auto',
    minHeight: 290,
    display: 'block',
  },
}))

const DetailCategories = (props) => {
  const classes = usedStyles()
  const {category} = props;
  return (
    <div> 
      <Box className={classes.containDetailCategories}>
        <Paper elevation={4}>
          <Container>
            <Grid container>
              <Grid item md-8>
                <List>
                  <ChoiceCategories content = {category.content} />
                </List>
              </Grid>
              <Grid item md-4>
                <Link href='#' color='inherit'>
                  <img
                    style={{ width: '390px', marginTop: '20px' }}
                    src={category.img}
                    alt=''
                  ></img>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Box>
    </div>
  )
}

export default DetailCategories
