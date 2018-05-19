import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FeelingsList from './FeelingsList';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#336799' }}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Meus sentimentos" />
            <Tab label="Sentimentos alheios" />
            <Tab label="Sentimentos na universidade" />
            <Tab label="Sentimentos em uma disciplina" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><FeelingsList type="personal" /></TabContainer>}
        {value === 1 && <TabContainer><FeelingsList type="general" /></TabContainer>}
        {value === 3 && <TabContainer><FeelingsList type="university" /></TabContainer>}
        {value === 4 && <TabContainer><FeelingsList type="subject" /></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
