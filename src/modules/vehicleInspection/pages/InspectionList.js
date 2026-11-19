import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function InspectionList() {
  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - รายการเช็คยานพาหนะ (Inspection List)
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Route: /app/vehicles/inspections
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/app/vehicles/inspections/create"
          >
            + สร้างใบตรวจเช็คใหม่
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionList;
