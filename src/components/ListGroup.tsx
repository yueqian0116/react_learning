//import { MouseEvent } from "react";

// { items: [], heading: string }

// props are immutable
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

import { use, useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["New York", "SF", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState("");

  //   items = [];

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event, "clicked");

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {/* {items.length === 0 && <p>No item found</p>} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
