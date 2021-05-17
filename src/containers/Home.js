import React, { Fragment, useState } from 'react'
import {Avatar} from "@material-ui/core";
import adam from '../assets/adam.png'
import CustomizedToolbar from '../components/CustomizedToolbar';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import IconButton from '@material-ui/core/IconButton';

const divStyle = {
    // paddingTop:'96px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    backgroundSize: 'cover',
    backgroundColor: '#0056ff5c',
    height:'100vh'
}

const Home = () => {
    const [showAdditionalInfo,toggleAdditoionalInfo]=useState(false)
    
    const handleClick = () => {
        toggleAdditoionalInfo(!showAdditionalInfo)
    }

    return (
        <Fragment>
            <CustomizedToolbar />
            <div style={divStyle}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <Avatar src={adam} style={{height: '250px', width: '250px', }}/>
                        { !showAdditionalInfo && 
                        <div style={{display:'flex', flexDirection:'row',justifyContent: 'center',
                        alignItems: "center"}}>
                            <h2>ADAMYA BHAT</h2>
                            <IconButton onClick={handleClick}> 
                                <ControlPointIcon />
                            </IconButton>
                        </div>}
                    </div>  
                    { showAdditionalInfo &&
                    <div style={{display:'flex', flexDirection:'row',justifyContent: 'center',
                    alignItems: "center"}}>
                        <IconButton onClick={handleClick}> 
                                <ControlPointIcon />
                            </IconButton>
                        <div style={{display:'flex', flexDirection:'row'}}>
                                <label>
                                    Contact : 8861356506
                                </label>
                        </div>
                    </div> 
                    }
            </div>
        </Fragment>
    )
}

export default Home