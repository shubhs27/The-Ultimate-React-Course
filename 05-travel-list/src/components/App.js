import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  // Lifting state up (to closest common parent of Form and PackingList)
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // Can't do items.push(item) as we will be mutating the items array which is not allowed in react, so create a new array with current items and new one
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
