import HeaderContainerLogo from "./logo/header__container__logo";
import HeaderContainerNavigation from "./navigation/header__container__navigation";

export default function HeaderContainer() {
  return (
    <div className="header__container">
      <HeaderContainerLogo />
      <HeaderContainerNavigation />
    </div>
  );
}
