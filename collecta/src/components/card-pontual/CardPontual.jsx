import "./CardPontual.css";
import iLocal from "../../assets/icon/i-local.svg";
import iTag from "../../assets/icon/i-tag.svg";
import "../../components/card/Card.css";

function CardPontual(props) {
  return (
    <>
      <div className="card border-ice">
        <section className="card-thumbnail mb-16">
          <img src={props.img} className="card-thumb-img" />
          <span className="card-pin-destaque body-xsmall color-haiti bg-ice">
            Projeto destaque
          </span>
        </section>
        <section className="p-16">
          <section className="card-texto d-flex fd-column">
            <span className="card-titulo body-large mb-22">{props.titulo}</span>
            <span className="card-responsavel body-small mb-22">
              por {props.responsavel}
            </span>
            <span className="body-small mb-32 card-desc">{props.texto}</span>
          </section>
          <progress
            className="mb-32 card-progress-bar"
            id="file"
            value={props.porcentagem}
            max="100"
          ></progress>
          <section className="card-numeros mb-22 d-flex jc-between ai-center">
            <span className="body-large">{props.porcentagem}%</span>
            <section className="d-flex fd-column">
              <span className="body-large">R$ {props.valor}</span>
              <span className="body-xsmall">Levantados</span>
            </section>
            
            <section className="card-dias-restantes text-align-right">
                <span className="body-xsmall">{props.dias} dias restantes</span>
            </section>
          </section>
        </section>
        <section className="card-rodape p-16-lateral p-8-vertical bg-ice">
          <section className="card-local mb-8 d-flex">
            <img src={iLocal} />
            <span className="body-xsmall ml-8">{props.local}</span>
          </section>
          <section className="card-tag d-flex">
            <img src={iTag} />
            <span className="body-xsmall ml-8">{props.tag}</span>
          </section>
        </section>
      </div>
    </>
  );
}

export default CardPontual;