<template>
    <div>
        <div class="row headerApprenticeship">
            <div>
                <h1>Aprendizagem<br />na SIS</h1>
            </div>
        </div>
        <div class="row content">
            <img src="~@/assets/aprendiz.png" class="rocket" />
            <div class="jovemAprendiz">
                <h2>Jovem Aprendiz</h2>
                <p>
                    A SIS investe na contratação e formação de jovens aprendizes para transformá-los em futuros analistas e gestores.<br />
                    O objetivo é treinar e desenvolver os jovens para atuação nas áreas técnicas.<br />
                    Esse trabalho é de grande valor na SIS e o que nos deixa orgulhosos e certos de que estamos<br />
                    no caminho certo, são os depoimentos que seguem:
                </p>
                <img src="~@/assets/ja1.png" @click="abrirDepoimento" content-id="d1" />
                <img src="~@/assets/ja2.png" @click="abrirDepoimento" content-id="d2" />
                <img src="~@/assets/ja3.png" @click="abrirDepoimento" content-id="d3" />
                <img src="~@/assets/ja4.png" @click="abrirDepoimento" content-id="d4" />
            </div>
            <div class="divDepoimentos">
                <div id="d1" class="depoimento active"><span>1“Ser aprendiz na SIS, foi um grande privilégio, me deram a oportunidade de ter meu primeiro emprego e de me capacitar para que me tornasse uma boa profissional, ampliou minha visão em relação ao ambiente corporativo, todos colaboradores são muito prestativos e pacientes, onde torna a aprendizagem mais rápida. Todo conhecimento que adquiri é graças a SIS. Hoje como uma colaboradora efetiva, continuo evoluindo cada vez mais.”</span></div>
                <div id="d2" class="depoimento"><span>2“Ser aprendiz na SIS, foi um grande privilégio, me deram a oportunidade de ter meu primeiro emprego e de me capacitar para que me tornasse uma boa profissional, ampliou minha visão em relação ao ambiente corporativo, todos colaboradores são muito prestativos e pacientes, onde torna a aprendizagem mais rápida. Todo conhecimento que adquiri é graças a SIS. Hoje como uma colaboradora efetiva, continuo evoluindo cada vez mais.”</span></div>
                <div id="d3" class="depoimento"><span>3“Ser aprendiz na SIS, foi um grande privilégio, me deram a oportunidade de ter meu primeiro emprego e de me capacitar para que me tornasse uma boa profissional, ampliou minha visão em relação ao ambiente corporativo, todos colaboradores são muito prestativos e pacientes, onde torna a aprendizagem mais rápida. Todo conhecimento que adquiri é graças a SIS. Hoje como uma colaboradora efetiva, continuo evoluindo cada vez mais.”</span></div>
                <div id="d4" class="depoimento"><span>4“Ser aprendiz na SIS, foi um grande privilégio, me deram a oportunidade de ter meu primeiro emprego e de me capacitar para que me tornasse uma boa profissional, ampliou minha visão em relação ao ambiente corporativo, todos colaboradores são muito prestativos e pacientes, onde torna a aprendizagem mais rápida. Todo conhecimento que adquiri é graças a SIS. Hoje como uma colaboradora efetiva, continuo evoluindo cada vez mais.”</span></div>
            </div>
            <div class="estagio">
                <h2>Programa de Estágio</h2>
                <p>
                    Em parceria com a UFLA - Universidade Federal de Lavras, a SIS desenvolve um programa de seleção de candidatos para atuação em análise e desenvolvimento de sistemas.<br /><br />O Programa tem duração de 02 anos, e a cada 6 meses os estagiários são avaliados. Todos os estudantes têm acompanhamento comportamental e técnico do RH da SIS e da UFLA. Os estagiários contam, desde o início do Programa, com uma trilha de treinamento técnico desenvolvida de acordo com as necessidades de mercado.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'apprenticeship',
        methods: {
            abrirDepoimento(event) {
                var element = event.currentTarget
                var idDepoimento = element.getAttribute('content-id');                
                document.querySelector('.active').classList.remove('active');
                document.getElementById(idDepoimento).classList.add('active');
            }
        }
    }
</script>

<style>
    @import '../assets/css/apprenticeship.css';
</style>