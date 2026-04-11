export default function MainSkillsCardsItem() {
  return (
    <div className="main__skills__cards__item">
      <img
        src="./assets/star.png"
        alt="image"
        className="main__skills__cards__item__image"
      />
      <div className="main__skills__cards__item__discription">
        <p className="main__skills__cards__item__discription__title">
          CIB on the Mobile
        </p>
        <p className="main__skills__cards__item__discription__subtitle">
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
        <a className="main__skills__cards__item__discription__button">
          LEARN MORE
        </a>
      </div>
    </div>
  );
}
