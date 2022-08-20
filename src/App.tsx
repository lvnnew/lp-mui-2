import Bottom from "./components/Bottom";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SuitableFor from "./components/SuitableFor";

function App() {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Hero />
      <Section />
      <SuitableFor />
      <Bottom />
    </div>
  );
}

export default App;
