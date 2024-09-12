import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";

export default function CardLayers3d() {
  return (
    <div className="container m-8">
      <div className="flex ml-8">
        <Box
          className="ml-8"
          sx={{
            perspective: "1000px",
            transition: "transform 0.4s",
            "& > div, & > div > div": {
              transition: "inherit",
            },
            "&:hover": {
              "& > div": {
                transform: "rotateY(30deg)",
                "& > div:nth-child(2)": {
                  transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                },
                "& > div:nth-child(3)": {
                  transform: "translate3d(45px, 50px, 40px)",
                },
              },
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              minHeight: "280px",
              width: 320,
              backgroundColor: "#fff",
              border: "2px solid blue",
            }}
          >
            <Typography level="h2" fontSize="lg" textColor="#000">
              Auto Grading with Rubrics
            </Typography>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(173, 216, 230, 0.4), rgba(173, 216, 230, 0) 200px), linear-gradient(to top, rgba(144, 238, 144, 0.8), rgba(144, 238, 144, 0) 300px)",
                border: "1px solid",
                borderColor: "#777",
                backdropFilter: "blur(1px)",
              }}
            >
              <img
                className="mt-4"
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardContent
              sx={{
                alignItems: "self-end",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
                backdropFilter: "blur(1px)",
              }}
            >
              <Typography level="h6" fontSize="lg" textColor="#fff" m={2}>
                This tool automatically grades your assignments using predefined
                rubrics.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          className="ml-8"
          sx={{
            perspective: "1000px",
            transition: "transform 0.4s",
            "& > div, & > div > div": {
              transition: "inherit",
            },
            "&:hover": {
              "& > div": {
                transform: "rotateY(30deg)",
                "& > div:nth-child(2)": {
                  transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                },
                "& > div:nth-child(3)": {
                  transform: "translate3d(45px, 50px, 40px)",
                },
              },
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              minHeight: "280px",
              width: 320,
              backgroundColor: "#fff",
              borderColor: "#000",
            }}
          >
            <Typography level="h2" fontSize="lg" textColor="#000">
              Lesson Content Tagging Tool
            </Typography>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(173, 216, 230, 0.4), rgba(173, 216, 230, 0) 200px), linear-gradient(to top, rgba(144, 238, 144, 0.8), rgba(144, 238, 144, 0) 300px)",
                border: "1px solid",
                borderColor: "#777",
                backdropFilter: "blur(1px)",
              }}
            >
              <img
                className="mt-4"
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardContent
              sx={{
                alignItems: "self-end",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
                backdropFilter: "blur(1px)",
                marginLeft: "20px",
              }}
            >
              <Typography level="h6" fontSize="lg" textColor="#fff" m={2}>
                This tool helps you analyze how well your lesson content aligns
                with specific learning competencies.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          className="ml-8"
          sx={{
            perspective: "1000px",
            transition: "transform 0.4s",
            "& > div, & > div > div": {
              transition: "inherit",
            },
            "&:hover": {
              "& > div": {
                transform: "rotateY(30deg)",
                "& > div:nth-child(2)": {
                  transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                },
                "& > div:nth-child(3)": {
                  transform: "translate3d(45px, 50px, 40px)",
                },
              },
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              minHeight: "280px",
              width: 320,
              backgroundColor: "#fff",
              borderColor: "#000",
            }}
          >
            <Typography level="h2" fontSize="lg" textColor="#000">
              Language Translation Tool
            </Typography>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(173, 216, 230, 0.4), rgba(173, 216, 230, 0) 200px), linear-gradient(to top, rgba(144, 238, 144, 0.8), rgba(144, 238, 144, 0) 300px)",
                border: "1px solid",
                borderColor: "#777",
                backdropFilter: "blur(1px)",
              }}
            >
              <img
                className="mt-4"
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardContent
              sx={{
                alignItems: "self-end",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
                backdropFilter: "blur(1px)",
              }}
            >
              <Typography level="h6" fontSize="lg" textColor="#fff" m={2}>
                This tool helps you to translate the source language text to
                target language.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
      {/* normal card here */}
      <div className="flex ml-8">
        <Card className="ml-8 mt-4" variant="outlined" sx={{ width: 320 }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="title-sm">
              This tool summarizes the main points from audio and video files.
            </Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Typography
                level="body-xs"
                fontWeight="md"
                textColor="text.secondary"
              >
                Audio and Video Summarization Tool
              </Typography>
            </CardContent>
          </CardOverflow>
        </Card>

        <Card className="ml-8 mt-4" variant="outlined" sx={{ width: 320 }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="title-sm">
              This tool helps you to systematically compare educational
              competencies across multiple standards.
            </Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Typography
                level="body-xs"
                fontWeight="md"
                textColor="text.secondary"
              >
                Standards Alignment Crosswalk Tool
              </Typography>
            </CardContent>
          </CardOverflow>
        </Card>

        <Card className="ml-8 mt-4" variant="outlined" sx={{ width: 320 }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="title-sm">
              This tool paraphrases content for you to make it easier to
              understand.
            </Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Typography
                level="body-xs"
                fontWeight="md"
                textColor="text.secondary"
              >
                Content Paraphrase Tool
              </Typography>
            </CardContent>
          </CardOverflow>
        </Card>
      </div>
    </div>
  );
}
