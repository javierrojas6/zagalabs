import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Item } from "../../../Entity/Item";

import "./styles.sass";
import styles from "./theme";

class ShoppingCartItem extends Component {
  state = {
    subTotal: 0
  };

  componentDidUpdate(prevProps) {
    const { item, qty } = this.props;

    if (qty !== prevProps.qty) {
      this.setState({
        subTotal: parseFloat(item.price * qty).toFixed(2)
      });
    }
  }

  render() {
    const { item, qty } = this.props;

    return (
      <ListItem key={item.id} button>
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>

        <ListItemText primary={item.name} />
        {qty > 1 ? <ListItemText primary={`x${qty}`} /> : null}

        <ListItemSecondaryAction>
          <Typography variant="button" gutterBottom>
            $ {item.price * qty}
          </Typography>
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

const mD = {};

export default withStyles(styles)(
  connect(
    mS,
    mD
  )(ShoppingCartItem)
);
