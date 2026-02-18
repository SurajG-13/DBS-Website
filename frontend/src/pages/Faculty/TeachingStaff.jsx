// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, designation) {
//   return { name,  designation };
// }

// const rows = [
//   createData('Suraj Ghosh', 'Assistant Teacher' ),
//   createData('Sathi Biswas', 'Assistant Teacher' ),
//   createData('Rosy Rinke Dey', 'Assistant Teacher' ),
//   createData('Soumi Biswas', 'Assistant Teacher' ),
//   createData('Sr. Sugyani Nayak', 'Assistant Teacher' ),
//   createData('Dona Mondal', 'Assistant Teacher' ),
//   createData('Soma Khan', 'Assistant Teacher' ),
//   createData('Susmita Das', 'Assistant Teacher' ),
//   createData('Putul Chakraborty', 'Assistant Teacher' ),
//   createData('Farhana Biswas', 'Assistant Teacher' ),
//   createData('Mousumi Dutta', 'Assistant Teacher' ),
//   createData('Dibya Chowdhury', 'Assistant Teacher' ),
//   createData('Sangita Mishra', 'Assistant Teacher' ),
//   createData('Aparna Biswas', 'Assistant Teacher' ),
//   createData('Sankar Das', 'Assistant Teacher' ),
//   createData('Jui Mondal', 'Assistant Teacher' ),
//   createData('Keya Mallick', 'Assistant Teacher' ),
//   createData('Sanchita Roy', 'Assistant Teacher' ),
//   createData('Beatrice Mondal', 'Assistant Teacher' ),
//   createData('Saroj Dey', 'Assistant Teacher' ),
//   createData('Baishali Majumder', 'Assistant Teacher' ),
//   createData('Pinki Biswas', 'Assistant Teacher' ),
//   createData('Ankita Biswas', 'Assistant Teacher' ),
// ].sort((a, b) => a.name.localeCompare(b.name));

// export default function OfficeStaff() {
//   return (
//     <>
//     <main className='my-6'> 
//         <div> 
//              <h3 className="mb-3 flex items-center justify-center border-b-0 text-lg font-semibold text-red-600">
//         Teaching Staff
//        </h3>
//         </div>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Name</StyledTableCell>
//             <StyledTableCell align="center">Designation</StyledTableCell>
            
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.designation}</StyledTableCell>
           
              
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//     </main> 

//     </>
//   );
// }


import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, designation) {
  return { name, designation };
}

const rows = [
  createData("Suraj Ghosh", "Assistant Teacher"),
  createData("Sathi Biswas", "Assistant Teacher"),
  createData("Soumi Biswas", "Assistant Teacher"),
  createData("Sr. Sugyani Nayak", "Assistant Teacher"),
  createData("Dona Mondal", "Assistant Teacher"),
  createData("Soma Khan", "Assistant Teacher"),
  createData("Susmita Das", "Assistant Teacher"),
  createData("Putul Chakraborty", "Assistant Teacher"),
  createData("Farhana Biswas", "Assistant Teacher"),
  createData("Mousumi Dutta", "Assistant Teacher"),
  createData("Dibya Chowdhury", "Assistant Teacher"),
  createData("Sangita Mishra", "Assistant Teacher"),
  createData("Aparna Biswas", "Assistant Teacher"),
  createData("Sankar Das", "Assistant Teacher"),
  createData("Jui Mondal", "Assistant Teacher"),
  createData("Keya Mallick", "Assistant Teacher"),
  createData("Sanchita Roy", "Assistant Teacher"),
  createData("Beatrice Mondal", "Assistant Teacher"),
  createData("Saroj Dey", "Assistant Teacher"),
  createData("Baishali Majumder", "Assistant Teacher"),
  createData("Pinki Biswas", "Assistant Teacher"),
  createData("Ankita Biswas", "Assistant Teacher"),
].sort((a, b) => a.name.localeCompare(b.name));

export default function OfficeStaff() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // compute rows to display
  const displayedRows =
    rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows;

  // empty rows for proper spacing when table has fewer rows than the page size
  const emptyRows =
    rowsPerPage > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const value = parseInt(event.target.value, 10);
    setRowsPerPage(value);
    setPage(0);
  };

  return (
    <>
      <main className="my-6">
        <div>
          <h3 className="mb-3 flex items-center justify-center border-b-0 text-lg font-semibold text-red-600">
            Teaching Staff
          </h3>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="teaching staff table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Designation</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {displayedRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.designation}</StyledTableCell>
                </StyledTableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={2} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={2}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                  labelRowsPerPage="Rows per page:"
                  showFirstButton
                  showLastButton
                  // when rowsPerPage is -1, MUI expects page=0 and we show all rows above
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </main>
    </>
  );
}
