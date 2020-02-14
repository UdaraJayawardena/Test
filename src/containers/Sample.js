import React from 'react';
import './Sample.css';

const Sample = (props) => {
    const classVal = props.value ? 'uj' : '';
    return (
        <div>
            <h2 className={`${classVal} font_size`}>Udara</h2>
        </div>
    );

}
export default Sample
