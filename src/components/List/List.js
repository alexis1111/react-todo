import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item/Item';
import { completeTask, deleteTask } from './../../redux/actions/index';

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    completeTask: (taskId) => dispatch(completeTask(taskId)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId))
  };
}

export class ListComponent extends Component {
  setTaskAction = (action, id) => {
    (action === 'complete') ? this.props.completeTask(id) : this.props.deleteTask(id);
  }

  render() {
    return (
      <ul className="list-unstyled">
        {
          this.props.tasks.map((task, index) => (
            <Item 
              key={index}
              id={index}
              description={task.description}
              completed={task.completed}
              completeTask={() => this.setTaskAction('complete', index)}
              deleteTask={() => this.setTaskAction('delete', index)}
              />
          ))
        }
      </ul>
    );
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);

export default List;