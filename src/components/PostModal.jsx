import React from 'react';
import myModal from '../styles/modal.module.css'
const PostModal = ({children, visible, srtVisible}) => {

    const rootClasses = [myModal.myModal];

    if(visible){
        rootClasses.push(myModal.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => srtVisible(false)}>
            <div className={myModal.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default PostModal;