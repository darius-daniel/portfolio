import Footer from "./footer";

export default function Menu() {
  const menuItems = ["_hello", "_about-me", "_projects", "_contact-me"];

  return (
    <div className="flex flex-col border-t border-ash">
      <ul>
        {menuItems.map((item, idx) => (
          <li key={idx} className="p-4 hover:bg-ash border-b border-ash">
            {item}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
