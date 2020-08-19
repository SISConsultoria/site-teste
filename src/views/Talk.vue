<template>
    <div>
        <img src="../assets/bannerTalk.png" alt="banner" />

        <div class="row colorDefaultSis">
            <div class="col-md-4">
            </div>
             <div class="col-md-4">
                 <p style="color:white;font-size:30px;padding-top: 8%;padding-bottom: 5%"><strong>Gestão participativa</strong></p>
            </div>
             <div class="col-md-4">
                 <p style="color:white;font-size:30px;padding-top: 8%;"><strong>Palestras e Treinamentos</strong></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
            </div>
             <div class="col-md-4">
                 <p class="colorDark" style="font-size: 18px;padding-right: 10%;padding-top: 8%;padding-bottom: 10%">
                     Realizado mensalmente, o Café com o CEO é um
                     momento de compartilhamento de ideias e sugestões
                     para a empresa. Nele, nossos colaboradores se 
                     reúnem com diretoria da SIS e são ouvidos. Uma
                     forma de valorizar a opinião de todos dentro da
                     organização que tem gerado bons frutos como os
                     projetos da Freeco e Copa.
                 </p>
            </div>
             <div class="col-md-4">
                 <p class="colorDark" style="font-size: 18px;padding-right: 10%;padding-top: 8%">
                     Promovendo palestras, workshops e eventos internos
                     ou externos a clientes, com o propósito de oferecer
                     formação continuada aos nossos profissionais com
                     as mais atuais tendências de cada área de Tecnologia
                     da Informação (TI).
                 </p>
            </div>
        </div>
        <div class="row colorBackgroundTalk">
            <div class="col-md-6" style="text-align: center">
                <input type="button" class="btn btn-default" value="CONHEÇA MAIS" style="background-color: #910045;border-color: #910045;color:white;font-weight:bold; width:60%;padding-top:4%;padding-bottom:4%; margin-top:50%" />
            </div>
            <div class="col-md-6">
                <img src="../assets/talkIntegraDark.png" alt="banner" style="margin-top: 20%" />
                
                <p style="font-size:30px;color:white;padding-top: 1%;padding-bottom: 2%">
                    Na SIS, valorizamos pessoas e suas vitórias!
                    Mensalmente apresentamos aos colaboradores
                    tudo que ocorreu durante o mês: novos clientes,
                    projetos, campanhas e ainda celebramos os
                    aniversariantes do período, uma forma
                    descontraída de integração e socialização 
                    todas as áreas.
                </p>
            </div>
        </div>
        <div class="container" style="margin-top: 2%">
            <app-blog></app-blog>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'talk'
    }
</script>