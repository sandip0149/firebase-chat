import * as Yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const initialValues = {
  email: "sandip@gmail.com",
  password: "Password123!",
  submit: null,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });
  const navigate = useNavigate()

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          elevation={16}
          sx={{
            width: "30vw",
          }}
        >
          <CardHeader
            subheader={
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link   underline="hover" variant="subtitle2" onClick={()=>{navigate("/register")}}>
                  Register
                </Link>
              </Typography>
            }
            sx={{ pb: 0 }}
            title="Log in"
          />
          <CardContent>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  autoFocus
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
              
            </form>
          </CardContent>
        </Card>
         
      </div>
    </>
  );
};

export default Login;
