import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  RefreshCw as RefreshIcon,
  CheckSquare as InspectIcon
} from 'react-feather';

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

function Header({ className, onRefresh, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
      spacing={3}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app/vehicles/dashboard"
            component={RouterLink}
          >
            ระบบตรวจเช็คยานพาหนะ
          </Link>
          <Typography variant="body1" color="textPrimary">
            ทะเบียนยานพาหนะ
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          ข้อมูลทะเบียนยานพาหนะ
        </Typography>
      </Grid>
      <Grid item>
        <Button
          className={classes.action}
          onClick={onRefresh}
          startIcon={
            <SvgIcon fontSize="small">
              <RefreshIcon />
            </SvgIcon>
          }
        >
          ซิงค์ข้อมูลล่าสุด
        </Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.action}
          component={RouterLink}
          to="/app/vehicles/inspections/create"
          startIcon={
            <SvgIcon fontSize="small">
              <InspectIcon />
            </SvgIcon>
          }
        >
          สร้างใบตรวจเช็ค
        </Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  onRefresh: PropTypes.func
};

export default Header;
