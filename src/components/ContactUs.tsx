/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [site, setSite] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({ email, firstName, site, phone });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
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
          size="small"
          fullWidth
          sx={{
            marginBottom: "10px !important",
            border: '0.7px solid #dfdfdf',
          }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Ваш сайт"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            marginBottom: "10px !important",
          }}
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />

        <TextField
          label="Телефон для связи"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            marginBottom: "10px !important",
          }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            marginBottom: "10px !important",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Typography
          sx={{
            marginTop: "20px",
            marginBottom: "16px",
            fontFamily: "Montserrat,sans-serif",
            color: "#010e28",
            fontSize: "14px",
            lineHeight: 1.4,
            textDecoration: "none",
          }}
        >
          Оставляя заявку, вы даете нам разрешение связаться с вами и
          соглашаетесь с <a>Политикой конфиденциальности</a>
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
