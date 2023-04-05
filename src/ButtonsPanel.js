import React from "react";
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="buttons-panel">
            <button type="submit" onClick={() => {props.buttonMethod('admins')}}>Show only admins</button>
            <button type="submit" onClick={() => {props.buttonMethod('users')}}>Show only users</button>
            <button type="submit" onClick={() => {props.buttonMethod('all')}}>Show all</button>
        </div>
    );
}

export default ButtonsPanel;