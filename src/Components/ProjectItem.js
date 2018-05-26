import React, { Component } from 'react';

class ProjectItem extends Component {
 deleteProject() {
   console.log('test');
 }

  render() {
    return (
      <li className="project">
      <strong>{this.props.project.title}: </strong>
      {this.props.project.category}
      <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

      </li>
    );
  }
}

export default ProjectItem;
