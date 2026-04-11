import HeaderContainerNavigationItem from "./item/header__container__navigation__item";


export default function HeaderContainerNavigation() {
  return (
    <div className="header__container__navigation">
        <HeaderContainerNavigationItem link={"#"} text={"Home"} />
        <HeaderContainerNavigationItem link={"#"} text={"About"} />
        <HeaderContainerNavigationItem link={"#"} text={"Projects"} />
    </div>
  );
}
