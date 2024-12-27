import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'

const CustomTable = ({
    headerList = [],
    data = [],
}) => {
    return (
        <TableContainer>

            <Table>
                <TableHead
                    sx={{
                        backgroundColor: "primary.main",
                    }}
                >
                    <TableRow
                        sx={{
                            ">*": {
                                color: "white",
                                fontWeight: 700
                            }
                        }}
                    >
                        {
                            headerList.map(value => (
                                <TableCell>{value}</TableCell>

                            ))
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        {
                            data.map(value => (<TableCell>{value}</TableCell>))
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable