<template>
    <div>
        <div class="row headerSuccessCases">
            <div>
                <h1>Cases de sucesso</h1>
            </div>
        </div>
        <div class="row successCasesMain">
            <div class="col-md-5 divCases">
                <h2>Conheça nossos Cases</h2>
                <div>
                    <div class="col-md-4 col-sm-2 casesLogos bancos" divcontent="divBancos"><span>Bancos</span></div>
                    <div class="col-md-4 col-sm-2 casesLogos industria" divcontent="divIndustria"><span>Indústria</span></div>
                    <div class="col-md-4 col-sm-2 casesLogos saude" divcontent="divSaude"><span>Saúde</span></div>
                    <div class="col-md-4 col-sm-2 casesLogos servicos active" divcontent="divServicos"><span>Serviços</span></div>
                    <div class="col-md-4 col-sm-2 casesLogos varejo" divcontent="divVarejo"><span>Varejo</span></div>
                    <div class="col-md-4 col-sm-2 casesLogos seguros" divcontent="divSeguros"><span>Seguros</span></div>
                </div>
            </div>
            <div class="col-md-7 CasesContent">
                <div id="divBancos" class="casesDesc">
                    <h2>Banco digital de investimentos</h2>
                    <p>
                        Oferta e comercialização de produtos de Previdência Privada através de seu APP e Site.
                        Para atender as expectativas de um mercado cada vez mais digital, nosso cliente  nos apresentou
                        a necessidade de oferecer aos clientes uma diversidade de produtos na linha de Previdência Privada pelo aplicativo mobile e na Web, voltada para pessoas físicas clientes do banco.
                        Com foco em promover ao usuário final uma nova experiência, através de uma usabilidade simples, objetiva e intuitiva, através de um processo de Lean Inception definimos a jornada de oferta e venda dos produtos, implementamos o desenvolvimento de todas as APIs para integração do Mobile e da WEB, além do desenvolvimento de plataforma de BackOffice e desenvolvimento das integrações entre as corretoras e o Banco de Investimentos. Entre as tecnologias utilizadas pela equipe SIS, estão: .NET C#, SQL Server e Vue.js.
                    </p>
                </div>
                <div id="divIndustria" class="casesDesc">
                    <h2>Indústria nacional de cosméticos</h2>
                    <p>A SIS Consultoria atua estrategicamente diante de diversos tipos de projetos de desenvolvimento web e mobile, seguindo em diferentes linhas de execução, tais como: alocação de recursos, sustentação, squads com atuação através de frameworks ágeis e desenvolvimento de projetos pontuais. Para que o projeto de implantação da ferramenta Ariba fosse executado e auxiliasse na organização estratégica interna e dos seus fornecedores, a SIS trabalhou como empresa responsável pela homologação do fluxo de cadastro de novos fornecedores na ferramenta.</p>
                </div>
                <div id="divSaude" class="casesDesc">
                    <h2>Planos de saúde odontológico</h2>
                    <p>Atuamos em diferentes modalidades de serviços, como desenvolvimento de melhorias nos canais digitais, com nossa equipe de sustentação para desenvolvimento de correções e melhorias nos ativos digitais. Também atendemos a filial mexicana da empresa. Em ambos os países, realizamos a sustentação dos canais digitais off-board, incluindo os aplicativos mobile e e-commerce, solucionando os incidentes e problemas de acordo com o SLA pré-estabelecido. A sustentação é realizada pela nossa equipe, atendendo chamados que são controlados por ferramentas de Governança de TI realizando entregas mensais de melhorias evolutivas. Entre as tecnologias utilizadas estão Java, Spring, Node.js, Ionic, Magento 1 e 2, Drupal, Laravel, entre outros, para Web. Para o Banco de dados, utilizamos Oracle e MySQL.</p>
                </div>
                <div id="divServicos" class="casesDesc active">
                    <h2>Locadora de veículos</h2>
                    <p>Empresa especializada em locação de veículos e terceirização de frotas, com mais de 160 lojas e 50.000 veículos (2016). O cliente possuía a necessidade de implementar a carteira do Masterpass, para que fosse uma nova forma de pagamento em suas aplicações mobile. Deste modo, a SIS Consultoria realizou o estudo da documentação do SDK para implementação da carteira Masterpass nas aplicações mobile da empresa (Android e iOS). A SIS Consultoria tem atuado como um parceiro de desenvolvimento, visando o aprimoramento de processos e inovação por meio da tecnologia. Para isso utilizamos ferramentas como Micro Serviços e RESTFULL.</p>
                </div>
                <div id="divVarejo" class="casesDesc">
                    <h2>Varejo Brasileiro</h2>
                    <p>A SIS Consultoria é um parceiro estratégico de uma rede de Lojas de Departamento Brasileira, incluindo uma Financeira. Atuamos em diferentes linhas de execução, como: alocação de recursos, criação de squads de desenvolvimento seguindo frameworks ágeis e desenvolvimento de projetos pontuais. Para realizar a implementação de melhorias, correções e suporte ao APP do Cartão da Rede e demais ativos, a SIS ofereceu a solução através da alocação de recursos especializados nas tecnologias solicitadas, facilitando assim a atuação em conjunto à equipe da Financeira. Utilizamos ferramentas específicas para mobiles Android, iOS e Angular.</p>
                </div>
                <div id="divSeguros" class="casesDesc">
                    <h2>Seguradora</h2>
                    <p>A SIS Consultoria implementou o SIS Assistência, que é um sistema que abrange todas as funções de “workflow” relacionadas aos diversos tipos de assistência, como Assistência Funeral, Guincho, Serviços Residenciais, Chaveiro, entre outros. Foi projetado para atender empresas especializadas na prestação de serviços de assistência, vinculadas a Seguradoras ou de atendimento direto ao público. O SIS Assistência é um sistema que possui um conjunto poderoso de parâmetros, que permite aos usuários desenhar o fluxo da prestação de serviços, agrupando funções Web e Mobile. O cliente solicitou o desenvolvimento de uma plataforma digital para proporcionar um serviço rápido e de qualidade para os seus clientes e prestadores de serviços. Nossa equipe executou a aplicação na Plataforma Outsystem, com implementação das seguintes funcionalidades Web e Mobile: fluxo de assistência, questionário de avaliação do serviço prestado, alocação de empresas e profissionais, ordem de serviço, coleta e arquivamento de documentos em meios eletrônicos, chat em tempo real, geolocalização, orçamento e quitação de serviços. No processo do produto, foram utilizadas ferramentas OutSystem, Plataforma Low Code Web e Mobile e SQL.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    export default {
        name: 'successCases'
    }

    $(document).ready(function () {
        $(".casesLogos").on('click', function (event) {            
            $(".casesLogos").removeClass("active");
            $(".casesDesc").removeClass("active");            
            $(this).addClass("active");
            $('#' + $(this).attr('divcontent')).addClass("active");
        });
    });
</script>

<style>
    @import '../assets/css/mainStyles.css';
</style>