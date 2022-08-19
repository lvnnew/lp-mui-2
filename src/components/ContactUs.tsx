import React, { useState } from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: "20px",
          lineHeight: 1.4,
          fontWeight: 600,
        }}
      >
        Заполните форму, и мы перезвоним
      </Typography>
      <Box
        sx={{
          marginTop: "30px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px !important",
          }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px !important",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Телефон для связи"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px !important",
          }}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          label="Телефон для связи"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px !important",
          }}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Typography
          sx={{
            marginTop: "30px",
            marginBottom: "16px",
            fontFamily: "Montserrat,sans-serif",
            color: "#010e28",
            fontSize: "14px",
            lineHeight: 1.4,
            textDecoration: "none",
          }}
        >
          Оставляя заявку, вы даете нам разрешение связаться с вами и
          соглашаетесь с <a href="#">Политикой конфиденциальности</a>
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "100%",
            height: "52px",
            borderRadius: "4px",
            backgroundColor: "#0ac738",
            boxShadow: "none",
            fontFamily: "Montserrat,sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            ":hover": {
              display: "inline-block",
              padding: "9px 15px",
              backgroundColor: "#0ac738",
              color: "#fff",
              border: 0,
              lineHeight: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            },
          }}
          onClick={submitForm}
        >
          Записаться на демо
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
