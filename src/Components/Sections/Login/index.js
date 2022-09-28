import { FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './Style.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
  }));

const Login = () =>{
    return (
        <Box
            sx={{ width: '30%', marginTop: 50, padding: 10, margin: '0 auto' }}
            md={{ width: '50%'}}>
            <FormGroup>
                <Stack spacing={2}>
                    <Item>
                        <TextField sx={{color: 'aliceblue'}} id="outlined-basic" label="Username" variant="outlined" />
                    </Item>
                    <Item>
                        <TextField sx={{color: 'aliceblue'}} id="outlined-basic" label="Password" variant="outlined" />
                    </Item>
                    <Stack  direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Item>
                            <Button className="loginBtn" variant="contained">Sign in</Button>
                        </Item>
                        <Item>
                            <Button className="loginBtn" variant="contained">Sign in</Button>
                        </Item>
                    </Stack>
                </Stack>
            </FormGroup>
        </Box>
    )
}

export default Login;