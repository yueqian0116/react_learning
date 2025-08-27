// import Message from "./Message"
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  // let items = ["New York", "SF", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleClick = () => {
    setAlertVisibility(true);
    console.log("clicked");
  };

  const handleClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={handleClose} color="success">
          This is an alert
        </Alert>
      )}{" "}
      <br />
      <Buttons color="success" onClick={handleClick}>
        Click meee
      </Buttons>
      <TodoList />
    </div>
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
  );
}

export default App;
