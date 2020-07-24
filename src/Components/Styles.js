import { Grid, SvgIcon, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const Status = withStyles({
  root: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  }
})(Typography);

const StatusIcon = withStyles({
  root: {
    fontSize: '5em',
    color: 'green'
  }
})(SvgIcon);

const Subtitle = withStyles({
  root: {
    fontSize: '1em',
    fontWeight: 'bold'
  }
})(Typography);

const Text = withStyles({
  root: {
    fontSize: '1em'
  }
})(Typography);

const SliderItem = withStyles({
  root: {
    display: 'inline-block'
  }
})(Grid);

export {
  SliderItem,
  Status,
  StatusIcon,
  Subtitle,
  Text
};
