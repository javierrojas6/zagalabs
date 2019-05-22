import PropTypes from "prop-types";
import React, { Component } from "react";

import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AddShoppingCartOutlined } from "@material-ui/icons";

import "./styles.sass";
import styles from "./theme";

class GalleryItem extends Component {
  render() {
    const { classes, item } = this.props;

    return (
      <GridListTile key={item.image}>
        <img src={item.image} alt={item.name} />
        <GridListTileBar
          title={`$ ${item.price}`}
          subtitle={<span>item.name}</span>}
          actionIcon={
            <IconButton className={classes.icon}>
              <AddShoppingCartOutlined />
            </IconButton>
          }
        />
      </GridListTile>
    );
  }
}

GalleryItem.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object
};

export default withStyles(styles)(GalleryItem);