import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

export const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} >
      
      <Typography variant="h6" gutterBottom>
        Credit Card Payment
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Card Number"
          fullWidth
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Expiry (MM/YY)"
            fullWidth
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <TextField
            label="CVV"
            fullWidth
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Box>
        <TextField
          label="Cardholder Name"
          fullWidth
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
        <TextField
          label="Billing Address"
          fullWidth
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
        />
        <TextField
          label="Zip Code"
          fullWidth
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </Box>
    </Box>
  );
};
export const PayPal = () => {
  const [paypalEmail, setPaypalEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        PayPal Payment
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="PayPal Email"
          type="email"
          fullWidth
          value={paypalEmail}
          onChange={(e) => setPaypalEmail(e.target.value)}
        />
        <TextField
          label="Billing Address"
          fullWidth
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
        />
        <TextField
          label="Phone Number"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Additional Notes"
          fullWidth
          multiline
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Box>
    </Box>
  );
};
export const ApplePay = () => {
  const [fullName, setFullName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        Apple Pay Payment
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Full Name"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="Billing Address"
          fullWidth
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
        />
        <TextField
          label="Phone Number"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
    </Box>
  );
};
