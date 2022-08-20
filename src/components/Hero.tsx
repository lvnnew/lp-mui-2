import React from "react";
import { Typography, Button, Box, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

const Hero = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    adaptiveHeight: false,
    responsive: [
      {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#f2f3f7",
        height: "100vh",
      }}
      paddingTop={{ xs: "120px", md: "40px" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop: "10%",
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={{ md: '30%', xs: '90%' }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: '100%',
            }}
          >
            <Stack direction={{ xs: "column", sm: "row" }}>
              <Box margin={{ sm: "10px" }} sx={{width: "100%"}}>
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
              <Box margin={{ sm: "10px" }} sx={{width: "100%"}}>
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
                display: "block",
                fontFamily: "Montserrat,sans-serif",
                color: "#757575",
                textAlign: "center",
                marginTop: "14px",
                marginRight: "auto",
                marginLeft: "auto",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              Это бесплатно и займет пару минут
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ margin: "20px 10px" }}>
        <Slider {...settings}>
          <div>
            <Box
              maxHeight={{ md: "120px" }}
              minHeight={{ md: "120px" }}
              sx={{
                marginBottom: "20px",
                width: "auto",
                padding: "16px 25px",
                margin: "10px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0 0 10px 0 hsl(0deg 0% 67% / 30%)",
              }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/6262b087d064767c789f5747_5.png"
                    style={{
                      width: "35px",
                      background: "#f2f3f7",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    alt=""
                  />
                </div>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "Montserrat,sans-serif",
                    textAlign: "center",
                  }}
                >
                  Кэшбэк по всей рекламе
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              maxHeight={{ md: "120px" }}
              minHeight={{ md: "120px" }}
              sx={{
                marginBottom: "20px",
                width: "auto",
                padding: "16px 25px",
                margin: "10px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0 0 10px 0 hsl(0deg 0% 67% / 30%)",
              }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/6261c9746f962aa04f8c51ab_1.png"
                    style={{
                      width: "35px",
                      background: "#f2f3f7",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    alt=""
                  />
                </div>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "Montserrat,sans-serif",
                    textAlign: "center",
                  }}
                >
                  Одно окно для всех оплат
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              maxHeight={{ md: "120px" }}
              minHeight={{ md: "120px" }}
              sx={{
                marginBottom: "20px",
                width: "auto",
                padding: "16px 25px",
                margin: "10px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0 0 10px 0 hsl(0deg 0% 67% / 30%)",
              }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://assets-global.website-files.com/5ea01c1a779fa296ff00c521/6261c9737d576658ddc3a747_3.png"
                    style={{
                      width: "35px",
                      background: "#f2f3f7",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    alt=""
                  />
                </div>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "Montserrat,sans-serif",
                    textAlign: "center",
                  }}
                >
                  Отчеты для контроля расходов и результатов
                </Typography>
              </Box>
            </Box>
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default Hero;
