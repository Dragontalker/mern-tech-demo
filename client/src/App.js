import React from 'react';

class App extends React.Component {

  state = {
    title: "",
    body: ""
  }

  render() {

    //JSX
    return (
      <div>
        <h2>Welcome to my App</h2>
        <form>
          <div className="form-input">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={2} 
            />
          </div>
          <div className="form-input">
            <textarea 
              name="body" 
              placeholder="Body"
              cols="30" 
              rows="10" 
              value={this.state.body}
              onChange={2}
            ></textarea>
          </div>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;