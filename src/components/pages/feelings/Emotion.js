import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Emotion extends React.Component {
  state = {
    emoton: 'g',
  };

  handleSelectChange = (e) => {
    this.props.onChange(e);
    this.setState({
      emoton: e.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Como está se sentindo</FormLabel>
          <RadioGroup
            aria-label="Emotion"
            id="emotion"
            name="emotion"
            className={classes.group}
            value={this.state.emoton}
            onChange={this.handleSelectChange}
          >
            <FormControlLabel keu="aa" value="g" control={<Radio />} label="Feliz" />
            <FormControlLabel keu="bb" value="b" control={<Radio />} label="Triste" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Emotion);