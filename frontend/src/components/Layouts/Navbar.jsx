import React from "react";
import { Container, ListItem, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import navbarItemData from "../../mocks/navbarItemData";
import { Block } from "@material-ui/icons";

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
    flexGrow: 1,
    position: "relative",
  },
  item: {
    listStyleType: "none",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      megaMenu: {
        display: "block",
      },
    },
  },
  itemTilte: {},
  dropdownMenu: {
    position: "absolute",
    width: "100%",
    height: "300px",
    // display: "none",
    backgroundColor: "white",
    top: "100%",
    left: 0,
  },
}));

//fetch data
const navbarList = navbarItemData;

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <ListItem>
          {navbarList.map(({ name, content, imgChild }) => (
            <li className={classes.item}>
              <div className={classes.itemTitle}>{name}</div>
              <div className={classes.dropdownMenu}></div>
            </li>
          ))}
        </ListItem>
      </Container>
    </>
  );
}

export default Navbar;
