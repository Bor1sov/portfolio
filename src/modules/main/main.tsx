import MainPrimary from "./primary/main__primary";
import MainFAQ from "./FAQ/main__FAQ";
import MainSkills from "./skills/main__skills";
import MainVectors from "./vectors/main__vectors";
import MainExamples from "./examples/main__examples";

export default function Main() {
  return (
    <main className="main">
      <MainPrimary />
      <MainFAQ />
      <MainSkills />
      <MainVectors />
      <MainExamples />
    </main>
  );
}
