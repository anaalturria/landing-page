import PrimeiroComp from "./components/PrimeiroComp";
import SegundoComp from "./components/SegundoComp";
import TerceiroComp from "./components/TerceiroComp";
import QuartoComp from "./components/QuartoComp";
import Imagem from "./components/img/taytayf1.jpg";
import Imagem2 from "./components/img/theerastour.jpg";
import Rodape from "./components/Rodape";



function App(props) {

  return (
    <>
      <PrimeiroComp cor="#360C7A" ></PrimeiroComp>
      <SegundoComp foto={Imagem}/>
      <TerceiroComp foto2={Imagem2}></TerceiroComp>
      <QuartoComp agora="spotify"></QuartoComp>
      <Rodape insta="taylorswift" sp="taylor swift" email="taylorswift.tv@gmail.com"></Rodape>

    </>
  );
}

export default App;
