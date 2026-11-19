import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';

function InspectionDetailsView() {
  const { inspectionId } = useParams();

  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - รายละเอียดผลการตรวจเช็ค (Inspection Details)
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            รหัสใบตรวจที่เลือก: {inspectionId}
          </Typography>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/app/vehicles/history"
          >
            กลับหน้าประวัติการตรวจเช็ค
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionDetailsView;
