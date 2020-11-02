import React, { Component } from "react";
import InstructorItem from "./InstructorItem";

export default class App2 extends Component{
    render(){
        const instList = this.props.instructors.map(instructor => {
            return (
                <InstructorItem
                    key={instructor.id}
                    name={instructor.name}
                    avatar={instructor.avatar}
                    hobby={instructor.hobby}
                />
            );
        });

        return(
            <div>
                <h1>List of instructors: </h1>
                <ul>{instList}</ul>
            </div>
        );
    }
}

App2.defaultProps = {
    instructors: [
      {
        id: 0,
        name: "Michael",
        avatar:
          "https://www.rithmschool.com/content/react_fundamentals/michael.jpg",
        hobby: "hiking"
      },
      {
        id: 1,
        name: "Matt",
        avatar: "https://www.rithmschool.com/content/react_fundamentals/matt.jpg",
        hobby: "math"
      },
      {
        id: 2,
        name: "Elie",
        avatar: "https://www.rithmschool.com/content/react_fundamentals/elie.jpg",
        hobby: "cello"
      },
      {
        id: 3,
        name: "Whiskey",
        avatar:
          "https://www.rithmschool.com/content/react_fundamentals/whiskey.jpg",
        hobby: "napping"
      }
    ]
  };