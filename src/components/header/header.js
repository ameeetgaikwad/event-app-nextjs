import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header>
      <nav>
        <img />

        <Link href="/">Home </Link>
        <Link href="/events">Events </Link>
        <Link href="/aboutUs">About Us </Link>
      </nav>
    </header>
  );
}

export default Header;
