import { useState } from "react";

export function Form({ onAddItem }) {
  let Number = Array.from({ length: 20 }, (_, i) => i + 1);
  // Number = [1, 2, 3, 4, 5, 6];
  const id = Math.floor(Math.random() * 100);

  const [Description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!Description) return;

    const NewItem = { Description, quantity, packed: false, id };
    onAddItem(NewItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form " onSubmit={handleSubmit}>
      <h3>What do you need for you trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Number.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
