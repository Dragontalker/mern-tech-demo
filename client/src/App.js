import React from 'react';

class App extends React.Component {

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
              value=""
              onChange={} 
            />
          </div>
          <div className="form-input">
            <textarea 
              name="body" 
              cols="30" 
              rows="10" 
              value=""
              onChange={}
            ></textarea>
          </div>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;