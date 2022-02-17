import React from "react";

function Footer() {
  return (
    <footer class="page-footer">
      <div class="footer-copyright">
        <div class="container center">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
}

export default Footer;
