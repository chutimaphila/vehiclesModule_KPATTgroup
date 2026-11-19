import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function InspectionHistoryView() {
  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - ประวัติการตรวจเช็คยานพาหนะ (Inspection History)
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Route: /app/vehicles/history
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/app/vehicles/history/INS-001"
          >
            เทสหน้ารายละเอียดใบตรวจ (INS-001)
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionHistoryView;
