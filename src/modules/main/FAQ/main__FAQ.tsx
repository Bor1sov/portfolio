import MainFAQTitle from "./title/main__FAQ__title";
import MainFAQSubTitle from "./subtitle/main__FAQ__subtitle";
import MainFAQDescription from "./discription/main__FAQ__discription";

export default function MainFAQ() {
  return (
    <section className="main__FAQ">
      <MainFAQTitle />
      <MainFAQSubTitle />
      <MainFAQDescription />
    </section>
  );
}
