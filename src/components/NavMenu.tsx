export default function NavMenu() {
  return (
    <div>
      <section>
        <div className="navigation" style={{ "display": "none"}}>
          <span id="nav-btn">MENU <i className = "fas fa-bars"></i></span>
        </div>
      </section>
      <section>
        <div className="book-now">
          <a href="#booking">Reserve a Room</a>
          <a href="#contact-form">Contact Us</a>
        </div>
      </section>
    </div>
  );
}