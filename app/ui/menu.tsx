export default function Menu() {
  const menuItems = ["_hello", "_about-me", "_projects", "_contact-me"];

  return (
    <ul className="flex flex-col divide-y divide-ash">
      {menuItems.map((item, idx) => (
        <li key={idx} className="p-4 hover:bg-ash">
          {item}
        </li>
      ))}
      <li></li>
    </ul>
  );
}
