import React from 'react'
import Button from '@material-ui/core/Button'
import Main from '../containers/Main'

const LandingPage = () => {
    const styles = {
        mainDivStyle:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
            height:'100vh'
        },
        headerStyle:{
            fontSize: '4.5em',
            color: 'red'
        },
        subTextStyle:{
            fontSize: '1em',
            color: 'red',
        },
        nameStyle:{
        },
        buttonsStyle:{
            color:'red',
            backgroundColor:'white'
        }
    }
    return (
        <Main
        description={"Adamya Bhat's personal website. "}
      >
        <div style={styles.mainDivStyle}>
            <h1 style={styles.headerStyle}> WELCOME, </h1>
            <h3 style={styles.subTextStyle}>This website that contains information about, </h3>
            <h3 style={styles.nameStyle}>Adamya Bhat A</h3>
            <Button style={styles.buttonsStyle}> Know more... </Button>
        </div>
        </Main>
    )
}

export default LandingPage