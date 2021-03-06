import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Card } from '@material-ui/core';
import SideNav from '../components/SideNav';
import ItemList from '../components/ItemList';
import EnhancedTable from '../components/EnhancedTable';
import Grid from '@material-ui/core/Grid';
import PaginationBar from '../components/PaginationBar';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    padding: 50,
  }
});

class Index extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <SideNav />
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  Item List
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root}>
              <ItemList />
            </div>
            <div style={{ paddingLeft: 600, paddingRight: 600 }}>
              <Card>
                <PaginationBar />
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} align="center">
            <div style={{ maxWidth: 1200 }}>
              <EnhancedTable />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
