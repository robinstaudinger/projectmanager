import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Skills from './Components/Skills';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      skills: []
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title: "Portfolio Website",
          category: "Web Design"
        },
        {
          title: "Casino Card Game",
          category: "Software Development"
        },
        {
          title: "Business Website",
          category: "Web Development"
      }

    ],
    skills: [
      "Software Development",
      "Robotics",
      "Artificial Intelligence",
      "Web Development",
      "Management",
      "Problem Solving"
    ]
    });
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects}/>
      <Skills skills={this.state.skills}/>
      </div>
    );
  }
}

export default App;
