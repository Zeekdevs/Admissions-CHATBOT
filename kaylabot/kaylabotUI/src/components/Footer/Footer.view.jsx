

import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import { useNavigate } from 'react-router-dom';
import './Header.style.css'

const HeaderStyles = makeStyles({
    rootH:{
        display: 'block',
        width: '80%',
        minHeight: '9vh',
        margin: '0 auto',


    },

    btn:{
        backgroundColor: '#f94144',
        border: 'none',
        marginLeft: '20px',
        padding: '5px',
        borderRadius: '4px',
        opacity: '0.9',
    },

    container:{
        textAlign: 'center',
    },

    appbar:{
        background: 'none',
        fontFamily: 'Nunito',
        fontWeight: 'bold',

    },


    appbarTitle:{
        float: 'left',
        fontWeight: '700',
        color: '#fff',


    },



    icon:{
        display: 'block',
        color: '#fff',
        float: "right",
        marginTop:"0px",


    },
    h1span:{
        color: '#f94144',
    },
    clr:{
        clear: 'both',
    },
})



function HeaderView() {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate();
    const classesH = HeaderStyles();
    return (
        <nav style={{background: 'none', position:'static', paddingTop:'20px'}} className={classesH.rootH}>
            <h1 id='appbarLogo' className={classesH.appbarTitle}>
                <a style={{
                    color: '#fff',
                    fontSize:'1em',
                }} href="" onClick={()=>{navigate('/')}}>
                    e<span className={classesH.h1span}>Club</span>.
                </a>
            </h1>

            <div className={classesH.icon}>
                <SortIcon style={{cursor:'pointer'}} onClick={e => setIsActive(!isActive)} />
            </div>




            <div className={classesH.clr}></div>
            {isActive &&(
                <div className="dropdow">
                    <div className="dropItem">
                        <button id='btnstyle' href=""   onClick={()=>{navigate('/signin')}}>Sign In </button>
                    </div>
                    <div className="dropItem">
                        <button id='btnstyle' href=""  onClick={()=>{navigate('/regas')}}>Register</button>
                    </div>
                </div>
            )}
        </nav>



    );
}

export default HeaderView;