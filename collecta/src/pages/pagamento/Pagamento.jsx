import {useRef, useState} from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Pagamento.css";
import BtnVoltar from "../../assets/icon/i-voltar.svg";
import {useNavigate, useParams} from "react-router-dom";
import api from "../../api/api";

function Pagamento() {
    let navigate = useNavigate();
    const [customDonation, setCustomDonation] = useState("");
    var token = localStorage.getItem('token');


    const handleCustomDonationChange = (e) => {
        var valor = e.target.value

        const novoValor = valor.replace(/[^0-9]/g, '');

        if (!isNaN(novoValor) || novoValor === '') {
            setCustomDonation(valor);
        }


        var total = document.getElementById("valorTotal")
        var repassado = document.getElementById("valorRepassado")
        var taxa = document.getElementById("valorTaxa")
        total.innerHTML = valor
        repassado.innerHTML = parseFloat(valor) * 0.9
        taxa.innerHTML = parseFloat(valor)  * 0.1
        console.log(e.target.value)
    };

    const handleBack = () => {
        navigate(-1);
    };

    function passarValor(valor){
        var total = document.getElementById("valorTotal")
        var repassado = document.getElementById("valorRepassado")
        var taxa = document.getElementById("valorTaxa")
        total.innerHTML = valor
        repassado.innerHTML = valor * 0.9
        taxa.innerHTML = valor * 0.1
        
    }

    const spanRef = useRef();

    function buscarInfoPagto(id){
        api.get(`/contribuicoes/monetarias/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            console.log(res.data)
            var url = res.data.linkPagamento
            window.open(url, '_blank')
          }).catch((erro) => {
            console.log(erro)
          })
    }

    const [idFinanceiro, setIdFinanceiro] = useState("");
    const { id } = useParams();
    function buscarInfoCampanha(id){
        api.get(`/campanhas/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            setIdFinanceiro(res.data.financeiroCampanha.id)
          }).catch((erro) => {
            console.log(erro)
          })
    }


    var idUsuario = localStorage.getItem("id")


    const gerarPix = () => {
    var valor = spanRef.current.textContent + ".00";
    buscarInfoCampanha(id)

      var pagamento = {
        idDoador: idUsuario,
        parcelas: 1,
        valor: valor,
        formaPagamento: "PIX",
        idFinanceiro: idFinanceiro
      }

      console.log(pagamento)

      api.post("/contribuicoes/monetarias", pagamento, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res)
        buscarInfoPagto(res.data.id)
      }).catch((erro) => {
        console.log(erro)
      })

    };




    return (
        <>
            <NavBar/>
            <section className="spaceBtns">
                <div className="container">
                    <img className="cursor-button"
                         src={BtnVoltar}
                         alt="Circulo redondo e na cor azul com seta para esquerda ao centro"
                         onClick={handleBack}
                    />
                </div>
            </section>
            <main className="main">
                <div className="donation-primary-values">
                    <div className="donations-values">
                        <div onClick={() => passarValor(10)} className="donation-primary-value-box">
                            <h2 className="donation-custom">R$ 10,00</h2>
                        </div>
                        <div onClick={() => passarValor(50)} className="donation-primary-value-box">
                            <h2 className="donation-custom">R$ 50,00</h2>
                        </div>
                        <div onClick={() => passarValor(100)} className="donation-primary-value-box">
                            <h2 className="donation-custom">R$ 100,00</h2>
                        </div>
                    </div>
                    <div className="donations-values">
                       
                        <div onClick={() => passarValor(150)} className="donation-primary-value-box">
                            <h2 className="costumize-donation-value">R$ 150,00</h2>
                        </div>
                        <div className="donation-primary-value-box">
                            <div className="donation-custom-value costumize-donation-value">
                                <h1>R$ </h1>
                                <input
                                    type="Number"
                                    className="donation-custom-value-money"
                                    value={customDonation}
                                    onChange={handleCustomDonationChange}
                                />
                            </div>
                        </div>
                        <div className="donation-box">
                                <h5>Resumo da Doação</h5>
                                <div>
                                    <div className="donation-components-box">
                                        <h6>Doação</h6>
                                        <h6>R$ <span id="valorRepassado">0,00</span></h6>
                                    </div>
                                    <div className="donation-components-box">
                                        <h6>Taxa</h6>
                                        <h6>R$ <span id="valorTaxa">0,00</span></h6>
                                    </div>
                                </div>
                                <h5>Total : R$ <span ref={spanRef} id="valorTotal">0,00</span></h5>
                            </div>
                    </div>
                </div>

                <div className="buttons-box">

                    <button
                        className={"bg-tufts color-white border-none br-5 w-100 p-16-vertical color-white mb-32 cursor-button body-large"}
                        onClick={gerarPix}
                    >
                       GERAR PIX
                    </button>
                </div>
            
            </main>
        </>
    );
}

export default Pagamento;
