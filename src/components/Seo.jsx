import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({children, title, description, keywords}) => {
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" name="description" content={description}/>
            <meta charSet="utf-8" name="keywords" content={keywords} />
            <title>{title}</title>
        </Helmet>
        {children}
      </>
    )
}

export default SEO;