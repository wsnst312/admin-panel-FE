import * as React from 'react';
// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card } from '@mui/material';

const columns = [
  { id: 'invoiceno', label: 'Invoice No.', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 170 },
  {
    id: 'customer',
    label: 'Customer',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'book',
    label: 'Book',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'subtotal',
    label: 'Sub Total',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'totalamount',
    label: 'Total Amount',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  }
];

function createData(date, invoiceno, customer, totalamount, book, subtotal) {
  return { date, invoiceno, customer, totalamount, book, subtotal };
}

const rows = [
  createData('2024-04-01', 'IN001', 'websphere', 3287263, 1, 0),
  createData('2024-04-03', 'IN002', 'user', 9596961, 1, 0),
  createData('2024-04-03', 'IN003', 'new', 301340, 1, 0),
  createData('2024-04-02', 'IN004', 'newuser', 9833520, 1, 0),
  createData('2024-04-03', 'IN005', 'onewdemo', 9984670, 1, 0),
  createData('2024-04-03', 'IN006', 'users', 7692024, 1, 0),
  createData('2024-04-03', 'IN001', 'websphere', 3287263, 1, 0),
  createData('2024-04-02', 'IN002', 'user', 9596961, 1, 0),
  createData('2024-04-03', 'IN003', 'new', 301340, 1, 0),
  createData('2024-04-03', 'IN004', 'newuser', 9833520, 1, 0),
  createData('2024-04-01', 'IN005', 'onewdemo', 9984670, 1, 0),
  createData('2024-04-03', 'IN001', 'websphere', 3287263, 1, 0),
  createData('2024-04-03', 'IN002', 'user', 9596961, 1, 0),
  createData('2024-04-03', 'IN003', 'new', 301340, 1, 0),
  createData('2024-04-04', 'IN004', 'newuser', 9833520, 1, 0),
  createData('2024-04-03', 'IN005', 'onewdemo', 9984670, 1, 0),
  createData('2024-04-03', 'IN006', 'users', 7692024, 1, 0)
];

export default function Saleregister() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 660 }}>
        <Table style={{ borderLeft: '1px solid lightgrey' }}>
          <TableHead sx={{ backgroundColor: 'lightgrey', color: 'white' }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}
