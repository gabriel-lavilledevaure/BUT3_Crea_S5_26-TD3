import Exercice0 from "./components/Exercice0";
import Exercice1 from "./components/Exercice1";
import Exercice2 from "./components/Exercice2";
import Exercice3 from "./components/Exercice3";
import Exercice4 from "./components/Exercice4";
import Exercice6 from "./components/Exercice6";

function App() {
  return (
    <section className="flex h-full min-h-screen flex-col items-center justify-center gap-10 overflow-x-clip bg-slate-950 py-20">
      <Exercice0 />

      <div className="grid w-full max-w-2xl grid-cols-1 gap-10 px-10 md:grid-cols-2">
        <Exercice1 />
        <Exercice2 />
        <Exercice3 />
        <Exercice4 />
        <Exercice6 />
      </div>
    </section>
  );
}

export default App;
