import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

const ExpenseDetailsPage = () => {
  const expense = {
    id: 1,
    expense: 'Food',
    amount: 50,
    status: 'Pending',
    date: '2024-03-10',
    description: 'Bought groceries for the week.',
    category: 'Groceries'
  };

  return (
    <Container style={{ padding: '24px' }}>
      <Paper elevation={3} style={{ padding: '25px' }}>
        <Typography variant="h4" align="center" gutterBottom id="mycss">
          Expense Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">ID: {expense.id}</Typography>
            <Typography variant="subtitle1">Expense: {expense.expense}</Typography>
            <Typography variant="subtitle1">Amount: ${expense.amount}</Typography>
            <Typography variant="subtitle1">Status: {expense.status}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Date: {expense.date}</Typography>
            <Typography variant="subtitle1">Category: {expense.category}</Typography>
            <Typography variant="subtitle1">Description: {expense.description}</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" style={{ marginTop: '24px' }}>
          Edit Expense
        </Button>
      </Paper>
    </Container>
  );
};

export default ExpenseDetailsPage;
