import React from 'react';

const Scroll = ( props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid grey', height: '1000px', padding: '2em', margin: '2em 0 0 0'}}>
            {props.children}
        </div>
    );
}

export default Scroll;