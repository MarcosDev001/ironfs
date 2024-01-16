// Importa a página MinhaPagina
import Menu from "./Menu/page";
import Banner from "./Banner/page";
import Dropdown from "./Dropdown/page";
import Noticias from "./Noticias/page";
import Emblemas from "./Emblemas/page";
import Lojao from "./Lojao/page";
import Publicidade from "./Publicidade/page"
import Eventos from "./Eventos/page"
import Ranking from "./Ranking/page"
import "typeface-poppins";


function Home() {
  return (
    <div>
      <Menu />
      <Banner />
      <Dropdown />
      <Noticias />
      <Emblemas />
      <Lojao />
      <Publicidade />
      <Eventos />
      <Ranking />
    </div>
  );
}

export default Home;
