import { useState } from "react";
interface Item {
  label?: string;
  color?: string;
}
function HoverTimer() {
  const [item, setItem] = useState<Item | null>(null);
  const items: Item[] = [{ label: "foo" }, { label: "bar" }, { label: "baz" }];
  const itemsMappedToColors = items.map((item) => ({
    ...item,
    color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`,
  }));

  return (
    <div className="hover-container">
      <ul>
        {itemsMappedToColors.map((item) => (
          <li
            key={item.label}
            style={{ backgroundColor: item.color }}
            onMouseEnter={(e) => setItem(item)}
            onMouseLeave={() => setItem(null)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HoverTimer;
