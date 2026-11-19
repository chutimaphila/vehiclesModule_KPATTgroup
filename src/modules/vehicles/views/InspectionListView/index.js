import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function InspectionListView() {
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
          <Box display="flex" gridGap={12}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/app/vehicles/inspections/create"
            >
              + เทสหน้าสร้างใบตรวจ (create)
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/app/vehicles/inspections/INS-001/edit"
            >
              เทสหน้าแก้ไขใบตรวจ (edit)
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionListView;
