import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Loadingcard from "@/components/Loadingcard";

const Cardloading = () => {
  return (
    <div className="projectsection">
      <div className="heading" style={{ paddingTop: "9%" }}>
        <Typography variant="h6" gutterBottom>
          A Glimpse at <span>Blog</span>
        </Typography>
      </div>

      <div className="projectbx">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Loadingcard />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Loadingcard />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Loadingcard />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Cardloading;
