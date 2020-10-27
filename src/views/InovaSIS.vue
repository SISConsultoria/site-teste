<template>
    <div>
        <div class="row headerInovaSIS">
            <div>
                <h1>InovaSIS</h1>
            </div>
        </div>
        <div class="row sisAcademy">
            <div class="col-lg-4">
                <img src="~@/assets/sisAcademy.png" />
            </div>
            <div class="col-lg-8 ajustTop">
                <p>Conheça a academia de treinamento e desenvolvimento pautada no jeito SIS de vencer! Aqui preparamos nossos profissionais para estarem sempre à frente e em destaque no mercado de trabalho.</p>
                <p>Na SIS Academy proporcionamos interações semanais, quando discutimos questões como a cultura organizacional, metodologias ágeis, temas comportamentais e técnicos e as principais tendências do cenário corporativo.</p>
            </div>
        </div>
        <div class="row jeitoSIS">
            <p>O Jeito SIS de vencer.</p>
        </div>
        <div class="row workshops">
            <div class="col-lg-8">
                <h2>Workshops e Treinamentos</h2>
                <p>Promovemos palestras, workshops e meetups com o propósito de oferecer formação continuada aos nossos profissionais.</p>
            </div>
            <div class="col-lg-4">
                <img src="~@/assets/treinamentos.png" />
            </div>
            <div class="col-lg-4">
                <img src="~@/assets/alura.png" />
            </div>
            <div class="col-lg-8">
                <p>
                    A SIS tem parceria com a plataforma da Alura para oferecer treinamentos aos colaboradores, são mais de 1.200 cursos diferentes. A plataforma é 100% custeada pela SIS e oferece cursos técnicos e comportamentais para toda a equipe.
                    <br />
                    Através da plataforma criamos trilhas de desenvolvimento ágil, técnico e comportamental visando a evolução e o aprendizado contínuo dos profissionais.
                </p>
            </div>
        </div>
        <div class="row certificate">
            <div class="col-lg-9">
                <p>
                    Na SIS acreditamos que investir em certificação e treinamento é o maior diferencial para o sucesso e sustentabilidade corporativa.
                    <br />
                    A SIS tem uma Política de Certificação transparente, que subsidia as certificações necessárias para o desenvolvimento de seus colaboradores alinhado aos negócios da empresa.
                </p>
            </div>
            <div class="col-lg-3 whitebg">
                <img src="~@/assets/certificate.png" />
            </div>
        </div>
        <div class="container"><app-blog></app-blog></div>
    </div>
</template>
<script>
    export default {
        name: 'InovaSIS'
    }
</script>

<style>
    @import '../assets/css/inovaSIS.css';
</style>