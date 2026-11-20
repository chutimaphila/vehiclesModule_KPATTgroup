import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { getVehicles } from '../../services/vehicleService';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function VehicleListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [vehicles, setVehicles] = useState(null);

  const fetchVehicles = useCallback(() => {
    getVehicles().then(data => {
      if (isMountedRef.current) {
        setVehicles(data);
      }
    });
  }, [isMountedRef]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  if (!vehicles) {
    return null;
  }

  return (
    <Page className={classes.root} title="ทะเบียนยานพาหนะ">
      <Container maxWidth={false}>
        <Header onRefresh={fetchVehicles} />
        {vehicles && (
          <Box mt={3}>
            <Results vehicles={vehicles} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default VehicleListView;
