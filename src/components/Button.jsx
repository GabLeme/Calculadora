import React from 'react';
import './Button.css';

export default props =>

    //Dependendo da ação o botão receberá X classe.
    <button
        onClick={e => props.click && props.click(props.label)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>