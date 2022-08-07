import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

// const Section = () => {
//   const sectionItems = [
//     {
//       id: 1,
//       icon: <CheckCircleIcon sx={{ fontSize: 100 }} color="primary" />,
//       sentence:
//         "Solving world problems through various web applications using efficient programs and tools",
//     },
//     {
//       id: 2,
//       icon: <CheckCircleIcon sx={{ fontSize: 100 }} color="primary" />,
//       sentence:
//         "Through team work, we collaborate and deliver quality projects of high standards",
//     },
//     {
//       id: 3,
//       icon: <CheckCircleIcon sx={{ fontSize: 100 }} color="primary" />,
//       sentence: "Flexible payment plan is applicable to all our services",
//     },
//   ];
//   return (
//     <Container
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "30px 60px 80px",
//         backgroundColor: "#ffffff",
//       }}
//     >
//       <Container
//         sx={{
//           maxWidth: "1140px",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <Container sx={{ display: "block" }}>
//           <Typography><h2>А как я буду платить НДС?</h2></Typography>
//           <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
//             <Grid container sx={{}}>
//               {sectionItems.map((item) => (
//                 <Grid
//                   item
//                   xs={12}
//                   md={3.5}
//                   minHeight={300}
//                   key={item.id}
//                   sx={{}}
//                 >
//                   {item.icon}
//                   <Typography>{item.sentence}</Typography>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Container>
//       </Container>
//     </Container>
//   );
// };

const Section = () => {
  const sectionItems = [
    {
      id: 1,
      icon: (
        <CheckCircleIcon
          sx={{
            display: "block",
            fontSize: "1.9rem",
            maxWidth: "none",
            marginBottom: "10px",
            color: "#83bf5c",
          }}
        />
      ),
      sentence:
        "Только один раз. Никакого повторного списания у самих площадок не будет",
    },
    {
      id: 2,
      icon: (
        <CheckCircleIcon
          sx={{
            display: "block",
            fontSize: "1.9rem",
            maxWidth: "none",
            marginBottom: "10px",
            color: "#83bf5c",
          }}
        />
      ),
      sentence: "Наши закрывающие подходят для оформления возмещения НДС",
    },
    {
      id: 3,
      icon: (
        <CheckCircleIcon
          sx={{
            display: "block",
            fontSize: "1.9rem",
            maxWidth: "none",
            marginBottom: "10px",
            color: "#83bf5c",
          }}
        />
      ),
      sentence: "Минимальной суммы пополнения нет",
    },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Container
        sx={{
          padding: "0 80px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "15px", lineHeight: 1.4 }}
        >
          <h2>А как я буду платить НДС?</h2>
        </Typography>
        <Container>
          <Box>
            <Grid container sx={{}}>
              {sectionItems.map((item) => (
                <Grid
                  item
                  xs={12}
                  md={3.8}
                  key={item.id}
                  sx={{
                    margin: "8px",
                    padding: "20px 20px 20px 20px",
                    borderRadius: "16px",
                    backgroundColor: "#f2f3f7",
                  }}
                >
                  {item.icon}
                  <Typography
                    sx={{
                      fontFamily: "Montserrat,sans-serif",
                      color: "#1d1d1d",
                      fontSize: "1rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.sentence}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default Section;
