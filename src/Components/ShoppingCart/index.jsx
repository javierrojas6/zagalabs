import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, List, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import ShoppingCartItem from "./ShoppingCartItem";

import "./styles.sass";
import styles from "./theme";

class ShoppingCart extends Component {
  state = {
    products: []
  };

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      const products = Object.values(this.props.products);

      if (products.length > 0) {
        this.setState({
          products: products,
          total: parseFloat(this.props.total).toFixed(2)
        });
      }
    }
  }

  render = () => {
    const { classes } = this.props;
    const { products, total } = this.state;

    return (
      <div className={`shopping-cart ${classes.root}`}>
        <Grid container spacing={24}>
          <Typography variant="h3" gutterBottom>
            Cart
          </Typography>

          <List dense className={classes.root}>
            {products &&
              products.length > 0 &&
              products.map(item => <ShoppingCartItem item={item} qty={item.qty} key={item.id} />)}
          </List>

          <Typography variant="body1" gutterBottom>
            Total: $ {total}
          </Typography>
        </Grid>
      </div>
    );
  };
}

ShoppingCart.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.any,
  total: PropTypes.number
};

const mS = state => ({
  products: state.ShoppingCartReducer.products,
  total: state.ShoppingCartReducer.total
});

const mD = {};

export default withStyles(styles)(
  connect(
    mS,
    mD
  )(ShoppingCart)
);
