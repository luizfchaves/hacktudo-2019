import React from "react";
import {
  Input,
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody
} from "reactstrap";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 1,
      adicionarComentarioModal: false,
      comentario: "",
      comentarios: []
    };
  }

  renderComments() {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"));
    if (comentarios)
      this.setState({
        comentarios
      });
  }

  renderPhaseOne = () => {
    return (
      <div className="comments-container">
        <Row>
          <Col xl={4}>
            <Link to={"/"}>
              <Button style={{ marginTop: 10 }} color="secondary" block>
                Voltar
              </Button>
            </Link>
          </Col>
          <Col xl={8}>
            <Button
              style={{ marginTop: 10, marginBottom: 10 }}
              color="info"
              block
              onClick={() => this.setState({ adicionarComentarioModal: true })}
            >
              Adicionar
            </Button>
          </Col>
        </Row>
        {this.state.comentarios.map(e => (
          <div className="comment-box">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{e.text}</p>
            </div>
            <div>
              <div
                className={
                  e.liked
                    ? "vote-button vote-button-liked"
                    : "vote-button vote-button-like"
                }
                onClick={() => this.vote(e.text, "liked")}
              >
                <img src={require("./../../icons/thumb_up.svg")} />
              </div>
              <div
                className={
                  e.disliked
                    ? "vote-button vote-button-disliked"
                    : "vote-button vote-button-dislike"
                }
                onClick={() => this.vote(e.text, "disliked")}
              >
                <img src={require("./../../icons/thumb_down.svg")} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  componentDidMount() {
    this.renderComments();
  }
  enviarComentario() {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"));
    if (comentarios) {
      comentarios.push({
        text: this.state.comentario,
        liked: false,
        disliked: false
      });
      localStorage.setItem("comentarios", JSON.stringify(comentarios));
    } else {
      let comentarios = [
        {
          text: this.state.comentario,
          liked: false,
          disliked: false
        }
      ];
      localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }
    this.setState({ comentario: "", adicionarComentarioModal: false });

    this.renderComments();
  }
  vote(text, option) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"));
    for (let i = 0; i < comentarios.length; i++) {
      if (text == comentarios[i].text) {
        if (option == "liked") {
          comentarios[i].liked = !comentarios[i].liked;
          if (comentarios[i].disliked) comentarios[i].disliked = false;
        } else {
          comentarios[i].disliked = !comentarios[i].disliked;
          if (comentarios[i].liked) comentarios[i].liked = false;
        }
      }
    }

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    this.renderComments();
  }

  renderPhaseTwo = () => {
    return <div>2</div>;
  };

  renderPhaseThree = () => {
    return <div>3</div>;
  };

  renderPhaseFour = () => {
    return <div>4</div>;
  };

  render() {
    return (
      <>
        <img
          className="phaseimageHeader"
          src="https://abrilveja.files.wordpress.com/2018/10/amazonia-desmatamento-2017-5536.jpg"
          alt="Header"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div className="card-container">
            {this.state.phase == 1
              ? this.renderPhaseOne()
              : this.state.phase == 2
              ? this.renderPhaseTwo()
              : this.state.phase == 3
              ? this.renderPhaseThree()
              : this.renderPhaseFour()}
          </div>
        </div>
        <Modal isOpen={this.state.adicionarComentarioModal}>
          <ModalHeader>Resolucionar problema</ModalHeader>
          <ModalBody>
            Escreva uma forma para resolver este problema
            <Input
              value={this.state.comentario}
              onChange={e => this.setState({ comentario: e.target.value })}
              style={{ marginTop: 15, marginBottom: 15 }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => this.setState({ adicionarComentarioModal: false })}
              color="danger"
            >
              Fechar
            </Button>
            <Button
              disabled={this.state.comentario.length < 1}
              color="success"
              onClick={() => this.enviarComentario()}
            >
              Enviar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
