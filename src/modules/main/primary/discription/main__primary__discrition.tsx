import MainPrimaryDescriptionHiText from "./hi-text/main__primary__discription__hi-text";
import MainPrimaryDescriptionMainText from "./main-text/main__primary__discription__main-text";
import MainPrimaryDescriptionMidleText from "./midle-text/main__primary__discription__midle-text";
import MainPrimaryDescriptionElipse from "./eliple/main__primary__discription__elipse";
import MainPrimaryDescriptionLowText from "./low-text/main__primary__discription__low-text";

export default function MainPrimaryDescription() {
  return (
    <div className="main__primary__discrition">
      <MainPrimaryDescriptionHiText />
      <MainPrimaryDescriptionMidleText />
      <MainPrimaryDescriptionMainText />
      <MainPrimaryDescriptionElipse />
      <MainPrimaryDescriptionLowText />
    </div>
  );
}
