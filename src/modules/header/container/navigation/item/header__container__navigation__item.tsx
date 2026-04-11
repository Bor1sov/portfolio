export default function HeaderContainerNavigationItem({link, text}: {link: string, text: string}) {
  return (
    <a
      href={link}
      target="_blank"
      className="header__container__navigation__item"
    >
      {text}
    </a>
  );
}