
export default function Header() {
    return(
              <header className="header">
        <div className="header__container">
          <img
            src="assets/logo.png"
            alt="logo"
            className="header__container__logo"
          />
          <div className="header__container__navigation">
            <a
              href="#"
              target="_blank"
              className="header__container__navigation__item"
            >
              Home
            </a>
            <a
              href="#"
              target="_blank"
              className="header__container__navigation__item"
            >
              About
            </a>
            <a
              href="#"
              target="_blank"
              className="header__container__navigation__item"
            >
              Projects
            </a>
          </div>
        </div>
      </header>
    )
}