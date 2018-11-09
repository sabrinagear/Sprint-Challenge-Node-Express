import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    axios
      .get("https://sprint-lambda-node.herokuapp.com/api/projects")
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ul className="list">
          {this.state.projects
            .map(project => {
              return (
                <div classname="project-card">
                  <Link to={`/${project.id}`} id={project.id} key={project.id}>
                    {project.name}
                  </Link>
                  ;
                </div>
              );
            })
            .reverse()}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
