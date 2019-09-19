import React from 'react';
import Gitlab from '../assets/images/gitlab.png';
import Forest from '../assets/images/forest.jpg';

const Hero = ({ }) => {
    return (
        <img css={`justify-self: center; max-height: 580px; width: 80%; max-width: 400px; min-height: 350px; min-width: 250px;`} src={Gitlab} alt="Profile Picture" />
    )
}

export default Hero;