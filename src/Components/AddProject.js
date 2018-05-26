import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
handleSubmit(e){
  if(this.refs.title.value === ''){
    alert("Cannot be empty");
  }else {
    this.setState({newProject:{
      id: uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function(){
      this.props.addProject(this.state.newProject);
    });
  }
  e.preventDefault();
}

  render() {
    let categoryOpts = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="">
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <label>Title</label>
          <input type="text" ref="title" />
          </div>
          <div>
          <label>category</label>
          <select ref="category">
          {categoryOpts}
          </select>
          </div>
          <br />
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default AddProject;
