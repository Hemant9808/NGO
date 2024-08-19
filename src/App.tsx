
// import React from 'react';

// import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material'

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useState } from 'react';
// export const App=()=> {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const toggleDrawer = (open: boolean) => () => {
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: "HOME", href: "#" },
//     { text: "OUR TEAM", href: "#" },
//     { text: "CAMPAIGNS", href: "#" },
//     { text: "CONTACT", href: "#" },
//   ];

//   return (
//     //<>kjdfsdn</>
//    <>
   
//    <AppBar position="static" className="bg-white shadow-md">
//         <Toolbar className="flex justify-between">
//           <div className="text-green-500 text-lg md:text-xl font-bold">LOGO</div>
//           <div className="hidden md:flex space-x-6">
//             {menuItems.map((item) => (
//               <Button key={item.text} href={item.href} className="text-green-500 hover:text-green-700">
//                 {item.text}
//               </Button>
//             ))}
//             <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//               DONATE
//             </Button>
//           </div>
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             className="md:hidden"
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile Menu */}
//       <Drawer className='bg-red-500' anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <div className="w-64 flex flex-col h-full">
//           <IconButton onClick={toggleDrawer(false)} className="self-end m-4">
//             <CloseIcon />
//           </IconButton>
//           <List>
//             {menuItems.map((item) => (
//               <ListItem button key={item.text} component="a" href={item.href}>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//             <ListItem button component="a" href="#">
//               <ListItemText primary="DONATE" className="text-green-500" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>




//       {/* Main Content Section */}
//       <main className="flex flex-grow md:flex-row flex-col   items-center text-center mt-10 px-4 lg:px-24">
//       <div  className='w-[50%] flex flex-col items-start gap-9   '>
//       <div className="text-4xl   lg:text-5xl text-start   font-bold ">
//           Empowering <span className="text-green-500">RURAL</span> Lives with{" "}
//           <span className="text-green-500">HEALTH</span> and{" "}
//           <span className="text-green-500">EDUCATION</span>
//         </div>
//         <p className="text-start  text-gray-600 max-w-2xl">
//           Providing Essential Medical Support to Every Village and Urban Heart, Ensuring Health and Well-being for All Communities.
//         </p>
//         <button className=" bg-green-500 text-white px-6 py-3 rounded">
//           EXPLORE
//         </button>
//       </div>
        
        
//         {/* Background Image Replacement */}
//         <div className="mt-12 w-[50%]   h-96 bg-blue-500"></div>
//       </main>
  
//    </>
//   )
// }

// // export default App




import './App.css';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


import { useState } from 'react';
import Hero from './components/Hero';


function App() {
  

 


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
    
      <div >


<div className="min-h-screen bg-white">
      
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




     
     </div>
  );
}

export default App;

