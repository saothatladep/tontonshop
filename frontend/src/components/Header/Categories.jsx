import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { maxWidth, primaryText } from "assets/css_variable/variable";
import React, { useState } from "react";
import DetailCategories from "./DetailCategories";
import { initOptionCategories } from "components/Header/iTemDetailChoice";

const usedStyles = makeStyles((theme) => ({
  containCategories: {
    width: maxWidth,
    display: "flex",
  },
  categoryItem: {
    padding: "10px 16px",
    borderTop: "3px solid transparent",
    width: "auto",
    "& span": {
      fontSize: "1.6rem",
      fontWeight: "500",
      padding: "10 0",
      textAlign: "start",
    },
    "&:hover": {
      transition: ".3s ease-out",
      borderTop: "3px solid",
      borderColor: primaryText,
      "& span": {
        transition: ".3s ease-out",
        color: primaryText,
      },
    },
  },
}));

const Categories = () => {
  const classes = usedStyles();
  const [categories, setCategories] = useState(initOptionCategories);
  return (
    <div>
      <div className={classes.containCategories}>
        {categories.map((category) => (
          <ListItem className={classes.categoryItem} key={category.idCategory}>
            <ListItemText primary={category.name} />
            <DetailCategories category={category} />
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default Categories;
