import React, { Fragment, useState } from 'react'
import {Avatar} from "@material-ui/core"
import adam from '../assets/adam.png'
import gmail from '../assets/gmail.svg'
import insta from '../assets/instagram.svg'
import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import Identification from '../assets/identification.svg'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import Divider from '@material-ui/core/Divider'


const Home = () => {
    const [showAdditionalInfo,toggleAdditoionalInfo]=useState(false)

    const styles = {
        columnFlex:{
            display:'flex',
            flexDirection:'column'
        },
        avatar:{
            marginTop:'128px', 
            height: '250px', 
            width: '250px'
        },
        links:{
            display:'flex', 
            flexDirection:'row', 
            padding:'36px 0px 0px 72px',
            gap: '12px'
        }
    }

    const socialLinks = [
        {
            icon:gmail,
            name:'gmail',
            link:'mailto:bhatadamya@gmail.com'
        },
        {
            icon:linkedin,
            name:'linkedin',
            link:'https://www.linkedin.com/in/adamya-bhat/'
        },
        {
            icon:git,
            name:'git',
            link:'https://github.com/adamyabhat'
        },
        {
            icon:insta,
            name:'insta',
            link:'https://www.instagram.com/__mercury_/'
        }        
    ]
    
    const handleClose = () => {
        toggleAdditoionalInfo(false)
    }

    return (
        <Fragment>
                    <div style={styles.columnFlex}>
                        <Avatar src={adam} style={styles.avatar}/>                      
                        <h2 style={{paddingLeft:'24px'}}>ADAMYA BHAT A</h2>      
                        <h4 style={{marginBlock: 'unset', marginInlineStart:'48px'}}>Full Stack Developer</h4>
                        <IconButton onClick = {() => toggleAdditoionalInfo(true)}>
                            <img src={Identification} alt="more" width="30" height="30"/>
                        </IconButton>
                        <Dialog 
                            onClose={handleClose} 
                            open={showAdditionalInfo}>
                            <DialogTitle style={{backgroundColor: '#2e3038bd', color: 'white'}} >
                                <span style={{fontWeight: 'bold'}}>Contact Details </span>
                                <InfoTwoToneIcon style={{fontSize:'large', color:'black'}} />
                            </DialogTitle>
                            <Divider />
                            <DialogContent  style={{height:'200px', width:'320px'}}>
                                <div style={styles.columnFlex}>
                                    <span style={{padding:'24px 0px 0px 32px'}}>Mobile : 8861356506</span>
                                    <span style={{padding:'12px 0px 0px 32px'}}>Adress : #26, Near KTM showroom,</span>
                                    <span style={{padding:'6px 0px 0px 96px'}}>Mekhri Circle, Sadashivanagar,</span>
                                    <span style={{padding:'6px 0px 0px 96px'}}>Bangalore - 80</span>
                                </div>
                                <div style={styles.links}>
                                    {socialLinks.map((socialMedia) => {
                                        return (<a href={socialMedia.link}>
                                            <img src={socialMedia.icon} width="30" height="30" alt={socialMedia.name}/>
                                        </a>)
                                    })}
                                </div>
                            </DialogContent>
                            <br />
                        </Dialog>
                    </div>
        </Fragment>
    )
}

export default Home