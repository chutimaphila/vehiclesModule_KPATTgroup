import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';

function InspectionFormView() {
  const { inspectionId } = useParams();

  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - ฟอร์มบันทึกการตรวจเช็คยานพาหนะ (Inspection Form)
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            โหมด:{' '}
            {inspectionId
              ? `แก้ไขใบตรวจรหัส ${inspectionId}`
              : 'สร้างใบตรวจใหม่'}
          </Typography>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/app/vehicles/inspections"
          >
            กลับหน้ารายการตรวจ
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default InspectionFormView;
