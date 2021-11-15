import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';



const ManageOrders = () => {

    
    const { user, token } = useAuth();
    const [AllOrders, setAllOrders] = useState([]);

    useEffect(() => {
        const url = `https://peaceful-sea-78260.herokuapp.com/purchase`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data));
    });
    return (
        <div>
            <Navigation></Navigation>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Preference</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Cancellation</TableCell>
          </TableRow>
                    </TableHead>
                    <TableBody>
                        {AllOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Model}
                                </TableCell>
                        
                                <TableCell align="right">{row.Email}</TableCell>
                                <TableCell align="right">{row.Number}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.preference}</TableCell>
                                <TableCell align="right">{row.place}</TableCell>
                                <Button variant="contained"> Cancel </Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;