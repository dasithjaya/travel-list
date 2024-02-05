const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chargers", quantity: 7, packed: true },
];

export default function TestApp() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
        <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      return <h1>🌴 Far Away 💼</h1>;
    </div>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Test</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item.." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div>
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> 💼 You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}
