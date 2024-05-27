import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import s from './header.module.css'
import logo from './img/logo.png'
import logo2 from './img/file.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const pages = [
  {
    page: 'Главная',
    path: '/'
  },
  {
    page: 'Услуги',
    path: '/services'
  },
  {
    page: 'Наши проекты',
    path: '/companyProjects'
  },
  {
    page: 'О нас',
    path: '/about'
  }
];


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToContact = () => {
    navigate('/contact');
  }
  return (
    <AppBar style={{ background: 'none', boxShadow: 'none' }} position="static">
      <Container maxWidth="x1">
        <Toolbar className={s.AppBar} disableGutters>
          <div className={s.headerLogo} >
            <img height='40px' style={{borderRadius: '20px', boxShadow: '2px 2px 1px #7878787a '}} src={logo2} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ЭЛЭНЕРГО
            </Typography>
          </div>
          
          <Box sx={{ display: {  xs: 'none', md: 'flex'} }}>
            {pages.map((link) => (
              <Button
                key={link.page}
                onClick={() => {handleCloseNavMenu(); navigate(link.path)}}
                sx={{ my: 2, color: 'white' }}
              >
                {link.page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
           
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((link) => (
                <MenuItem key={link} onClick={handleCloseNavMenu}>
                   <Typography 
                   key={link.page}
                   onClick={() => {handleCloseNavMenu(); navigate(link.path)}}
                   sx={{ my: 1 }}
                   textAlign="center">{link.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link, NavLink, useNavigate } from 'react-router-dom'

// const pages = [
//   {
//     page: 'Главная',
//     path: '/'
//   },
//   {
//     page: 'Услуги',
//     path: '/services'
//   },
//   {
//     page: 'Наши проекты',
//     path: '/companyProjects'
//   },
//   {
//     page: 'О нас',
//     path: '/about'
//   }
// ];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const navigate = useNavigate();
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters >
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 1,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 200,
//               letterSpacing: '.2rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             ЭЛЭНЕРГО
//           </Typography>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             ЭЛЭНЕРГО
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
              
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page.page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           {pages.map((link) => (
//               <Button
//                 key={link.page}
//                 onClick={() => {handleCloseNavMenu(); navigate(link.path)}}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {link.page}
//               </Button>
//             ))}
//           </Box>
          
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;