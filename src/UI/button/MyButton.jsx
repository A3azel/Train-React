import React from 'react';
import myStyles from './MyButtonStyles.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={myStyles.myByt}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;