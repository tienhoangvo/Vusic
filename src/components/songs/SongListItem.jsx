// @mui/material
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";

import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";

import { useMediaQuery } from "@mui/material";
// @mui/icons-material
import SaveIcon from "../icons/SaveIcon";
import PlayIcon from "../icons/PlayIcon";

const SongListItem = ({ song }) => {
  const matchedSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const { title, artist, thumbnail } = song;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "unset",
        borderTop: 2,

        borderColor: "primary.main",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: "100%",
              position: "relative",
              p: 1,
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                image={thumbnail}
                title={title}
                sx={{
                  height: "100%",
                  paddingTop: "56.25%",
                  position: "relative",
                  borderRadius: "5px",
                  filter: "grayscale(50%)",
                  transition: "filter .2s ease",
                  opacity: 0.95,
                }}
              />
            </CardActionArea>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <CardHeader
            title={title}
            titleTypographyProps={{
              fontSize: ".875rem",
              fontWeight: 700,
            }}
            subheader={artist}
            subheaderTypographyProps={{
              fontSize: "12px",
            }}
            sx={{ p: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <CardActions
            sx={{ justifyContent: matchedSmDown ? "center" : "flex-end" }}
          >
            <IconButton
              size="small"
              color="secondary"
              sx={{ border: 1, borderColor: "inherit" }}
            >
              <PlayIcon />
            </IconButton>

            <IconButton size="small" sx={{ border: 1, borderColor: "inherit" }}>
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SongListItem;
