import React from 'react'
import logo from '../../assets/kayla.svg'
import {makeStyles} from '@mui/styles'

const logoStyle = makeStyles({
    imgStyle:{
        width: '150px',
        display: 'block',
        margin: '0 auto',

    }

})

const Logo = ()=>{
    const style = logoStyle();
    return(
        <div>
            <img className={style.imgStyle} src={logo} alt="SVG logo image"/>
        </div>



    );
}

export default Logo