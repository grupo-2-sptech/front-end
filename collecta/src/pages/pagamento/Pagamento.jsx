import {useState} from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Pagamento.css";
import BtnVoltar from "../../assets/icon/i-voltar.svg";
import qrCodeImage from "../../assets/img/qr-code.png";
import {useNavigate} from "react-router-dom";

function Pagamento() {
    let navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 15}, (_, index) => currentYear + index);
    const [customDonation, setCustomDonation] = useState("");

    const handleCpfCnpjChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.slice(0, 14);

        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else {
            value = value.replace(/^(\d{2})(\d)/, "$1.$2");
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
            value = value.replace(/(\d{4})(\d)/, "$1-$2");
        }
        setCpfCnpj(value);
    };

    const formatMoney = (value) => {
        value = value.replace(/\D/g, "");
        value = (value / 100).toFixed(2) + '';
        value = value.replace(".", ",");
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return value;
    };

    const handleCustomDonationChange = (e) => {
        setCustomDonation(formatMoney(e.target.value));
    };

    const handleBack = () => {
        navigate('/');
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
                        <div className="donation-primary-value-box">
                            <h2 className="donation-custom">R$ 10,00</h2>
                        </div>
                        <div className="donation-primary-value-box">
                            <h2 className="donation-custom">R$ 50,00</h2>
                        </div>
                        <div className="donation-primary-value-box">
                            <h2 className="donation-custom">R$ 90,00</h2>
                        </div>
                    </div>
                    <div className="donations-values">
                        <div className="donation-primary-value-box">
                            <div className="donation-custom-value costumize-donation-value">
                                <h1>R$ </h1>
                                <input
                                    type="text"
                                    className="donation-custom-value-money"
                                    value={customDonation}
                                    onChange={handleCustomDonationChange}
                                />
                            </div>
                        </div>
                        <div className="donation-primary-value-box">
                            <h2 className="costumize-donation-value"><span
                                className="color-science">Contribuir</span> de Outra Forma</h2>
                        </div>
                        <div className="donation-primary-value-box">
                            <h2 className="costumize-donation-value">Seja um <span
                                className="color-science">voluntário</span></h2>
                        </div>
                    </div>
                </div>

                <div className="buttons-box">
                    <button
                        className={`${paymentMethod === "creditCard" ? "bg-white color-outline border-outline" : "bg-tufts color-white border-none"} br-5 w-100 p-16-vertical  mb-32 cursor-button body-large`}
                        onClick={() => setPaymentMethod("creditCard")}
                    >
                        Cartão de Crédito
                    </button>
                    <button
                        className={`${paymentMethod === "creditCard" ? "bg-tufts color-white border-none" : "bg-white color-outline border-outline"} br-5 w-100 p-16-vertical color-white mb-32 cursor-button body-large`}
                        onClick={() => setPaymentMethod("pix")}
                    >
                        PIX
                    </button>
                </div>
                {paymentMethod === "creditCard" && (
                    <form className="credit-card-form">
                        <div className="credit-card-container">
                            <div className="fields-credit-card">
                                <div className="field-label-lateral">
                                    <div className="field-label">
                                        <label htmlFor="name">Nome</label>
                                        <input className="field-credit-card" type="text" required/>
                                    </div>
                                    <div className="field-label">
                                        <label htmlFor="cpfCnpj">CPF/CNPJ</label>
                                        <input className="field-credit-card" type="text" value={cpfCnpj}
                                               onChange={handleCpfCnpjChange} required/>
                                    </div>
                                </div>
                                <div className="field-label">
                                    <label htmlFor="cardNumber">Número do Cartão</label>
                                    <input className="field-credit-card  field-credit-card-plus" type="text" required/>
                                </div>
                                <div className="field-label-lateral">
                                    <div className="field-label">
                                        <label htmlFor="expirationDate">Data de Expiração</label>
                                        <div className="expiration-date-fields">
                                            <select className="field-credit-date-expiration" id="expirationMonth"
                                                    required>
                                                {Array.from({length: 12}, (_, index) => (
                                                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                                                ))}
                                            </select>
                                            <select className="field-credit-date-expiration" id="expirationYear"
                                                    required>
                                                {years.map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field-label">
                                        <label htmlFor="cvv">CVV</label>
                                        <input className="field-credit-card" type="number" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="donation-box">
                                <h5>Resumo da Doação</h5>
                                <div>
                                    <div className="donation-components-box">
                                        <h6>Doação</h6>
                                        <h6>R$ 90,00</h6>
                                    </div>
                                    <div className="donation-components-box">
                                        <h6>Taxa</h6>
                                        <h6>R$ 10,00</h6>
                                    </div>
                                </div>
                                <h5>Total : R$ 100,00</h5>
                            </div>
                        </div>
                        <button type="submit"
                                className="bg-tufts br-5 w-100 border-none p-16-vertical color-white mb-32 cursor-button button-payment-confirm body-large">Confirmar
                            Pagamento
                        </button>
                    </form>
                )}
                {paymentMethod === "pix" && (
                    <div className="qr-code-container">
                        <h2>Escaneie o QR Code</h2>
                        <img src={qrCodeImage} alt="QR Code"/>
                    </div>
                )}
            </main>
        </>
    );
}

export default Pagamento;
