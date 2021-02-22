import React from "react";
import { Container, Grid, Link, InputBase, Badge } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";

import { whiteText, grayText, primaryText } from "assets/css_variable/variable";
import searchIcon from "assets/icon/search.png";
import logoImg from "assets/logo/logo.png";
import cartIcon from "assets/icon/shopping-cart.svg";
import userIcon from "assets/icon/user.png";

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       sm: 768,
//       md: 992,
//       lg: 1200,
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: "750px",
    },
    [theme.breakpoints.up("md")]: {
      width: "970px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1170px",
    },
    height: "98px",
    flexGrow: 1,
  },

  headerContainer: {
    alignItems: "center",
  },

  //brand style
  logo: {
    width: "100px",
  },

  //search bar
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(grayText, 0.15),
    "&:hover": {
      backgroundColor: fade(grayText, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "500px",
    height: "40px",
    "& img": {
      width: "25px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "2.5rem",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1.4, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "440px",
    height: "100%",
    fontSize: "1.6rem",
  },

  // right header
  headerOptionRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerUserOption: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(6),
    "& a:hover": {
      color: primaryText,
    },
    "& span": {
      fontSize: "1.6rem",
      padding: theme.spacing(0, 0.5),
    },
    "& img": {
      width: "30px",
      marginRight: theme.spacing(1),
    },
  },
  headerCartOption: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none !important",
    "&:hover": {
      color: primaryText,
      "& img": {
        fill: primaryText,
      },
    },
    "& p": {
      fontSize: "1.6rem",
      marginLeft: theme.spacing(1.2),
      fontWeight: 500,
    },
    "& img": {
      width: "30px",
    },
    "& span": {
      fontSize: "1.6rem",
      color: whiteText,
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid container className={classes.headerContainer}>
          <Grid item md={3} sm={2} xs={3}>
            <Link href="#" color="inherit">
              <img className={classes.logo} src={logoImg} />
            </Link>
          </Grid>
          <Grid item md={6} sm={6} xs="none">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <img src={searchIcon}></img>
              </div>
              <InputBase
                placeholder="Enter Your Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={7}>
            <div className={classes.headerOptionRight}>
              <div className={classes.headerUserOption}>
                <img src={userIcon}></img>
                <Link className={classes.link} href="#" color="inherit">
                  Login
                </Link>
                <span> / </span>
                <Link className={classes.link} href="#" color="inherit">
                  Register
                </Link>
              </div>
              <div>
                <Link
                  className={classes.headerCartOption}
                  href="/"
                  color="inherit"
                >
                  <Badge badgeContent={"0"} color="error">
                    <img src={cartIcon}></img>
                  </Badge>
                  <p>My Cart</p>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Header;
