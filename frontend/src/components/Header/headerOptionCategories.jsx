import { Box, Container, Grid, Link, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlbumIcon from '@material-ui/icons/Album';
import { maxWidth, primaryText } from 'assets/css_variable/variable';
import React from 'react';

const usedStyles = makeStyles((theme) => ({
  root: {
   
  },
  containOption: {
    width: maxWidth,
    margin: '100px auto 0 auto',
    height: 55,
  },
  list: {
    display: 'flex',
    // justifyContent: 'space-between',
    cursor: 'pointer',
    padding: 0,
  },
  listItem: {
    padding: '10px 16px',
    borderTop: '3px solid transparent',
    width: 'auto',
    '& span': {
        fontSize: '1.6rem',
        fontWeight: '500',
        padding: '10 0', 
        textAlign: 'center',
    },
    '&:hover': {
        transition: '.3s ease-out',
        borderTop: '3px solid',
        borderColor: primaryText,
        '& span': {
          transition: '.3s ease-out',
          color: primaryText,
        },
        
    },
  },

  containDetailOption: {
    width: maxWidth,
    margin: '0 auto',
    minHeight: 290,
    display: 'none',
  },
  listOption: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: theme.spacing(1.5),
  },
  listItemOption: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    marginRight: theme.spacing(3),
    '& p': {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#666',
      padding: theme.spacing(2, 0 ,1 ,0),
    },
  },
  noPadding: {
    padding: 0,
  },
  choiceItemOption: {
    display: 'flex',
    cursor: 'pointer',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textDecoration:'none !important' ,
    padding: '8px 0 8px 0',
    '& span': {
      fontSize: '1.4rem',
      color: '#666',
      marginTop: '-6px',
    },
    '& svg': {
      color: '#615353',
      marginRight: theme.spacing(1),
    },
    '&:hover': {
      '& span': {
        color: primaryText,
      },
      '& svg': {
        color: primaryText,
      },
    },
    
    '&:first-child:hover': {
      '$containDetailOption': {
        display: 'block',
      }
    }
  }
}
))

const headerOptionCategories = () => {
  const classes = usedStyles()
  return (
    <Paper elevation={0}>
      <div className={classes.containOption}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemText primary='GHẾ SOFA'/>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='PHÒNG KHÁCH'/>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='PHÒNG NGỦ'/>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='PHÒNG ĂN'/>
          </ListItem >
          <ListItem className={classes.listItem}>
            <ListItemText primary='CHỨA ĐỒ'/>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='HỌC TẬP'/>
          </ListItem>
        </List>
      </div>

      <Box className={classes.containDetailOption}>
        <Paper elevation={4}>
          <Container>
          <Grid container>
            <Grid item md-8>
              <List className={classes.listOption}>
                <ListItem className={classes.listItemOption}>
                  <img src="https://www.jodhpurifurniture.com:4000/images/category/thumbnail/thumb142x100/15998196877340D9A6590.jpg"></img>
                  <Typography color='inherit'>SWING JHULA</Typography>
                  <List className={classes.noPadding}>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='Wooden Jhula'/>
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem className={classes.listItemOption}>
                  <img src="https://www.jodhpurifurniture.com:4000/images/category/thumbnail/thumb142x100/155046955018101.jpg"></img>
                  <Typography color='inherit'>SOFA SETS</Typography>
                  <List className={classes.noPadding}>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='Wooden Sofa Sets'/>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='3 Seater Sofa'/>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='2 Seater Sofa'/>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='L Shape Corner Sofa'/>
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem className={classes.listItemOption}>
                  <img src="https://www.jodhpurifurniture.com:4000/images/category/thumbnail/thumb142x100/1550475228834wooden_sofabed.jpg"></img>
                  <Typography color='inherit'>SOFA CUM BED</Typography>
                  <List className={classes.noPadding}>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='Wooden Sofa Cum Bed'/>
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem className={classes.listItemOption}>
                  <img src="https://www.jodhpurifurniture.com:4000/images/category/thumbnail/thumb142x100/155046954087301.jpg"></img>
                  <Typography color='inherit'>DIWANS</Typography>
                  <List className={classes.noPadding}>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='Wooden Diwan'/>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.noPadding}>
                      <Link className={classes.choiceItemOption}>
                        <AlbumIcon/>
                        <ListItemText primary='Wooden Diwan with Storage'/>
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Grid>
            <Grid item md-4>
              <Link href='#' color='inherit'>
                <img style={{width:'390px', marginTop:'20px'}} src="https://www.jodhpurifurniture.com:4000/images/category/1549361760853sofa_set.jpg" alt="Sofa"></img> 
              </Link>
            </Grid>
          </Grid>
        </Container>
        </Paper>      
      </Box>

    </Paper>
  )
}

export default headerOptionCategories
