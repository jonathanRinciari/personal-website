import React from 'react';
import { BACKGROUND, PRIMARY } from '../../theme';


const HomeBanner = ({}) => {
    return (
        <div css={`
        background: ${PRIMARY};
        border-radius: 10px;
        margin-bottom: 2rem;
      `}>
        <h3 css={`text-align: center; color: ${BACKGROUND}; font-size: 2.25vw; `}>
          Software Engineer // Lego Architect
        </h3>
      </div> 
    )
}

export default HomeBanner;