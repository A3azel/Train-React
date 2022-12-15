import React from 'react';
import myStyles from './MyInputStyles.module.css';

const MyInput = React.forwardRef((props,ref) => {
    return (
        <input className={myStyles.myInput} {...props}/>
    );
});

export default MyInput;