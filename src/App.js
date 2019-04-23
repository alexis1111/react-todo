import React from "react";

import "./App.scss";
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {
  return (
    <main className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-6">
          <div className="todolist">
            <section className="todolist__title">
              <h3>
                Todo app <small className="text-muted">+ React + Redux</small>
              </h3>
            </section>
            <Form />
            <hr />
            <List />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
