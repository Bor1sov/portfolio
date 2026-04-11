export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Contact</h2>
      <p className="footer__information">
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect.
        <br />
        <br />
        <br />
        nd.5nd@yandex.ru
      </p>
      <div className="footer__social-icon">
        <a href="#" target="_blank" className="footer__social-icon__item">
          <img
            src="./assets/ig.png"
            alt="instagram"
            className="footer__social-icon__item__img"
          />
        </a>
        <a href="#" target="_blank" className="footer__social-icon__item">
          <img
            src="./assets/ball.png"
            alt="ball"
            className="footer__social-icon__item__img"
          />
        </a>
        <a href="#" target="_blank" className="footer__social-icon__item">
          <img
            src="./assets/google.png"
            alt="google"
            className="footer__social-icon__item__img"
          />
        </a>
      </div>
    </footer>
  );
}
