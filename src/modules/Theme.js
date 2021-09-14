import React from 'react'
import './Cap.css'

function Themes(props) {
    function blue(e) {
        props.bgTheme === 'dark' ? document.body.style.background = '#7158e2' : alert('Please Enable dark mode');
    }
    function black(e) {
        props.bgTheme === 'dark' ? document.body.style.background = '#2c2c54' : alert('Please Enable dark mode');
    }
    function darkGrey(e) {

        props.bgTheme === 'dark' ? document.body.style.background = '#aaa69d' : alert('Please Enable dark mode');
    }

    return (
        <div className="themes">
            <div onClick={blue} id="blue"></div>
            <div onClick={black} id="black"></div>
            <div onClick={darkGrey} id="darkGrey"></div>
        </div>
    );
}

export default Themes;