import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, GridList, GridListTile, ListSubheader } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { getProducts } from "../../Actions/ProductActions";
import GalleryItem from "./GalleryItem";
import { Item } from "../../Entity/Item";

import "./styles.sass";
import styles from "./theme";

class Gallery extends Component {
  state = {
    title: "Products - All"
  };

  componentDidMount = () => {
    this.props.getProducts(null);
  };

  render() {
    const { classes, products } = this.props;

    return (
      <div className={`items-gallery ${classes.root}`}>
        <Grid container spacing={24}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={3.5} style={{ height: "auto" }}>
              <ListSubheader component="h2">{this.state.title}</ListSubheader>
            </GridListTile>

            {products && products.map(item => <GalleryItem item={item} key={item.id} />)}
          </GridList>
        </Grid>
      </div>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(Item),
  classes: PropTypes.object.isRequired
};

const mS = state => ({
  products: state.ProductReducer.products
});

const mD = {
  getProducts
};

export default withStyles(styles)(
  connect(
    mS,
    mD
  )(Gallery)
);
