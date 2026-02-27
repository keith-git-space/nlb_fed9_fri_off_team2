document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer class="footer">
      <div class="footer-container">

        <div class="footer-brand">
          <h2>Mix Shades</h2>
          <p>Helping beginner artists master the art of color mixing.</p>
        </div>

        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="color-pencils.html">Color Pencils</a></li>
            <li><a href="watercolor.html">Watercolor</a></li>
            <li><a href="glass.html">Glass</a></li>
            <li><a href="../pages/page5.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Contact</h3>
          <p>Email: hello@mixshades.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>New York, NY</p>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© 2026 Mix Shades. All rights reserved.</p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footer);
});