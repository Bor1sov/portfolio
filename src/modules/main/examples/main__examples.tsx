import MainExamplesItem from "./item/main__examples__item";

export default function MainExamples() {
  return (
    <section className="main__examples">
      {Array(2).fill(null).map((_, index) => (
        <>
          <MainExamplesItem key={index} />
          <div className="gradient" key={index}/>
        </>
      ))}
    </section>
  );
}
