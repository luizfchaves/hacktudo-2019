import React from "react";

import { Modal, Button } from "reactstrap";

import "./styles.css";

import text from "./../../text.json";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Quinze praias do Nordeste sob o jugo do vazamento de óleo",
      subtitle:
        "Dez fotógrafos de Pernambuco, Alagoas, Sergipe e Bahia retratam os estragos do vazamento de óleo na região e o trabalho de voluntários para minimizar os prejuízos"
    };
  }
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            style={{
              width: "auto",
              height: "50vh",
              position: "fixed",
              zIndex: "-1"
            }}
            src="https://ep01.epimg.net/brasil/imagenes/2019/10/24/album/1571951039_227089_1572011259_noticia_normal_recorte1.jpg"
            alt="Header"
          />
          <Button>Teste</Button>
          <div
            style={{
              marginTop: "45vh",
              padding: "15px",
              maxWidth: "800px",
              background: "#FFFFFF"
            }}
          >
            <p className="title">{this.state.title}</p>
            {this.state.subtitle}
            {text.text}
            <input />
          </div>
        </div>
      </>
    );
  }
}
