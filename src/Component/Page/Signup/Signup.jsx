
import { useContext, useState } from "react";
import { Box, Button, Card, FormControl, OutlinedInput, ThemeProvider, Typography, createTheme } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";







const Signup = () => {


    const { createUser, updateUserProfile } = useContext(AuthContext)
    const notify = () => toast("user created successfully")

    const axiosPublic = useAxiosPublic()

    const navigate = useNavigate()
    const [errorRegister, setErrorRegister] = useState('');
    const [passcode, setPasscode] = useState('');






    const handleForm = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        console.log(email, password, name, photoURL);
        setErrorRegister('')
        setPasscode('');


        if (password.length < 6) {
            setErrorRegister('password should be at least 8 character or more');
            return;
        }
        else if (!/[a-zA-Z0-9]/.test(password)) {
            setErrorRegister('Please complete the requirement');
            return;
        }


        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photoURL)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                            photoUrl: photoURL
                        };

                        axiosPublic.post("/users", userInfo)
                            .then(response => {
                                if (response.data.insertedId) {
                                    console.log('user profile info updated')
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "user created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/")
                                }


                            })
                            .catch(error => {
                                console.error("Error sending user information to MongoDB:", error);
                            });

                    }).catch((error) => {
                        if (error.code === 'auth/email-already-in-use') {
                            setErrorRegister('The email address is already in use. Please log in instead.');
                        } else {
                            console.error("Signup error:", error);
                        }
                    });

            })
    }



    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderColor: 'white',
                        color: 'white'
                    },
                    notchedOutline: {
                        borderColor: 'white',
                        color: 'white'
                    },
                },
            },
        },
    });







    return (
        <ThemeProvider theme={theme}>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingX: '100px',
                    height: '100vh',
                    backgroundColor: "black"

                }}
            >
                <ToastContainer />
                <Card className="shrink-0 w-full max-w-md  shadow-xl border-2" style={{ backgroundColor: 'transparent' }}>
                    <Box sx={{ marginTop: "30px" }}>
                        <Typography variant="h4" sx={{ color: "white", width: "fullWidth", textAlign: "center" }}>Create Your New Account</Typography>
                    </Box>
                    <form noValidate autoComplete="off" className="card-body" onSubmit={handleForm}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <Typography variant="body1" component="label"  sx={{ color: "white" }}>
                                   Name
                                    </Typography>
                                    <OutlinedInput placeholder=" name" type="text" name="name" />
                                </FormControl>
                            </Box>

                            <FormControl sx={{ width: '100%' }}>
                                <Typography variant="body1" component="label" sx={{ color: "white" }}>
                                    PhotoUrl
                                </Typography>
                                <OutlinedInput placeholder="PhotoUrl" type="text" required name="photoURL" fullWidth />
                            </FormControl>

                            <FormControl sx={{ width: '100%' }}>
                                <Typography variant="body1" component="label" sx={{ color: "white" }}>
                                    Email
                                </Typography>
                                <OutlinedInput placeholder="your Email" type="email" required name="email" fullWidth />
                            </FormControl>

                            <FormControl sx={{ width: '100%' }}>
                                <Typography variant="body1" component="label" sx={{ color: "white" }}>
                                    Password
                                </Typography>
                                <OutlinedInput placeholder="your password" type="password" required name="password" fullWidth />
                            </FormControl>
                            <Button variant="outlined" type="submit" onClick={notify}>Sign up</Button>
                        </Box>
                    </form>
                    {
                        errorRegister && <p className="mt-6 text-red-600 text-3xl">{errorRegister}</p>
                    }
                    {
                        passcode && <p className="text-green-500">{passcode}</p>
                    }
                    <span className=" px-7  font-semibold mx-8 text-white"> Already have an account? <Link to="/login" className="font-bold text-stone-300">Login</Link></span>
                </Card>
            </Box>
        </ThemeProvider>





    );
};

export default Signup;


