import MainSkillsCardsItem from "./item/main__skills__cards__item";
export default function MainSkillsCards() {
  return (
    <div className="main__skills__cards">
        {Array.from({ length: 4 }).map((_, i) => (
            <MainSkillsCardsItem key={i} />
        ))}
    </div>
  );
}
