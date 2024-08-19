import { Outlet, Link } from 'react-router-dom';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from 'react';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open:any) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "HOME", href: "/" },
    { text: "OUR TEAM", href: "/team" },
    { text: "CAMPAIGNS", href: "/campaigns" },
    { text: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar for Desktop */}
      <header className="md:flex hidden justify-between items-center p-5 px-[3%] bg-white shadow-md">
        <div className="text-green-500 text-xl font-bold">LOGO</div>
        <nav className="space-x-6">
          {menuItems.map((item) => (
            <Link key={item.text} to={item.href} className="text-green-500 hover:text-green-700">
              {item.text}
            </Link>
          ))}
        </nav>
        <Link to="/donate" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          DONATE
        </Link>
      </header>

      {/* Navbar for Mobile */}
      <div className='md:hidden block'>
        <AppBar position="static" style={{ backgroundColor: 'white' }} className="bg-white shadow-md">
          <Toolbar className="flex justify-between">
            <div className="text-green-500 text-lg md:text-xl font-bold">LOGO</div>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className="md:hidden"
              sx={{ color: 'green' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-64 flex flex-col h-full">
          <IconButton onClick={toggleDrawer(false)} className="self-end m-4">
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.href} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button component={Link} to="/donate" onClick={toggleDrawer(false)}>
              <ListItemText primary="DONATE" className="text-green-500" />
            </ListItem>
          </List>
        </div>
      </Drawer>

      {/* Render the child routes */}
      <Outlet />
    </>
  );
};

export default Layout;
