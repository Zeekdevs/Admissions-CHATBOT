import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgb(255,92,30)',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
    }
}));

function createData(name) {
    return { name };
}

const row = [
    createData("BSc Computer Science"),
    createData("BSc Physiotherapy"),

];
const row2 = [
    createData("MSc in Artificial Intelligence"),
    createData("MSc in Marketing Management"),

];
const row3 = [
    createData("PhD in Marketing Research "),
    createData("PhD in Criminology Research"),

];

const Courses = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: 308.4 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Undergraduate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>

                <TableHead>
                    <TableRow>
                        <StyledTableCell>Postgraduate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row2.map((row2) => (
                        <StyledTableRow key={row2.name}>
                            <StyledTableCell component="th" scope="row2">
                                {row2.name}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Postgraduate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row3.map((row3) => (
                        <StyledTableRow key={row3.name}>
                            <StyledTableCell component="th" scope="row3">
                                {row3.name}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Courses
