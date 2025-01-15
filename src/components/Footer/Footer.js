import "./Footer.less";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Grid2 as Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={"footer-content"}>
        <Grid container spacing={6} style={{ padding: "20px 30px 0px 30px" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <h5>ABOUT</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passage. Lorem Ipsum.
            </p>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6">Services</Typography>
            <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
              <li>Food</li>
              <li>Shopping</li>
              <li>Arts & Entertainment</li>
              <li>Drinks</li>
              <li>Social Gatherings</li>
              <li>Parks & Recreation</li>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6">QUICK LINKS</Typography>
            <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
              <li>Home</li>
              <li>Services</li>
              <li>Register User</li>
              <li>Register Restaurant</li>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6">FOLLOW US</Typography>
            <Box
              component="ul"
              sx={{
                display: "Flex",
                justifyContent: "space-around",
                listStyleType: "none",
                padding: 0,
              }}
            >
              <li>
                <Link href="#" color="inherit">
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  <LinkedIn />
                </Link>
              </li>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className={"footer-strip"}>
        <p>
          Copyright &copy; 2025 All Rights Reserved by
          <a href="#"> Ntech</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
