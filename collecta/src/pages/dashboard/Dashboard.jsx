import {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';
import NavBar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import BtnVoltar from "../../assets/icon/i-voltar.svg";
import searchIcon from "../../assets/icon/i-search.png"; // Add the path to your search icon image
import {useNavigate} from "react-router-dom";

function Dashboard() {
    let navigate = useNavigate();
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearch, setShowSearch] = useState(false); // Estado para mostrar/ocultar o campo de pesquisa

    const contributors = [
        {name: 'Nathalia Ezime Obi', imageUrl: 'src/assets/icon/user-icon.png'},
        {name: 'Alex Andrade', imageUrl: 'src/assets/icon/user-icon.png'},
        {name: 'Emillie Nicole Duarte Souza', imageUrl: 'src/assets/icon/user-icon.png'},
        {name: 'Cristhian Mendes da Silva', imageUrl: 'src/assets/icon/user-icon.png'},
        {name: 'João Victor Mariano Pytel', imageUrl: 'src/assets/icon/user-icon.png'},
        {name: 'Ericote Sousa', imageUrl: 'src/assets/icon/user-icon.png'},
        {name: 'Fabio Figueiredo', imageUrl: 'src/assets/icon/user-icon.png'}
    ];

    const filteredContributors = contributors.filter(contributor =>
        contributor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (chartContainer.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartContainer.current, {
                type: 'bar',
                data: {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    datasets: [
                        {
                            label: 'Alcançado',
                            data: [12000, 19000, 15000, 20000, 18000, 17000, 22000, 25000, 21000, 19000, 23000, 26000],
                            backgroundColor: '#355D8C',
                            borderColor: '#355D8C',
                            borderWidth: 1,
                            stack: 'Stack 0'
                        },
                        {
                            label: 'Meta',
                            data: [14000, 20000, 18000, 22000, 19000, 18000, 24000, 26000, 23000, 20000, 25000, 28000],
                            backgroundColor: '#ADD5F7',
                            borderColor: '#ADD5F7',
                            borderWidth: 1,
                            stack: 'Stack 0'
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            },
                            ticks: {
                                callback: function (value) {
                                    return 'R$ ' + value.toLocaleString('pt-BR');
                                }
                            }
                        },
                        x: {
                            stacked: true,
                            grid: {
                                display: false
                            },
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom'
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += 'R$' + context.parsed.y.toLocaleString('pt-BR');
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchTerm('');
        }
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
                <div className="phrase-box">
                    <h2>Acompanhe as metas do seu projeto</h2>
                </div>
                <div className="dashboard-container">
                    <div className="chart-container">
                        <canvas ref={chartContainer}></canvas>
                    </div>
                    <div className="contributors-container">
                        <div className="contributors-header">
                            <h5>Contribuintes</h5>
                            <img src={searchIcon} alt="Search" onClick={toggleSearch}/>
                            {showSearch && (
                                <input
                                    type="text"
                                    placeholder="Procurar..."
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            )}
                        </div>
                        <ul>
                            {filteredContributors.map((contributor, index) => (
                                <li key={index}>
                                    <img src={contributor.imageUrl} alt={contributor.name}/>
                                    {contributor.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Dashboard;
