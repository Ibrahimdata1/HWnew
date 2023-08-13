
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <>
    <AppBar position='static' className='nav'>
        <Toolbar>
            <IconButton size='large' edge="start" color="inherit" aria-label='logo'>
                <AccessAlarmIcon/>
            </IconButton>
            <Typography variant='h6' component="div" sx={{flexGrow:1}} id='myApp'>
                MyApp
            </Typography>
            <Stack direction='row' spacing={2} className='navRight'>
                <Button color='inherit'><Link to={'/product'}>Product</Link></Button>
                <Button color='inherit'><Link to={'/checkout'}>Checkout</Link></Button>
            </Stack>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default MainMenu
