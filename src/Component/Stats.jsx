export function Stats({ items }) {
  console.log(items.length);
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percntage = Math.round((numPacked / numItem) * 100);

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percntage === 100
          ? "toy got everything! Ready to go"
          : `you have ${numItem} itmes on your list , and you already packed
${numPacked} ${percntage}% `}
      </em>
    </footer>
  );
}
