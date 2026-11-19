import React from 'react';
import { Box, Container, Typography, Paper } from '@material-ui/core';

function VehicleDashboardView() {
  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - ภาพรวมระบบตรวจเช็คยานพาหนะ (Vehicle Dashboard)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Route: /app/vehicles/dashboard
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default VehicleDashboardView;
