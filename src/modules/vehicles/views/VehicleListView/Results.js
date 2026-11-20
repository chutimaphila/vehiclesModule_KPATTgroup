import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Search as SearchIcon,
  Clipboard as InspectIcon,
  Clock as HistoryIcon
} from 'react-feather';
import Label from 'src/components/Label';

const useStyles = makeStyles(theme => ({
  root: {},
  queryField: {
    width: 420,
    maxWidth: '100%'
  }
}));

function applyFilters(vehicles, query) {
  return vehicles.filter(vehicle => {
    if (!query) return true;

    const q = query.toLowerCase().trim();
    const matchesPlate = vehicle.VH_REGIS_PLATE?.toLowerCase().includes(q);
    const matchesCode = vehicle.VH_CODE?.toLowerCase().includes(q);
    const matchesDriver = vehicle.driver_full_name?.toLowerCase().includes(q);
    const matchesFactory = vehicle.factory_name?.toLowerCase().includes(q);

    return matchesPlate || matchesCode || matchesDriver || matchesFactory;
  });
}

function applyPagination(vehicles, page, limit) {
  return vehicles.slice(page * limit, page * limit + limit);
}

function Results({ className, vehicles, ...rest }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    event.persist();
    setQuery(event.target.value);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredVehicles = applyFilters(vehicles, query);
  const paginatedVehicles = applyPagination(filteredVehicles, page, limit);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <TextField
          className={classes.queryField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="small" color="action">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          onChange={handleQueryChange}
          placeholder="ค้นหาทะเบียนรถ, รหัสรถ, พนักงานขับรถ หรือโรงงาน..."
          value={query}
          variant="outlined"
          size="small"
        />
        <Typography variant="body2" color="textSecondary">
          พบทั้งหมด {filteredVehicles.length} คัน
        </Typography>
      </Box>
      <Divider />
      <Box minWidth={900} overflow="auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ทะเบียนรถ / รหัสรถ</TableCell>
              <TableCell>ประเภทรถ</TableCell>
              <TableCell>พนักงานขับรถประจำ</TableCell>
              <TableCell>โรงงานที่สังกัด</TableCell>
              <TableCell>ประเภทใบขับขี่</TableCell>
              <TableCell align="right">จัดการ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedVehicles.map(vehicle => (
              <TableRow hover key={vehicle.external_vehicle_id}>
                <TableCell>
                  <Typography variant="subtitle2" color="textPrimary">
                    {vehicle.VH_REGIS_PLATE} ({vehicle.VH_REGIS_PROVINCE})
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    รหัส: {vehicle.VH_CODE || '-'}
                  </Typography>
                </TableCell>
                <TableCell>{vehicle.vehicle_type_name || '-'}</TableCell>
                <TableCell>
                  <Typography variant="body2" color="textPrimary">
                    {vehicle.driver_full_name || 'ยังไม่ระบุคนขับ'}
                  </Typography>
                  {vehicle.driver_emp_code && (
                    <Typography variant="caption" color="textSecondary">
                      รหัส: {vehicle.driver_emp_code} | โทร:{' '}
                      {vehicle.driver_phone || '-'}
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="textPrimary">
                    {vehicle.factory_name || '-'}
                  </Typography>
                  {vehicle.factory_code && (
                    <Label color="primary">{vehicle.factory_code}</Label>
                  )}
                </TableCell>
                <TableCell>{vehicle.VH_CHECKUP_DATE || '-'}</TableCell>
                <TableCell align="right">
                  {vehicle.latest_odometer_km
                    ? Number(vehicle.latest_odometer_km).toLocaleString()
                    : '-'}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="ตรวจเช็คยานพาหนะคันนี้">
                    <IconButton
                      color="primary"
                      component={RouterLink}
                      to={`/app/vehicles/inspections/create?vehicleId=${vehicle.external_vehicle_id}`}
                    >
                      <SvgIcon fontSize="small">
                        <InspectIcon />
                      </SvgIcon>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="ดูประวัติการตรวจเช็ค">
                    <IconButton
                      component={RouterLink}
                      to={`/app/vehicles/history?vehicleId=${vehicle.external_vehicle_id}`}
                    >
                      <SvgIcon fontSize="small">
                        <HistoryIcon />
                      </SvgIcon>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {paginatedVehicles.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Box py={3}>
                    <Typography variant="body1" color="textSecondary">
                      ไม่พบข้อมูลยานพาหนะที่ตรงกับคำค้นหา
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={filteredVehicles.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[10, 25, 50]}
        labelRowsPerPage="แสดงแถว:"
      />
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  vehicles: PropTypes.array.isRequired
};

Results.defaultProps = {
  vehicles: []
};

export default Results;
