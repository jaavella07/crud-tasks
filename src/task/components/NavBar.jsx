
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { logout } from '../../store/auth';


export const NavBar = () => {



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Tasks App
                        </Typography>
                        <RouterLink component={RouterLink} to="/auth/login">
                            <Button 
                            variant="contained"
                            >Salir</Button>
                        </RouterLink>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}
