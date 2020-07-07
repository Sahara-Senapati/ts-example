import * as React from 'react';
import Form from "./Form";
import Card from "./Card";
import Card2 from "./Card2";

class App extends React.Component {
  public render() {
    return (
    <div className="App">
     <Form text="Log in"/>
     <Card/>
     <Card2/>
    </div>
  );
}
}
export default App;
