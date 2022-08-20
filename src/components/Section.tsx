import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import ContactUs from "./ContactUs";

const Section = () => {
  const sectionItems = [
    {
      id: 1,
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#83bf5c" }} />,
      sentence:
        "Только один раз. Никакого повторного списания у самих площадок не будет",
    },
    {
      id: 2,
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#83bf5c" }} />,
      sentence: "Наши закрывающие подходят для оформления возмещения НДС",
    },
    {
      id: 3,
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#83bf5c" }} />,
      sentence: "Минимальной суммы пополнения нет",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, height: "100%", marginTop: "25px" }}>
      <Typography
        sx={{ fontFamily: "Montserrat", fontSize: 14, textAlign: "center" }}
      >
        <h2>А как я буду платить НДС?</h2>
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100px",
        }}
      >
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={120}
            key={item.id}
            sx={{
              backgroundColor: "#f2f3f7",
              textAlign: "left",
              padding: "20px",
              width: "200px",
              borderRadius: "10px",
              margin: "8px !important",
            }}
          >
            {item.icon}
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                color: "#676768",
              }}
            >
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          width: "100%",
          background:
            "linear-gradient(164deg, rgba(151,81,255,1) 0%, rgba(85,18,161,1) 51%, rgba(179,0,255,1) 100%)",
          backgroundSize: "cover",
          marginTop: "40px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "100%",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              spacing={1}
              columns={18}
              sx={{
                marginTop: "5px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Grid
                xs={18}
                md={8}
                sx={{ margin: "10px" }}
                marginRight={{ md: "40px" }}
              >
                <Typography
                  sx={{
                    marginBottom: "50px",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                    fontSize: "48px",
                    lineHeight: 1.2,
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                  marginTop={{ md: "20px" }}
                >
                  Чем вам поможет Aitarget One
                </Typography>
                <Typography
                  sx={{
                    maxWidth: "500px",
                    marginBottom: 0,
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                    fontSize: "20px",
                    lineHeight: 1.4,
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  Запишитесь на демонстрацию, чтобы узнать обо всех возможностях
                  платформы
                </Typography>
                <Typography
                  sx={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                    fontSize: "16px",
                    lineHeight: 1.4,
                    textAlign: "left",
                  }}
                >
                  Расскажем, как использовать Aitarget One именно для вашего
                  бизнеса и оплачивать рекламу во ВКонтакте, и MyTarget, Яндекс
                  Директ и Яндекс Бизнес, TikTok. Поможем подключиться,
                  перенести кампании из ваших рекламных аккаунтов и ответим на
                  все вопросы!
                </Typography>
              </Grid>
              <Grid
                xs={18}
                md={8}
                style={{
                  padding: "24px",
                  border: "1px rgba(172,170,250,.12)",
                  borderRadius: "16px",
                  backgroundColor: "#fff",

                  position: "relative",
                  maxWidth: "475px",
                  minHeight: "454px",
                }}
                marginLeft={{ md: "60px" }}
              >
                <ContactUs />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </Box>
  );
};
export default Section;
