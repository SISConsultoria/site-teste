<template>
  <div id="app">
    <div class="row header">
      <div class="col-md-12" style="text-align:right">
        <a href="#"><img alt="" src="./assets/iconTwitter.png" class="iconSocialMediaHeader" /></a>
        <a href="#"><img alt="" src="./assets/iconFacebook.png" class="iconSocialMediaHeader" /></a>
        <a href="#"><img alt="" src="./assets/iconSkype.png" class="iconSocialMediaHeader" /></a>
        <a href="#"><img alt="" src="./assets/iconVimeo.png" class="iconSocialMediaHeader" /></a>
      </div>
    </div>
    <div class="row mainSpaceBackgroudMenu">
      <div class="col-md-12">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <img src="./assets/imgCarr1.png" alt="Imagem" style="width:100%;height: 500px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
      </div>
      <div class="col-md-6">
        <h2><strong>Somos SIS</strong></h2>
        <h4 style="color:#EF4025"><strong>#SomosSoluções</strong></h4>
        <p>
          A SIS Consultoria é uma empresa provedora de serviços e SomosSoluções<br/>
          integradas de sistemas, alinhada com<br/>
          as principais estratégias corporativas, através de uma equipe altamente<br/>
          qualificada. Nossa experiência e comprometimento traduzem o alto nível
        </p>
      </div>
    </div>
    <div class="row" style="margin-top:30px;margin-left:10%;margin-right:10%">
      <div class="col-md-6">
        <h3><strong>Nossas Soluções</strong></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed<br />
          condimentum mi, amet posuere ante. Vestibulum ac rutrum
        </p>
        <div class="row spaceParcOurSolution">
          <div class="col-md-6">
            <img src="./assets/estrategiaNegocio.png" alt="Negocio" />
            <h5><strong>Estratégia de negócio<br/>/tecnologia</strong></h5>
            <p>
              Lorem ipsum dolor sit amet<br/>
              consectur adipiscing elit.Nunc<br/>
              sed condimentum mi, sit amet
            </p>
          </div>
          <div class="col-md-6">
            <img src="./assets/transformacaoDigital.png" alt="Transformacao" />
            <h5><strong>Transformação<br/>Digital</strong></h5>
            <p>
              Lorem ipsum dolor sit amet<br/>
              consectur adipiscing elit.Nunc<br/>
              sed condimentum mi, sit amet
            </p>
          </div>
        </div>
        <div class="row spaceParcOurSolution">
          <div class="col-md-6">
            <img src="./assets/sustentacaoAplicacao.png" alt="Sustentacao" />
            <h5><strong>Sustentação<br/>de Aplicações</strong></h5>
            <p>
              Lorem ipsum dolor sit amet<br/>
              consectur adipiscing elit.Nunc<br/>
              sed condimentum mi, sit amet
            </p>
          </div>
          <div class="col-md-6">
            <img src="./assets/squadDesenvolvimento.png" alt="Squad" />
            <h5><strong>Squad de<br/>Desenvolvimento</strong></h5>
            <p>
              Lorem ipsum dolor sit amet<br/>
              consectur adipiscing elit.Nunc<br/>
              sed condimentum mi, sit amet
            </p>
          </div>
        </div>
        <div class="row spaceParcOurSolution">
          <div class="col-md-12">
            <input type="button" class="btn btn-primary colorButtonSis" value="Conheça mais" id="btnConhecaMais" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="./assets/torre.png" alt="Torre" />
      </div>
    </div>
    <div class="row footerSis">
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    greet: function() {
      alert("ok");
    }
  }
}
</script>

<style>
  @import './assets/css/mainStyles.css';
</style>
