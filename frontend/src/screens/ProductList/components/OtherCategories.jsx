import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from './Category'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 0 30px 0',
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',
  },
  noPadding: {
    padding: 0,
  },
}))
const OtherCategories = (props) => {
  const { catalogue, match } = props
  const classes = usedStyles()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(`/api/categories/catalogue/${catalogue}`)
      setCategories(data)
    }
    fetchCategories()
  }, [catalogue])

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={''}>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  alignItems='center'
                  spacing={3}
                >
                  {categories.map((category) => (
                    <Grid key={category._id} item md-2>
                      <Category category={category} match={match} />
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

export default OtherCategories
