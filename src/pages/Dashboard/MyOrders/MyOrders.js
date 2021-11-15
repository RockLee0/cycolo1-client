import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user, token } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `https://peaceful-sea-78260.herokuapp.com/purchase?Email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data));
    })
    return (
        <div>
            <h2>No of cycle : {myOrders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Preference</TableCell>
            <TableCell align="right">Place</TableCell>
          </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Model}
                                </TableCell>
                        
                                <TableCell align="right">{row.Number}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.preference}</TableCell>
                                <TableCell align="right">{row.place}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;