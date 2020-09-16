import React from 'react';
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
      <h1> COVID 19 Tracker App</h1>
      <FormControl className = "app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Hello World</MenuItem>
          <MenuItem value="worldwide">Yooooooo</MenuItem>
          

        </Select>
      </FormControl> 
      </div>
     
      {/* todo: header*/}
      {/* todo:Title + Select input dropdown field */}


      {/* todo: info box 1 */}
      {/* todo: info box 2 */}
      {/* todo: info box 3 */}

      {/* todo: Table*/}

      {/* todo: Graph*/}

      {/* todo: Map */}
    </div>
  );
}

export default App;
