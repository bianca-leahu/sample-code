import React from "react";
import ReactDOM from "react-dom";
import PopularContainer from './containers/PopularLayout/PopularContainer'


const App = () => {
  return (
    <div>
      <PopularContainer />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));