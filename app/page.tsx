"use client";

import { useState } from "react";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Menu from "./ui/menu";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col divide-y divide-ash">
      <Header showMenu={{ value: showMenu, setValue: setShowMenu }} />
      {showMenu ? <Menu /> : <Hero />}
    </div>
  );
}
