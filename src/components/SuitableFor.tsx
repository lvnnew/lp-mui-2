import React from "react";
import {
  Typography,
  Button,
  Box,
  Stack,
  Grid,
} from "@mui/material";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

const SuitableFor = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#f2f3f7",
        height: "100%",
      }}
      paddingTop="20px"
    >
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
            <Typography
              sx={{
                marginTop: "40px",
                marginBottom: "20px",
                color: "#6a72e7",
                fontSize: "15px",
                lineHeight: "20px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              ДЛЯ РАЗНЫХ ЗАДАЧ
            </Typography>
            <Typography
              sx={{
                display: "block",
                maxWidth: "1140px",
                marginTop: '20px',
                marginBottom: "40px",
                fontFamily: "Montserrat,sans-serif",
                color: "#1d1d1d",
                fontSize: "48px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Кому подойдет
            </Typography>
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
          md={2}
          sx={{
            display: "flex",
            width: "100%",
            margin: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "1px #e0e0e0",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "0 20px 40px -40px #757575",
            ":hover": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              minHeight: "240px",
            }}
          >
            <Box>
              <img
                src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/6240587980f1aa274b466a41_1.png"
                style={{
                  width: "35px",
                  background: "#f8e9ec",
                  borderRadius: "10px",
                  padding: "10px",
                  marginRight: "auto",
                  marginBottom: "20px",
                }}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Montserrat,sans-serif",
                marginBottom: "20px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Маркетологи
            </Typography>
            <Grid container spacing={1} direction="column">
              <ul
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  listStyleType: "circle",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: "auto",
                }}
              >
                <li>система кэшбэков и бонусов</li>
                <li>автопополнение счетов, чтобы не забыть</li>
                <li>помощь и экспертиза</li>
              </ul>
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={2}
          sx={{
            display: "flex",
            width: "100%",
            margin: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "1px #e0e0e0",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "0 20px 40px -40px #757575",
            ":hover": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              minHeight: "240px",
            }}
          >
            <Box>
              <img
                src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/6240587901ca8cbc5003dc1b_2.png"
                style={{
                  width: "35px",
                  background: "#f8e9ec",
                  borderRadius: "10px",
                  padding: "10px",
                  marginRight: "auto",
                  marginBottom: "20px",
                }}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Montserrat,sans-serif",
                marginBottom: "20px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Предприниматели
            </Typography>
            <Grid container spacing={1} direction="column">
              <ul
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  listStyleType: "circle",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: "auto",
                }}
              >
                <li>порядок в документах для бизнеса</li>
                <li>удобство работы с одним контрагентом</li>
                <li>безопасная официальная оплата продвижения</li>
              </ul>
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={2}
          sx={{
            display: "flex",
            width: "100%",
            margin: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "1px #e0e0e0",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "0 20px 40px -40px #757575",
            ":hover": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              minHeight: "240px",
            }}
          >
            <Box>
              <img
                src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/624058794ed0a0a022bc7938_3.png"
                style={{
                  width: "35px",
                  background: "#edf7e7",
                  borderRadius: "10px",
                  padding: "10px",
                  marginRight: "auto",
                  marginBottom: "20px",
                }}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Montserrat,sans-serif",
                marginBottom: "20px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Бухгалтеры
            </Typography>
            <Grid container spacing={1} direction="column">
              <ul
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  listStyleType: "circle",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: "auto",
                }}
              >
                <li>закрывающие документы для налоговой</li>
                <li>все бумаги в одном личном кабинете</li>
                <li>доставка документов почтой или в ЭДО</li>
              </ul>
            </Grid>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={2}
          sx={{
            display: "flex",
            width: "100%",
            margin: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "1px #e0e0e0",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "0 20px 40px -40px #757575",
            ":hover": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              minHeight: "240px",
            }}
          >
            <Box>
              <img
                src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/62405878ef01fd0be427acf5_4.png"
                style={{
                  width: "35px",
                  background: "#ece6f8",
                  borderRadius: "10px",
                  padding: "10px",
                  marginRight: "auto",
                  marginBottom: "20px",
                }}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Montserrat,sans-serif",
                marginBottom: "20px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Рекламные агентства
            </Typography>
            <Grid container spacing={1} direction="column">
              <ul
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  listStyleType: "circle",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: "auto",
                }}
              >
                <li>агентское вознаграждение</li>
                <li>аккаунты всех клиентов на разных площадках в одном окне</li>
                <li>общий бюджет и гибкое распределение</li>
              </ul>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuitableFor;
