import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import "./styles.sass";
import styles from "./theme";

class MainContent extends Component {
  render() {
    const { classes, content } = this.props;

    return (
      <div className={`main-container ${classes.root}`}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{content}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object
};

export default withStyles(styles)(MainContent);
