import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      answer: "",
    };
  }

  flameGames = (s1, s2) => {
    for (let i = 0; i < s1.length; i++) {
      var ch1 = s1.charAt(i);
      for (let j = 0; j < s2.length; j++) {
        var ch2 = s2.charAt(j);
        if (ch1 == ch2) {
          s1 = s1.substring(0, i) + s1.substring(i + 1, s1.length);
          s2 = s2.substring(0, j) + s2.substring(j + 1, s2.length);
          break;
        }
      }
    }

    // var s3 = s1 + s2;
    // console.log(s3, s3.length);
    // for (let i = 0; i < s3.length; i++) {
    //   var ch1 = s3.charAt(i);
    //   for (let j = i + 1; j < s3.length; j++) {
    //     var ch2 = s3.charAt(j);
    //     if (ch1 == ch2) {
    //       s3 = s3.substring(0, j) + s3.substring(j + 1, s3.length);
    //       break;
    //     }
    //   }
    //   console.log(s3);
    // }

    var n = s1.length;
    var m = s2.length;
    var a = n + m;

    var finalAnswer = "";
    if (a % 6 == 1) {
      finalAnswer = "Friends";
    } else if (a % 6 == 2) {
      finalAnswer = "Love";
    } else if (a % 6 == 3) {
      finalAnswer = "Affection";
    } else if (a % 6 == 5) {
      finalAnswer = "Enemy";
    } else if (a % 6 == 0) {
      finalAnswer = "Siblings";
    } else {
      finalAnswer = "Marriage";
    }
    this.setState({
      answer: finalAnswer,
    });
  };
  relationshipButtonClick = () => {
    if (this.state.firstName != "" && this.state.secondName != "") {
      this.flameGames(this.state.firstName, this.state.secondName);
      //   console.log(this.state.firstName, this.state.secondName);
    } else {
      this.setState({
        answer: "Please Enter valid input",
      });
    }
  };

  clearButtonClick = () => {
    this.setState({
      firstName: "",
      secondName: "",
      answer: "",
    });
  };
  render() {
    return (
      <div id="main">
        <input
          type="text"
          value={this.state.firstName}
          data-testid="input1"
          onChange={(event) => {
            this.setState({ firstName: event.target.value });
          }}
        />
        <input
          type="text"
          data-testid="input2"
          value={this.state.secondName}
          onChange={(event) => {
            this.setState({ secondName: event.target.value });
          }}
        />
        <button
          data-testid="calculate_relationship"
          onClick={this.relationshipButtonClick}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={this.clearButtonClick}>
          Clear
        </button>
        <h3 data-testid="answer">{this.state.answer}</h3>
      </div>
    );
  }
}

export default App;
