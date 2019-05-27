import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";

import { addProduct, removeProduct } from "../../../Actions/ShoppingCartActions";

import { Item } from "../../../Entity/Item";

import "./styles.sass";
import styles from "./theme";

class ShoppingCartItem extends Component {
  state = {
    subTotal: 0
  };

  componentDidMount() {
    const {
      item: { price },
      qty
    } = this.props;

    this.setState({
      subTotal: parseFloat(price * qty).toFixed(2)
    });
  }

  componentDidUpdate(prevProps) {
    const {
      item: { price },
      qty
    } = this.props;

    if (qty !== prevProps.qty) {
      this.setState({
        subTotal: parseFloat(price * qty).toFixed(2)
      });
    }
  }

  handleAddProductClick = () => {
    this.props.addProduct(this.props.item, 1);
  };
  handleRemoveProductClick = () => {
    this.props.removeProduct(this.props.item);
  };

  render() {
    const { item, qty } = this.props;
    const { subTotal } = this.state;

    return (
      <ListItem key={item.id} button>
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>

        <ListItemText className="item-name" primary={item.name} secondary={`x${qty} $ ${item.price}`} />

        <ListItemText className="item-subtotal" primary={`$ ${subTotal}`} />

        <ListItemSecondaryAction>
          <ListItemIcon onClick={this.handleAddProductClick}>
            <AddCircleOutline />
          </ListItemIcon>

          <ListItemIcon onClick={this.handleRemoveProductClick}>
            <RemoveCircleOutline />
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

ShoppingCartItem.propTypes = {
  item: PropTypes.instanceOf(Item).isRequired,
  classes: PropTypes.object.isRequired
};

const mS = state => ({});

const mD = {
  addProduct,
  removeProduct
};

export default withStyles(styles)(
  connect(
    mS,
    mD
  )(ShoppingCartItem)
);
