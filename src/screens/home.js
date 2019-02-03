import React, { Component } from "react";
import { Typography, Grow, Button } from "@material-ui/core";
import "./style.css";
import Icons from "../components/NetworkIcons";
import Data from "../static/data.json";

class Home extends Component {
  state = {
    transition: true
  };
  render() {
    const { transition } = this.state;
    return (
      <div className="container">
        <Grow
          in={transition}
          style={{ transformOrigin: "0 0 0" }}
          {...(transition ? { timeout: 800 } : {})}
        >
       
          <div className="main-profile">
          <Typography
              variant="h2"
              gutterBottom
              align="center"
              color="inherit"
            >
              {Data.profile[0].name} <br />
              
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              color="inherit"
            >
              {Data.profile[0].title} <br />
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              color="inherit"
            >
              {Data.profile[0].summary} <br />
             
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              color="inherit"
            >
              <Icons />
            </Typography>
            <div className="btn_portfolio">
            <Button  >
        Secondary
      </Button>
            </div>
            
          </div>
        </Grow>
      </div>
    );
  }
}

export default Home;
