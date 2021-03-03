import { Box, Container, Grid, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import React from 'react'
import DetailCatalogue from './DetailCatalogue'

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
  '@keyframes growDown': {
    '0%': {
      transform: 'scaleY(0)',
    },
    '80%': {
      transform: 'scaleY(1.1)',
    },
    '100%': {
      transform: 'scaleY(1)',
    },
  },
  containCatalogues: {
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

const Catalogues = (props) => {
  const classes = usedStyles()
  const { type } = props
  return (
    <ul className={classes.root}>
      <Box className={classes.containCatalogues}>
        <Container>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
          >
            <Grid item md-8>
              <List>
                <DetailCatalogue listCatalogues={type.listCatalogues} />
              </List>
            </Grid>
            <Grid className={classes.img} item md-4>
              <img
                style={{
                  width: type.imgDimensions.width,
                  height: type.imgDimensions.height,
                  margin: '20px auto 0px auto',
                }}
                src={type.img}
                alt=''
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ul>
  )
}

export default Catalogues
