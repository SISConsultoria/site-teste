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
    <div class="container">
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
      <div class="row" style="margin-top:30px;">
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
          <img src="./assets/torre.png" alt="Torre" class="img-responsive" />
        </div>
      </div>
    </div>
    <div class="row" style="background-color:#292A35;border-bottom-left-radius: 30%;border-bottom-right-radius: 30%">
      <div class="container" style="margin-top:30px">
        <h4 style="color:white;text-align:center">Cases de sucesso</h4>
        <h3 style="color:white;text-align:center"><strong>Soluções integradas em tecnologia para<br/>diversas áreas do mercado.</strong></h3>
      </div>
    </div>
    <div class="row footerSis">
      <div class="container">
        <div class="col-md-3" style="margin-top: 30px">
          <img src="./assets/logEscuro.png" alt="Logo">
          <p style="color:white;">
            Lorem ipsum dolor sit amet,<br/>
            consectur adipiscing elit. Nunc<br/>
            sed condimentum mi, sit amet<br/>
            possuere ante. Vestibulum ac rutrum <br/>
            enim, vel pulvinar diam, Curabitur ut
          </p>
        </div>
        <div class="col-md-3" style="margin-top:60px">
        <h4 style="color:white;margin-top:10px">Serviços</h4>
        <div class="row">
          <div class="col-md-12" style="margin-top:30px">
            <p style="color:white">
              Estratégia
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p style="color:white">
              Transformação digital
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p style="color:white">
              Sustentação
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p style="color:white">
              Desenvolvimento
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p style="color:white">
              Tecnologia SIS
            </p>
          </div>
        </div>
        </div>
        <div class="col-md-3" style="margin-top:60px">
          <h4 style="color:white;margin-top:10px">Contato</h4>
          <div class="row">
            <div class="col-md-12" style="margin-top:30px">
              <p style="color:white">
                Lorem ipsum dolor sit amet,<br/>
                consectur adipiscing elit. Nunc
              </p>
            </div>
            <div class="col-md-12" style="margin-top:30px">
              <p style="color:white">
                Email: contato@sisconsultoria.com.br<br/>
                Fone: +55 (123) xxxx xxxx
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3" style="margin-top:60px">
          <h4 style="color:white;margin-top:10px">Newsletter</h4>
          <div class="row">
            <div class="col-md-12" style="margin-top:30px">
              <input type="text" class="form-control" placeholder="Insira seu e-mail" style="height:40px;text-align:center" maxlength="60" />
            </div>
            <div class="col-md-12" style="margin-top:10px">
              <input type="button" class="btn btn-default" value="Receba novidades" style="background-color: #EF4025;border-color:#EF4025; width:100%; height:40px;color:white;font-weight: bold" />
            </div>
          </div>
        </div>
        <div class="col-md-12" style="margin-top: 50px">
          <hr style="color:white;width:100%" />
          <p style="text-align:right;color:white;margin-top:2px">Copyright 2020 por Ideia Brasil - Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
  @import './assets/css/mainStyles.css';
</style>
