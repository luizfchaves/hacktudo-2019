import React from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:
        "Agosto tem recorde de focos de incêndio na Amazônia em nove anos, aponta Inpe",
      subtitle:
        "Dados do Programa Queimadas mostram 30.901 focos, quase o triplo do ano passado"
    };
  }

  render() {
    return (
      <>
        <img
          className="imageHeader"
          src="https://abrilveja.files.wordpress.com/2018/10/amazonia-desmatamento-2017-5536.jpg"
          alt="Header"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="textContent">
            <p className="title">{this.state.title}</p>
            <br />
            <div
              style={{
                width: "100%",
                marginBottom: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a href="#noticia" className="down-arrow">
                <div style={{ width: "40px", height: "25px", opacity: 0.5 }}>
                  <img
                    src="https://i.pinimg.com/originals/84/c6/26/84c626addaa86e26c26a48e9947cf436.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </a>
            </div>
            <h4 id="noticia">{this.state.subtitle}</h4>
            <p>{`RIO - Agosto deste ano foi o pior mês para a Amazônia desde 2010. O número de queimadas na região triplicou em relação a agosto do ano passado, passando de 10.421 em 2018 para 30.901 em 2019. O recorde anterior, há nove anos, foi de 45.018 focos de incêndio na parte brasileira do bioma. Os dados são do Instituto Nacional de Pesquisas Espaciais ( Inpe ).

Especialistas ouvidos pelo GLOBO foram unânimes em descartar fatores naturais como as causas desse aumento. Para eles, o crescimento no número de incêndios registrado no mês passado é resultado da ação humana e está diretamente ligado ao aumento nas taxas de desmatamento. A preocupação dos ambientalistas é com o mês que começa agora, já que setembro, mais seco, é historicamente pior para as queimadas do que agosto.`}</p>
            <p style={{ margin: 0, fontWeight: "bold" }}>Saiba mais</p>
            <a href="https://g1.globo.com/pa/para/noticia/2019/10/24/mais-de-450-focos-de-incendio-florestal-foram-combatidos-na-amazonia-oriental-durante-operacao-verde-brasil-afirma-exercito.ghtml">
              https://g1.globo.com/pa/para/noticia/2019/10/24/mais-de-450-focos-de-incendio-florestal-foram-combatidos-na-amazonia-oriental-durante-operacao-verde-brasil-afirma-exercito.ghtml
            </a>
            <hr />
            <div className="phases">
              <Link to={"/contribuition"}>
                <Button block style={{ color: "white" }} color="info">
                  Entrar para colaborar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
