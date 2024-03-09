function HoverTimer() {
  const items: any[] = [{ label: "foo" }, { label: "bar" }, { label: "baz" }];
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
          <li key={item.label} style={{ backgroundColor: item.color }}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HoverTimer;
