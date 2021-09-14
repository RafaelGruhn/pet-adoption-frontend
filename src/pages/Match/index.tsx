import React from 'react';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ImgMediaCard from '../../components/card';
import Footer from '../../components/footer';

import NavBar from '../../components/navbar';
import api from '../../service/api';

interface IState {
  data: Array<Object>;
}

export default class Match extends React.Component{

  state = {
    data: null
  }

  componentDidMount() {
    api.get('pet?accountStatus=active')
      .then((response) => {
        let cards = []
        console.log(response)
        const data = response.data
        for (let i = 0; i < data.length; i++){
          console.log(data[i])
          let pet_image = ""
          if (data[i].photos.length > 0){
            pet_image = data[i].photos[0].url? data[i].photos[0].url!! : ''
          }
          const pet_name = data[i].name? data[i].name!! : 'Dog'
          // const pet_specie = data[i].specie? data[i].specie!! : 'Vira-Lata'
          // const pet_breed = data[i].breed? data[i].breed!! : 'S/I'
          const pet_size = data[i].size? data[i].size!! : 'S/I'
          const estimatedAge = data[i].estimatedAge? data[i].estimatedAge!! : 'S/I'
          const pet_description = data[i].description? data[i].description!! : ''
          cards.push(<ImgMediaCard image={ pet_image } name={ pet_name } description={ pet_description } height={ pet_size } estimated_age={ estimatedAge }/>)
        }
        this.setState({ data: cards})
      })
  }

  render () {

    return (
      <div className="content">
        <Helmet>
          <link rel="stylesheet" href="css/bootstrap.min.js" />
          <link rel="stylesheet" href="css/home.css" />
        </Helmet>
        <NavBar/>
        <div className="body">
          <Row>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              {
                this.state.data
                ? this.state.data
                : 'carregando'
              }
            </div>
            <div className="col-md-2"></div>
          </Row>
        </div>
        <Footer/>
      </div>
    );
  }

}