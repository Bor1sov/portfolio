import MainPrimaryPicturesArrow from "./arrow/main__primary__pictures__arrow";
import MainPrimaryPicturesAvatar from "./avatar/main__primary__pictures__avatar";
import MainPrimaryPicturesGarientBox from "./garient-box/main__primary__pictures__garient-box";


export default function MainPrimaryPictures() {
  return (
    <div className="main__primary__pictures">
      <MainPrimaryPicturesArrow />
      <MainPrimaryPicturesAvatar />
      <MainPrimaryPicturesGarientBox />
    </div>
  );
}
