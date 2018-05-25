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

  componentWillMount(){
    this.setState({
      projects: [
        {
          title: "Biz Site",
          category: 'Web Design'
        },
        {
          title: "Social Site",
          category: 'Mobile Development'
        },
        {
          title: "eCommerce shopping cart",
          category: 'Web Development'
        },
      ]
    })
  }

  handleAddProject(project){
    const { projects } = this.state;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
     const { projects } = this.state;
    return (
      <div className="">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={ projects } />
      </div>
    );
  }
}

export default App;
