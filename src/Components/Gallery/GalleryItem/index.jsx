import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { GridListTile, GridListTileBar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AddShoppingCartOutlined } from "@material-ui/icons";

import { addProduct } from "../../../Actions/ShoppingCartActions";

import "./styles.sass";
import styles from "./theme";

class GalleryItem extends Component {
  handleAddProduct = event => {
    this.props.addProduct(this.props.item, 1);
  };

  render() {
    const { classes, item } = this.props;

    return (
      <GridListTile spacing={3} className={classes.galleryItem}>
        <img src={item.image} alt={item.name} />

        <GridListTileBar
          title={
            <Typography component="span" variant="subtitle1" color="inherit">
              $ {item.price}
            </Typography>
          }
          subtitle={
            <Typography component="span" variant="subtitle1" color="inherit">
              {item.name}
            </Typography>
          }
          actionIcon={
            <IconButton className={classes.icon} onClick={this.handleAddProduct}>
              <AddShoppingCartOutlined />
            </IconButton>
          }
        />
      </GridListTile>
    );
  }
}

GalleryItem.propTypes = {
  classes: PropTypes.object.isRequired
};

const mS = state => ({});

const mD = {
  addProduct
};

export default withStyles(styles)(
  connect(
    mS,
    mD
  )(GalleryItem)
);
