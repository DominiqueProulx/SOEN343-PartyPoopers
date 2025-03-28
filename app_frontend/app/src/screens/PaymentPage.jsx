import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { CreditCard, PayPal, ApplePay } from "./PaymentMethods"; // Import forms

const PaymentPage = ({ eventName, ticketPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false); // Controls snackbar visibility

  // Handles form submission
  const handlePayment = (e) => {
    e.preventDefault();
    console.log(`Processing payment with ${paymentMethod}`);

    // Show success message
    setOpenSnackbar(true);
  };

  // Render the selected payment form dynamically
  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "credit-card":
        return <CreditCard />;
      case "paypal":
        return <PayPal />;
      case "apple-pay":
        return <ApplePay />;
      default:
        return (
          <Typography variant="body1" align="center">
            Select a payment method.
          </Typography>
        );
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, maxWidth: "500px", margin: "0 auto", marginTop: "50px" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Payment for {eventName}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Ticket Price: ${ticketPrice}
      </Typography>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel sx={{ backgroundColor: "white", px: 1, display: "block" }}>
          Select Payment Method
        </InputLabel>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <MenuItem value="credit-card">Credit Card</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
          <MenuItem value="apple-pay">Apple Pay</MenuItem>
        </Select>
      </FormControl>

      {/* Wrap the selected form inside a <form> */}
      <Box component="form" onSubmit={handlePayment} sx={{ mt: 3 }}>
        {renderPaymentForm()}
        {paymentMethod && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Pay Now
          </Button>
        )}
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Payment successful!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default PaymentPage;
