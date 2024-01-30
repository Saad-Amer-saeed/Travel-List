import { Logo } from "./Component/Logo";
import { Form } from "./Component/Form";
import { PackingList } from "./Component/PackingList";
import { Stats } from "./Component/Stats";

import { useState } from "react";

function App() {
  const [items, setItem] = useState([]);
  function handelAddItems(item) {
    setItem((items) => [...items, item]);
  }
  function HandelDeletedItem(id) {
    setItem((prevvalue) => prevvalue.filter((item) => item.id !== id));
  }

  function handeToggleItem(id) {
    setItem((prevvalue) =>
      prevvalue.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function restList() {
    setItem([]);
  }

  return (
    <>
      <Logo></Logo>
      <Form onAddItem={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItem={HandelDeletedItem}
        handeToggleItem={handeToggleItem}
        restList={restList}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
