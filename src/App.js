import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Biz Site",
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: "Social Site",
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: "eCommerce shopping cart",
          category: 'Web Development'
        },
      ]
    })
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
     const { projects } = this.state;
    return (
      <div className="">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={ projects } onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
