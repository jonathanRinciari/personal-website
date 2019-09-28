import React from 'react';
import { BACKGROUND, PRIMARY } from '../../theme';
import BodyText from '../../components/BodyText';


const HomeBanner = () => {
    return (
        <div css={`
        background: ${PRIMARY};
        border-radius: 10px;
        margin-bottom: 2rem;
      `}>
         <BodyText sizer={1.25} tag={'h3'} color={BACKGROUND} style={{textAlign: 'center', textTransform: 'uppercase'}} altText={true}>
            Software Engineer // Lego Architect
        </BodyText>
      </div> 
    )
}

export default HomeBanner;