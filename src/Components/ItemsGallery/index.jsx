import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { getProducts } from "../../Actions/ProductActions";

import { Item } from "../../Entity/Item";
import ItemComponent from "../ItemComponent";

import "./styles.sass";
import styles from "./theme";

class ItemsGallery extends Component {
  state = {
    procesedProducts: null
  };

  componentDidMount = () => {
    this.props.getProducts(null);
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
          <Paper>
            {processedProducts &&
              processedProducts.map(productsRow => (
                <Grid xs={12}>
                  {productsRow.map(item => (
                    <ItemComponent item={item} />
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
  products: store.ProductReducer.products
});

const mD = {
  getProducts
};

export default withStyles(styles)(
  connect(mS,mD)(ItemsGallery)
);
