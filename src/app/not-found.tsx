import { Box, Container, Grid2 } from "@mui/material";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function NotFound() {
    return (
        <section className="page_404">
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid2
                        container
                        spacing={2}
                        direction="column"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Grid2
                            size={{ xs: 12, md: 6 }}
                            className="four_zero_four_bg"
                        ></Grid2>
                        <Link href="/" >
                            <motion.button className="mybtn" whileTap={{ scale: 0.8 }}>
                                Go to Home
                            </motion.button>
                        </Link>

                    </Grid2>

                </Box>

            </Container>
        </section>
    );
}
