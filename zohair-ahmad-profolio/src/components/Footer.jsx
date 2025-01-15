import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Made by Zohair Ahmad</p>
    </footer>
  );
}

export default Footer;
