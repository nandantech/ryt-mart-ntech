import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Stack,
  Divider,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
}));

export default function SignIn() {
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const navigate = useNavigate();

  const validateInputs = () => {
    const identifier = document.getElementById("identifier");
    const password = document.getElementById("password");

    let isValid = true;

    if (!identifier.value || identifier.value.length < 3) {
      setInputError(true);
      setInputErrorMessage("Please enter a valid email ID or username.");
      isValid = false;
    } else {
      setInputError(false);
      setInputErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleCaptchaChange = (value) => {
    setIsCaptchaValid(!!value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInputs() || !isCaptchaValid) {
      alert("Please complete all fields and the CAPTCHA.");
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      identifier: data.get("identifier"),
      password: data.get("password"),
    });

    navigate("/home");
  };

  return (
    <SignInContainer direction="column" justifyContent="center">
      <CssBaseline />
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="identifier">Email or Username</FormLabel>
            <TextField
              required
              fullWidth
              id="identifier"
              placeholder="Enter your email or username"
              name="identifier"
              error={inputError}
              helperText={inputErrorMessage}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              required
              fullWidth
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              error={passwordError}
              helperText={passwordErrorMessage}
            />
          </FormControl>
          <ReCAPTCHA
            sitekey="6LeoJL8qAAAAACRctZOwtLab2cSyXda7DfkzwCl3"
            onChange={handleCaptchaChange}
          />
          <Button type="submit" fullWidth variant="contained">
            Sign In
          </Button>
        </Box>
        <Divider>
          <Typography sx={{ color: "text.secondary" }}>or</Typography>
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign in with Google")}
          >
            Sign in with Google
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link href="/signup" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignInContainer>
  );
}
