
import {  useState } from "react";
import { Box, Button, Card, Divider, FormControl, OutlinedInput, ThemeProvider, Typography, createTheme } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth"
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import auth from "../../../FIrebase/firebase.config";







const Login = () => {

    
    const {googleSignIn} = useAuth()

    const axiosPublic = useAxiosPublic()
    
      const [errorRegister, setErrorRegister] = useState('');
      const [passCode, setPassCode] = useState('');
    
      const navigate = useNavigate()
      
    
      const handleLogin = (e) => {
        e.preventDefault();
       
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password,name);
        setErrorRegister('');
        setPassCode('');
    
       
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            navigate('/')
            const userInfo = {
             email: result.user?.email
            };
            axiosPublic.post('/users', userInfo)
            .then(res => {
               console.log(res.data);
            setPassCode('user login successful');
               e.target.reset();
              navigate('/')
             })
            .catch(err => {
               console.error(err);
           });
        })
        .catch(error => {
          console.error(error);
        });
      };
    
    
      const handleGoogleSignIn = () => {
        googleSignIn()
          .then(result => {
            console.log(result.user);
            const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName
             
            };
            axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log(res.data);
                navigate('/');
              })
              .catch(err => {
               console.error(err);
               });
          })
          .catch(error => {
            console.error(error);
          });
      };
    



   


    const theme = createTheme({
        components: {
            MuiDivider: {
                styleOverrides: {
                  root: {
                    backgroundColor: 'gray',
                    height: '2px',
                    margin: '16px 0',
                  },
                },
              },
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

                <Card className="sm:h-auto md:h-auto lg:shrink-0 w-full max-w-md  shadow-xl border-2" style={{ backgroundColor: 'transparent' }}>
                    <Box sx={{ marginTop: "30px" }}>
                        <Typography variant="h4" sx={{ color: "white", width: "fullWidth", textAlign: "center" }}>Create Your New Account</Typography>
                    </Box>
                    <form noValidate autoComplete="off" className="card-body" onSubmit={ handleLogin}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                            <FormControl sx={{ width: '100%' }}>
                                <Typography variant="body1" component="label" sx={{ color: "white" }}>
                                    Email
                                </Typography>
                                <OutlinedInput placeholder="your Email" type="email"  required name="email" fullWidth />
                            </FormControl>

                            <FormControl sx={{ width: '100%' }}>
                                <Typography variant="body1" component="label" sx={{ color: "white" }}>
                                    Password
                                </Typography>
                                <OutlinedInput placeholder="your password" type="password"  required name="password" fullWidth />
                            </FormControl>
                            <Button variant="outlined" type="submit">Login</Button>
                        </Box>
                        <Divider/>
                        <Box>
                        <button onClick={handleGoogleSignIn} className="flex justify-center items-center gap-3 text-white border-2 border-white  w-24 p-2 rounded-xl"><FaGoogle />Google</button>
                        </Box>
                    </form>
                    
                   {errorRegister && (
                    <p className="mt-6 text-red-600 text-xl font-custom rancho">{errorRegister}</p>
                  )}
                  {passCode && <p className="text-green-500">{passCode}</p>}
                
                </Card>
            </Box>
        </ThemeProvider>





    );
};

export default  Login;


