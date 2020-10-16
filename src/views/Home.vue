<template>
    <div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img src="../assets/imgCarr1.png" alt="Imagem" style="width:100%;height: 500px">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
          </div>
          <div class="col-md-6">
            <h2><strong>Somos SIS</strong></h2>
            <h4 style="color:#EF4025"><strong>#SomosSoluções</strong></h4>
            <p class="colorFontDefault">
              A SIS Consultoria é uma empresa provedora de serviços e SomosSoluções<br/>
              integradas de sistemas, alinhada com<br/>
              as principais estratégias corporativas, através de uma equipe altamente<br/>
              qualificada. Nossa experiência e comprometimento traduzem o alto nível
            </p>
            <div class="row">
              <div class="col-md-3">
                <input type="button" class="btn btn-primary" value="SAIBA MAIS" style="height:50px; background-color:#0074F8; border-color:#0074F8" />
              </div>
              <div class="col-md-2">
                <img src="../assets/basketBranco.png" alt="share" />
              </div>
              <div class="col-md-2">
                <img src="../assets/facebookBranco.png" alt="share" />
              </div>
              <div class="col-md-2">
                <img src="../assets/linkedinBranco.png" alt="share" />
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:30px;margin-bottom: 100px">
          <div class="col-md-6">
            <h2><strong>Nossas Soluções</strong></h2>
            <p class="colorFontDefault">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed<br />
              condimentum mi, amet posuere ante. Vestibulum ac rutrum
            </p>
            <div class="row spaceParcOurSolution">
              <div class="col-md-6">
                <img src="../assets/estrategiaNegocio.png" alt="Negocio" />
                <h5><strong>Estratégia de negócio<br/>/tecnologia</strong></h5>
                <p class="colorFontDefault">
                  Lorem ipsum dolor sit amet<br/>
                  consectur adipiscing elit.Nunc<br/>
                  sed condimentum mi, sit amet
                </p>
              </div>
              <div class="col-md-6">
                <img src="../assets/transformacaoDigital.png" alt="Transformacao" />
                <h5><strong>Transformação<br/>Digital</strong></h5>
                <p class="colorFontDefault">
                  Lorem ipsum dolor sit amet<br/>
                  consectur adipiscing elit.Nunc<br/>
                  sed condimentum mi, sit amet
                </p>
              </div>
            </div>
            <div class="row spaceParcOurSolution">
              <div class="col-md-6">
                <img src="../assets/sustentacaoAplicacao.png" alt="Sustentacao" />
                <h5><strong>Sustentação<br/>de Aplicações</strong></h5>
                <p class="colorFontDefault">
                  Lorem ipsum dolor sit amet<br/>
                  consectur adipiscing elit.Nunc<br/>
                  sed condimentum mi, sit amet
                </p>
              </div>
              <div class="col-md-6">
                <img src="../assets/squadDesenvolvimento.png" alt="Squad" />
                <h5><strong>Squad de<br/>Desenvolvimento</strong></h5>
                <p class="colorFontDefault">
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
            <img src="../assets/torre.png" alt="Torre" class="img-responsive" />
          </div>
        </div>
      </div>
      <div class="row" style=" background-color: #910045;border-color: #910045;">
        <div class="container">
          <div class="row">
            <div class="col-md-12" style="text-align:center;margin-bottom: 80px">
              <img src="../assets/selos.png" alt="Torre" class="img-responsive" />
            </div>
          </div>
        </div>
      </div>
      <div class="row autoHeight" style="background-color:#292A35;border-bottom-left-radius: 5%;border-bottom-right-radius: 5%;height:1500px">
        <div class="container" style="margin-top:30px">
          <div class="col-md-12" style="text-align:center">
            <h4 style="color:white;">Cases de sucesso</h4>
            <h3 style="color:white;"><strong>Soluções integradas em tecnologia para<br/>diversas áreas do mercado.</strong></h3>
            <img src="../assets/clientes.png" alt="Torre" class="img-responsive" />
          </div>
          <div class="col-md-12" style="margin-top:50px;text-align:center">
            <input type="button" class="btn btn-default" style="height:50px;width:100px;font-weight:bold" value="mais" />
          </div>
        </div>
      </div>
      <div class="container" style="margin-top:80px">
        <app-testemonial></app-testemonial>
        <app-blog></app-blog>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style>
  @import '../assets/css/mainStyles.css';
</style>
