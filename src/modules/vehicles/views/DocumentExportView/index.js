import React from 'react';
import { Box, Container, Typography, Paper } from '@material-ui/core';

function DocumentExportView() {
  return (
    <Box py={3}>
      <Container maxWidth="lg">
        <Paper style={{ padding: 24 }}>
          <Typography variant="h4" gutterBottom>
            Hello World - การส่งออกเอกสารและรายงาน (Document Export)
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Route: /app/vehicles/documents
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default DocumentExportView;
