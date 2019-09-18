import React from 'react';
import FooterNavBar from './FooterNavBar';
import BodyText from './BodyText';

const Footer = ({}) => {
    return (
        <>
        <FooterNavBar />
        <div css={`display: flex; align-items: center; justify-content: center; margin: 1rem 0;`}>
            <BodyText hover={null}>
                © 2019 Jonathan Rinciari
            </BodyText>
        </div>
        </>
    )
}

export default Footer;