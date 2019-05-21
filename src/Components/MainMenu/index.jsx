import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { BrightnessHigh, AddCircleOutline } from '@material-ui/icons';

import PropTypes from 'prop-types';

import './styles.sass';
import styles from './theme';

class MainMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <List>
          <ListItem button key='category_1'>
            <ListItemIcon><AddCircleOutline /></ListItemIcon>
            <ListItemText primary='Category 1'/>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='Config'>
            <ListItemIcon><BrightnessHigh /></ListItemIcon>
            <ListItemText primary='Config' />
          </ListItem>
        </List>
      </div>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);