import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';

import NavBar from '../../components/navbar';

export default function Match() {

  return (
      <div className="content">
        <Helmet>
          <link rel="stylesheet" href="css/bootstrap.min.js" />
          <link rel="stylesheet" href="css/home.css" />
        </Helmet>
        <NavBar/>
        <div className="body">
          
        </div>
        <Footer/>
      </div>
    );
}