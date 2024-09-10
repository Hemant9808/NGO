import { Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "HOME", href: "/" },
    // { text: "OUR TEAM", href: "/team" },
    { text: "CAMPAIGNS", href: "/campaigns" },
    { text: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar for Desktop */}
      <header className="md:flex w-[100%] fixed z-[100] bg-white shadow-md hidden justify-between items-center px-[3%]  ">
        <div className="logo-image">
          <img src="../assets/logo.png"  className="w-[100%] h-[4rem] p-1" />
        </div>
        <nav className="space-x-7 text-xl tracking-wider">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.href}
              className="text-black hover:text-green"
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <Link
          to="/donate"
          className="text-xl bg-green text-white hover:text-green px-10 py-2 rounded-lg border-2 border-green hover:bg-white hover:border-2 hover:border-green tracking-wider  "
        >
          DONATE
        </Link>
      </header>

      {/* Navbar for Mobile */}
      <div className="md:hidden block">
        <AppBar
          position="static"
          style={{ backgroundColor: "white" }}
          className="bg-white shadow-md"
        >
          <Toolbar className="flex justify-between">
          <img src="../assets/logo.png"  className="h-[3.3rem] p-1" />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className="md:hidden"
              sx={{ color: "green" }}
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
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem
              button
              component={Link}
              to="/donate"
              onClick={toggleDrawer(false)}
            >
              <button className="text-xl bg-green text-white hover:text-green px-6 py-1 mt-4 rounded-lg border-2 border-green hover:bg-white hover:border-2 hover:border-green tracking-wider">
                <ListItemText primary="DONATE" />
              </button>
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
