import Header from "./Header";
import Canvas from "./Canvas";
import MainText from "./MainText";
import Footer from "./Footer";

export default function Body() {
  return (
    <div className="App">
      <Header />
      <Canvas />
      <MainText />
      <Footer />
    </div>
  );
}
