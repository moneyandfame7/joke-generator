import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
 const Header = () => {
    return (
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor:'#201E20',color:'#DDC3A5'}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" component="h5" sx={{ flexGrow: 1 }}>
                            Joker
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            );
}
export default Header
