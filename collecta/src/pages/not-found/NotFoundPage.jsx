import "./NotFoundPage.css"

function NotFoundPage() {
    return (
        <>
         <div id="clouds">
            <div class="cloud x1"></div>
            <div class="cloud x1_5"></div>
            <div class="cloud x2"></div>
            <div class="cloud x3"></div>
            <div class="cloud x4"></div>
            <div class="cloud x5"></div>
        </div>
        <div class='c'>
            <div class='_404 mmb-32'>404</div>
            <hr className="mmb-32"/>
            <div class='_1 mmb-16'>A PÁGINA</div>
            <div class='_2 mmb-32'>NÃO FOI ENCONTRADA</div>
            <a class='btn' href='#'>VOLTAR PARA TELA INICIAL</a>
        </div>
        </>
    )
}

export default NotFoundPage;