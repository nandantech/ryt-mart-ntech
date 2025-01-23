import "./Footer.less";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
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
            Welcome to D N App! We’re here to help you discover the perfect restaurants for your special moments, from romantic dinners to casual outings. Explore detailed menus, manage your preferences, and uncover hidden gems in your area. For restaurants, we provide a platform to showcase your unique offerings and connect with diners. Let’s make every meal memorable!
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
        <p>Copyright &copy; 2025 All Rights Reserved by Ntech</p>
      </div>
    </footer>
  );
};

export default Footer;
