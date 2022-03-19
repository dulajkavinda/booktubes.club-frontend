import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import './ClubProgress.scss';

export default function ClubProgress() {

    const data = {
        "members": [
            {
                "userid": "001",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "0zYPmgHgOHWWt0X12iudnT0bNZ03",
                "userName": "Emma MaCay",
                "percentage": 52.10
            },
            {
                "userid": "003",
                "userName": "Beth Johns",
                "percentage": 73.00
            },
            {
                "userid": "004",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "005",
                "userName": "Emma MaCay",
                "percentage": 52.10
            },
            {
                "userid": "006",
                "userName": "Beth Johns",
                "percentage": 73.00
            },
            {
                "userid": "007",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "008",
                "userName": "Emma MaCay",
                "percentage": 52.10
            },
            {
                "userid": "009",
                "userName": "Beth Johns",
                "percentage": 73.00
            },
            {
                "userid": "0012",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "0013",
                "userName": "Emma MaCay",
                "percentage": 52.10
            },
            {
                "userid": "0033",
                "userName": "Beth Johns",
                "percentage": 73.00
            },
            {
                "userid": "0015",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "0028",
                "userName": "Emma MaCay",
                "percentage": 52.10
            },
            {
                "userid": "0037",
                "userName": "Beth Johns",
                "percentage": 73.00
            },
            {
                "userid": "0019",
                "userName": "John Doe",
                "percentage": 24.00
            },
            {
                "userid": "0020",
                "userName": "Emma MaCay",
                "percentage": 52.10
            },
            {
                "userid": "0030",
                "userName": "Beth Johns",
                "percentage": 73.00
            }

        ]
    };

    return (
        <div className="member-progress-modal">
            <Table sx={{ minWidth: 350 }} aria-label="Member progress table">
                <TableBody>
                    {data.members.map((data) => (
                        <TableRow
                            key={data.userid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {data.userid == localStorage.getItem('user')? 'Me': data.userName}
                            </TableCell>
                            <TableCell>
                                <LinearProgress className="progress-bar" variant="determinate" value={data.percentage} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}