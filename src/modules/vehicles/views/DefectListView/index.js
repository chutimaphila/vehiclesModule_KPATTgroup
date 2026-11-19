import React from 'react';
import { Box, Container, Typography, Paper } from '@material-ui/core';

function DefectListView() {
  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - รายการแก้ไข / ข้อบกพร่องและนัดตรวจซ้ำ (Defect List)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Route: /app/vehicles/defects
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default DefectListView;
