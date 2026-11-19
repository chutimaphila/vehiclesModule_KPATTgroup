import React from 'react';
import { Box, Container, Typography, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function InspectionForm() {
  const { inspectionId } = useParams();

  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - ฟอร์มบันทึกการตรวจเช็คยานพาหนะ (Inspection Form)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            โหมด:{' '}
            {inspectionId
              ? `แก้ไขใบตรวจรหัส ${inspectionId}`
              : 'สร้างใบตรวจใหม่'}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionForm;
