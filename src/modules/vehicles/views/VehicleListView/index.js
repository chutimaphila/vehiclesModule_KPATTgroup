import React from 'react';
import { Box, Container, Typography, Paper } from '@material-ui/core';

function VehicleListView() {
  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - ทะเบียนยานพาหนะ (Vehicle List)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Route: /app/vehicles/list
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default VehicleListView;
