import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTask } from './../../redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => dispatch(addTask(task))
  };
}

class FormComponent extends Component {
  state = {
    task: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.addTask(this.state.task);
    this.setState({
      task: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-lg-10 col-md-9">
            <input
              type="text"
              className="form-control"
              id="task"
              value={this.state.task}
              onChange={this.handleChange}
              placeholder="Add the tasks here, or not, i'm just an text input"
            />
          </div>
          <div className="col-lg-2 col-md-3">
            <button type="submit" className="btn btn-primary btn-block">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
  
};

const Form = connect(null, mapDispatchToProps)(FormComponent);

export default Form;