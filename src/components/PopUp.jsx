/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const  PopUpPage = () => {
    return (
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>

    )
}

export default PopUpPage