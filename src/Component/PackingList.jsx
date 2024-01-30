import { useState } from "react";
import { Item } from "../SubCompnent/Item";

export function PackingList({
  items,
  onDeleteItem,
  handeToggleItem,
  restList,
}) {
  const [sortby, Setsortby] = useState("input");

  let sortedItems;

  if (sortby === "input") sortedItems = items;

  if (sortby === "Description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.Description.localeCompare(b.Description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            handeToggleItem={handeToggleItem}
          />
        ))}
      </ul>
      <div className="action">
        <select onChange={(e) => Setsortby(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="Description">Sort by Description</option>
          <option value="packed">Sort by packed stats</option>
        </select>
        <button onClick={restList}>Clear List</button>
      </div>
    </div>
  );
}
