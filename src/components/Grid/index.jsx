﻿import React, { Component } from "react";
// import classnames from "classnames";
import GridComponent from "./GridComponent";
import WarningMessage from "../WarningMessage";
import GreyBox from "../../images/GreyBox.svg";
// import styles from "./grid.module.css";
import CONSTANTS from "../../constants";
import backgrdimg from "./backgrd.jpg";
import logo from "./veggieswap.png";
import veggiemain from "./veggiemain.jpg";
import veggiehand from "./handwithveggies.jpg";
import carrotswoman from "./womanwithcarrots.jpg";
import { Slide } from 'react-slideshow-image';


// slideshow properties
const slideImages = [
  veggiemain,
  veggiehand,
  carrotswoman
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
 
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }

}

const slideStyle = {
  height:200
}
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`,
                        'height': 500,
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',
                      
        }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide" style={slideStyle}>
          <div style={{'backgroundImage': `url(${slideImages[1]})`,
                      'height':500,
                      'background-repeat': 'no-repeat',
                     
                      'background-size': 'cover',
                      
        }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide" style={slideStyle}>
          <div style={{'backgroundImage': `url(${slideImages[2]})`,
                      'height':500,
                      'background-size': 'cover',
                      'background-repeat': 'no-repeat',
                      'object-fit': 'fill',
        }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridTextAssets: [{ description: "", header: "", id: 0 }],
      WarningMessageOpen: false,
      WarningMessageText: ""
    };

    this.handleWarningClose = this.handleWarningClose.bind(this);
  }

  // Get the text sample data from the back end
  componentDidMount() {
    fetch(CONSTANTS.ENDPOINT.GRID)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result => this.setState({ gridTextAssets: result }))
      .catch(error =>
        this.setState({
          WarningMessageOpen: true,
          WarningMessageText: `Request to get grid text failed: ${error}`
        })
      );
  }

  handleWarningClose() {
    this.setState({
      WarningMessageOpen: false,
      WarningMessageText: ""
    });
  }

  render() {
    const {
      gridTextAssets,
      WarningMessageOpen,
      WarningMessageText
    } = this.state;
    return (
      <main id="mainContent">
        <div className= "text-center" style = {{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            padding: 50,
            margin: 20,
            
          }}>

        </div>
  


  
            <Slideshow>

            </Slideshow>
            
       



           



          
          
       
         
         

          
       

        <div className="container" style= {{
          backgroundImage: `url(${backgrdimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="row justify-content-center py-5">
            <h1>Bootstrap Grid Template</h1>
          </div>

          <div className="row justify-content-around text-center pb-5">
            {gridTextAssets.map(textAssets => (
              <GridComponent
                key={textAssets.id}
                header={textAssets.title}
                description={textAssets.shortDescription}
                image={GreyBox}
              />
            ))}
          </div>
        </div>
        <WarningMessage
          open={WarningMessageOpen}
          text={WarningMessageText}
          onWarningClose={this.handleWarningClose}
        />
      </main>
    );
  }
}
