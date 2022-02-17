import React from "react";

function Header() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#/" class="brand-logo">
          Online Shop
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#/">Logo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
