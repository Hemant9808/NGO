import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {

    
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open:boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "HOME", href: "#" },
    { text: "OUR TEAM", href: "#" },
    { text: "CAMPAIGNS", href: "#" },
    { text: "CONTACT", href: "#" },
  ];
  return (
    <div>
      <header className=" md:flex hidden justify-between items-center p-5 px-[3%] bg-white shadow-md">
        <div className="text-green-500 text-xl font-bold">LOGO</div>
        <nav className="space-x-6">
          <a href="#" className="text-green-500">
            HOME
          </a>
          <a href="#" className="text-gray-700">
            OUR TEAM
          </a>
          <a href="#" className="text-gray-700">
            CAMPAIGNS
          </a>
          <a href="#" className="text-gray-700">
            CONTACT
          </a>
        </nav>
        <button className="bg-green-500 text-white bg-green px-4 py-2 rounded">DONATE</button>
      </header>
         
<div className='md:hidden block'>
<AppBar position="static" style={{ backgroundColor: 'white' }} className="bg-white shadow-md">
        <Toolbar className="flex justify-between">
          <div className="text-green-500 text-lg md:text-xl font-bold">LOGO</div>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Button key={item.text} href={item.href} className="text-green-500 hover:text-green-700">
                {item.text}
              </Button>
            ))}
            <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              DONATE
            </Button>
          </div>
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
      <Drawer  anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-64 flex flex-col h-full">
          <IconButton onClick={toggleDrawer(false)} className="self-end m-4">
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button component="a" href="#">
              <ListItemText primary="DONATE" className="text-green-500" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar
