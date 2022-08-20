import React, { useState } from "react";
import { Typography, Box, Button, Stack, Grid, TextField } from "@mui/material";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

const Bottom = () => {
  const [email, setEmail] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#f2f3f7",
        height: "100%",
      }}
      paddingTop="20px"
      paddingBottom="40px"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop: "20px",
          width: "100%",
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={{ md: "30%", xs: "90%" }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
            }}
          >
            <Stack direction={{ xs: "column", sm: "row" }}>
              <Box margin={{ sm: "10px" }} sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    marginBottom: "20px",
                    width: "100%",
                    padding: "16px 25px",
                    border: "2px #603ac7",
                    borderRadius: "4px",
                    backgroundColor: "#603ac7",
                    transition: "all 1s",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 500,
                    textAlign: "center",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#4623a5",
                      webkitTransform: "translate(0,-3px)",
                      msTransform: "translate(0,-3px)",
                      transform: "translate(0,-3px)",
                      color: "#fff",
                    },
                  }}
                >
                  Зарегистрироваться
                </Button>
              </Box>
              <Box margin={{ sm: "10px" }} sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    marginBottom: "20px",
                    width: "100%",
                    padding: "16px 25px",
                    border: "1px solid #6a72e7",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    transition: "all 1s",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#4623a5",
                    fontSize: "15px",
                    fontWeight: 500,
                    textAlign: "center",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#fff",
                      webkitTransform: "translate(0,-3px)",
                      msTransform: "translate(0,-3px)",
                      transform: "translate(0,-3px)",
                      color: "#4623a5",
                    },
                  }}
                >
                  Записаться на демо
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          width: "100%",
          margin: "20px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          xs={12}
          md={4.5}
          sx={{
            display: "flex",
            width: "100%",
            margin: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              marginBottom: "10px",
              justifyContent: "flex-start",
              fontFamily: "Montserrat,sans-serif",
              color: "#1d1d1d",
              fontSize: "46px",
              fontWeight: "700",
            }}
          >
            Полезные письма
          </Typography>
          <Typography
            sx={{
              width: "auto",
              marginBottom: "10px",
              color: "#595959",
              textAlign: "left",
            }}
          >
            Отправляем инструкции и советы по рекламе ВКонтакте, MyTarget и
            Яндексе, приглашаем на обучающие вебинары и конференции. А еще
            каждый месяц делаем подборку новостей из мира интернет-рекламы.
            Подписывайтесь на доставку всего самого полезного в ваш почтовый
            ящик!
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              paddingTop: "20px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={{ xs: "90%" }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Stack direction={{ xs: "column", sm: "row" }}>
                  <Box margin={{ sm: "10px" }} sx={{ width: "100%" }}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      sx={{
                        marginBottom: "10px !important",
                        width: "100%",
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                  <Box
                    width={{
                      md: "70%",
                      xs: "100%",
                    }}
                    marginTop={{
                      md: '10px'
                    }}
                  >
                    <Button
                      onClick={submitForm}
                      variant="contained"
                      sx={{
                        width: "100%",
                        marginTop: 0,
                        padding: "16px 30px",
                        border: "1px #000",
                        borderRadius: "4px",
                        background: "#df51a3",
                        transition: "background-color .2s",
                        fontFamily: "Montserrat,sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        textTransform: "none",
                        boxShadow: 'none',
                        ":hover": {
                          background: "#ad337a",
                        },
                      }}
                    >
                      Подписаться
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bottom;
