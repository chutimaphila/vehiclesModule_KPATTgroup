import React from 'react';
import { Box, Container, Typography, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function InspectionDetails() {
  const { inspectionId } = useParams();

  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - รายละเอียดผลการตรวจเช็ค (Inspection Details)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            รหัสใบตรวจที่เลือก: {inspectionId}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionDetails;
