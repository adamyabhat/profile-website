import React from 'react';
// import React,{useState} from 'react';
import { AppBar, Toolbar,IconButton } from '@material-ui/core';
import Info from '@material-ui/icons/Info';

const CustomizedToolbar = (props) => {
    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = useState(false);

    const handleMenu = (event) => {
      // setAnchorEl(event.currentTarget);
    };

    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
    return (
        <AppBar position="absolute" >
        <Toolbar style={{backgroundColor:'white'}} >
            <div >
              <IconButton
                onClick={handleMenu}
              >
                <Info />
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
            </div>
        </Toolbar>
      </AppBar>
    )
}

export default CustomizedToolbar