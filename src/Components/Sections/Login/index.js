import React, { useState } from 'react';
import { FormGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './Style.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Alert from '@mui/material/Alert';
import { setUser } from '../../../redux/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Logo from '../../../assets/img/Iot.png';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  }));

const Login = () =>{

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.data.user);
    const [isLoading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const loginUser = () =>{
        setLoading(true);
        console.log(email, password);
        const authentication = getAuth()
        signInWithEmailAndPassword(authentication, email, password).then((response) => {
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Login Sucess!</Alert>
            let userObj = {
                isLogged: true,
                token: response._tokenResponse.refreshToken
            }

            dispatch(setUser(userObj));
            setLoading(false);
            //sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }).catch((error)=>{
                console.log(error.code);
                setLoading(false);
                <Alert severity="error">Login Error</Alert>
          })
    }

    return (
        <Box
            sx={{ width: '30%', marginTop: 50, padding: 10, margin: '0 auto' }}
            md={{ width: '50%'}}>
            <Box sx={{padding: 7}}>
              <img src={Logo} alt="Logo" width="70px" />
            </Box>
            <FormGroup>
                <Stack spacing={2}>
                    <Item>
                        <TextField sx={{color: 'aliceblue'}} onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                    </Item>
                    <Item>
                        <TextField sx={{color: 'aliceblue'}} onChange={(e)=> setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" 
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                    </Item>
                    <Stack  direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Item>
                            <Button className="loginBtn" onClick={loginUser} variant="contained">Sign in</Button>
                        </Item>
                    </Stack>
                </Stack>
            </FormGroup>
            <Box>
              {isLoading? <CircularProgress />: null}
            </Box>
        </Box>
    )
}

export default Login;