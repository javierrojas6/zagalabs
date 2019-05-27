import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, List, Typography, Divider, Button } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
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
      } else {
        this.setState({
          products: [],
          total: 0
        });
      }
    }
  }

  render = () => {
    const { classes } = this.props;
    const { products, total } = this.state;

    return (
      <div className={`shopping-cart ${classes.root}`}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Cart
            </Typography>

            <List dense className={classes.root}>
              {products &&
                products.length > 0 &&
                products.map(item => <ShoppingCartItem item={item} qty={item.qty} key={item.id} />)}
            </List>

            <Divider />

            {total > 0 ? (
              <>
                <Typography variant="body1" gutterBottom>
                  Total: $ {total}
                </Typography>

                <Button variant="contained" color="primary">
                  Checkout
                  <ArrowRight>Checkout</ArrowRight>
                </Button>
              </>
            ) : null}
          </Grid>
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
