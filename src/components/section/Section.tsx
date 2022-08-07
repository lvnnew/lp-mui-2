import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

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
      sentence:
        "Наши закрывающие подходят для оформления возмещения НДС",
    },
    {
      id: 3,
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#83bf5c" }} />,
      sentence: "Минимальной суммы пополнения нет",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
      <Typography sx={{fontFamily: "Montserrat", fontSize: 14, textAlign: "center"}}><h2>А как я буду платить НДС?</h2></Typography>
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
            <Typography sx={{fontFamily: "Montserrat", fontWeight: 500, color: "#676768"}}>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Section;
