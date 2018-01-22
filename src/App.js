import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  ComponentWillMount(){
    this.setState({
      projects: [
        {
          title: "Business Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "Business Website",
          category: "Web Development"
      }

      ]
    });
  }

  handleAddProject(project){
    console.log(project);
  }
  render() {
    return (
      <div className="App">
      <AddProject addproject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
