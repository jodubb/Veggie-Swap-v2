import React, { Component } from "react";
import classnames from "classnames";
import GridComponent from "./GridComponent";
import WarningMessage from "../WarningMessage";
import GreyBox from "../../images/GreyBox.svg";
import styles from "./grid.module.css";
import CONSTANTS from "../../constants";
import backgrdimg from "./backgrd.jpg";
import logo from "./veggieswap.png";
import veggiemain from "./veggiemain.jpg";
import veggiehand from "./handwithveggies.jpg";
import carrotswoman from "./womanwithcarrots.jpg";



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

        <div className="w3-container">
            <div className="w3-display-container mySlides">
                <img src={veggiemain} style={{width:'100%'}} alt={"this is my main veggie"}></img>
                <div className="w3-display-middle w3-container w3-padding-32">
                    <span className="w3-white w3-padding-large w3-animate-bottom">TRADE VEGGIES</span>
                </div>
            </div>
            <div className="w3-display-container mySlides">
                <img src= {veggiehand} style={{width:'100%'}} alt={"this is my hand veggie"}></img>
                <div className="w3-display-middle w3-container w3-padding-32">
                    <span className="w3-white w3-padding-large w3-animate-bottom">MEET YOUR NEIGHBORS</span>
                </div>
            </div>
            <div className="w3-display-container mySlides">
                <img src= {carrotswoman} style={{width:'100%'}} alt = {"this is my woman"}></img>
                <div className="w3-display-middle w3-container w3-padding-32">
                    <span className="w3-white w3-padding-large w3-animate-bottom">GROW A COMMUNITY</span>
                </div>
            </div>
          
            </div>

            <div>
            <div class="w3-container w3-dark-grey w3-padding w3-xlarge">
                <div className="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i>
                </div>
                <div className="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i>
                </div>

                <div className="w3-center">
                    <span className="w3-tag demodots w3-border w3-transparent w3-hover-white"
                        onclick="currentDiv(1)"></span>
                    <span className="w3-tag demodots w3-border w3-transparent w3-hover-white"
                        onclick="currentDiv(2)"></span>
                    <span className="w3-tag demodots w3-border w3-transparent w3-hover-white"
                        onclick="currentDiv(3)"></span>
                </div>
            </div>
        







            </div>
          
       
         
         

          
       

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
