import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import {auth,db} from '../firebase'
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
const initialValues = {
  email: "",
  name: "",
  password: "",
  policy: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  name: Yup.string().max(255).required("Name is required"),
  password: Yup.string().min(7).max(255).required("Password is required"),
  policy: Yup.boolean().oneOf([true], "This field must be checked"),
});
const SignUp = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
       createUserWithEmailAndPassword(auth,formik.values.email,formik.values.password)
       .then(async (user)=>{
          await updateProfile(user.user,{
            displayName:formik.values.name
          })
          await setDoc(doc(db,"user",user.user.uid),{
            uid:user.user.uid,
            displayName:user.user.displayName,
            email:user.user.email
            
          })
          await setDoc(doc(db,"userChats",user.user.uid),{})
          navigate("/")
       })
       .catch(err => {
        console.log(err);
       })
    },
  });
  
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
                Already have an account? &nbsp;
                <Link   underline="hover" variant="subtitle2" onClick={()=>{navigate("/login")}}>
                  Log in
                </Link>
              </Typography>
            }
            sx={{ pb: 0 }}
            title="Register"
          />
          <CardContent>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <TextField
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
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  ml: -1,
                  mt: 1,
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography color="text.secondary" variant="body2">
                  I have read the{" "}
                  <Link component="a" href="#">
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              {!!(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>{formik.errors.policy}</FormHelperText>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignUp;
