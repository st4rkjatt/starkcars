import React from 'react';
import './Slider_text_animation.css'

function Slider_text_animation(props) {
    return (
        <>

            <div class="container" >

                <div class="glitch" data-text={props.name}>{props.name}</div>

                <div class="glow">St4rk</div>
            </div>
        </>
    )
}

export default Slider_text_animation;