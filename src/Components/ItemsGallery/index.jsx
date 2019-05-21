import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { Item } from "../../Entity/Item";
import { Item as ItemComponent } from "../Item";

import "./styles.sass";
import styles from "./theme";

class ItemsGallery extends Component {
  state = {
    procesedProducts: null
  };

  componentDidMount = () => {
    this.props.getProducts();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { products } = this.props;

    if (prevProps.products !== products && _.isArray(products) && products.length > 0) {
      const processedProducts = _.chunk(products, 5);
      this.setState({ processedProducts });
    }
  };

  render() {
    const { classes } = this.props;
    const { processedProducts } = this.state;

    return (
      <div className={`items-gallery ${classes.root}`}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            {processedProducts.map(productsRow => (
              <Grid xs={12}>
                {productsRow.map(item => (
                  <ItemComponent item />
                ))}
              </Grid>
            ))}
          </Paper>
        </Grid>
      </div>
    );
  }
}

ItemsGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(Item)
};

const mS = store => ({
  products: store.productsReducer.products
});

const mD = {
  getProducts
};

export default withStyles(styles)(connect(mS, mD)(ItemsGallery);