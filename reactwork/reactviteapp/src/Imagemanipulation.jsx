import React, { useState } from 'react';
import watch from './watch.jpg';

function Imagemanipulation() {
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [rotateimg, setRotate] = useState(30);

    function EnhanceHeight() {
        setHeight(height + 30);
    }

    function EnhanceWidth() {
        setWidth(width + 30);
    }

    function Rotateimg() {
        setRotate(rotateimg + 30);
    }

    return (
        <div style={{ border: '2px solid red', height: '300px', width: '400px', marginLeft: '250px', backgroundColor: '#ff9999' }}>
            <div style={{ marginLeft: '100px', marginTop: '20px', backgroundColor: "green", border: "1px solid black", height: '200px', width: '200px' }}>
                {/* Correct template literal usage */}
                <img src={watch} style={{ transform: `rotate(${rotateimg}deg)` }} height={height} width={width} alt='cat image' />
            </div>
            <div style={{ marginTop: "100px" }}>
                <button id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
                <button id='btn' onClick={EnhanceWidth}>EnhanceWidth</button>
                <button id='btn' onClick={Rotateimg}>Rotate</button>
                <button id='btn'>ChangeBackground</button>
            </div>
        </div>
    );
}

export default Imagemanipulation;

