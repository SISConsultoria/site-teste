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
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand logo" href="#"><img alt="Brand" src="./assets/logoSis.png"></a>
        </div>

 


         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

 

          <ul class="nav navbar-nav navbar-right">
            <li class="navLi"><a href="#">Inicial</a></li>
            <li class="navLi"><a href="#">Serviços</a></li>
            <li class="navLi"><a href="#">Cases</a></li>
            <li class="navLi"><a href="#" class="last">Contato</a></li>
          </ul>
         </div>
      </div>
    </nav>
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
          <p class="colorFontDefault">
            A SIS Consultoria é uma empresa provedora de serviços e SomosSoluções<br/>
            integradas de sistemas, alinhada com<br/>
            as principais estratégias corporativas, através de uma equipe altamente<br/>
            qualificada. Nossa experiência e comprometimento traduzem o alto nível
          </p>
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
              <img src="./assets/estrategiaNegocio.png" alt="Negocio" />
              <h5><strong>Estratégia de negócio<br/>/tecnologia</strong></h5>
              <p class="colorFontDefault">
                Lorem ipsum dolor sit amet<br/>
                consectur adipiscing elit.Nunc<br/>
                sed condimentum mi, sit amet
              </p>
            </div>
            <div class="col-md-6">
              <img src="./assets/transformacaoDigital.png" alt="Transformacao" />
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
              <img src="./assets/sustentacaoAplicacao.png" alt="Sustentacao" />
              <h5><strong>Sustentação<br/>de Aplicações</strong></h5>
              <p class="colorFontDefault">
                Lorem ipsum dolor sit amet<br/>
                consectur adipiscing elit.Nunc<br/>
                sed condimentum mi, sit amet
              </p>
            </div>
            <div class="col-md-6">
              <img src="./assets/squadDesenvolvimento.png" alt="Squad" />
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
          <img src="./assets/torre.png" alt="Torre" class="img-responsive" />
        </div>
      </div>
    </div>
    <div class="row" style=" background-color: #910045;border-color: #910045;">
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="text-align:center;margin-bottom: 80px">
            <img src="./assets/selos.png" alt="Torre" class="img-responsive" />
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="background-color:#292A35;border-bottom-left-radius: 5%;border-bottom-right-radius: 5%;height:1500px">
      <div class="container" style="margin-top:30px">
        <div class="col-md-12" style="text-align:center">
          <h4 style="color:white;">Cases de sucesso</h4>
          <h3 style="color:white;"><strong>Soluções integradas em tecnologia para<br/>diversas áreas do mercado.</strong></h3>
          <img src="./assets/clientes.png" alt="Torre" class="img-responsive" />
        </div>
        <div class="col-md-12" style="margin-top:50px;text-align:center">
          <input type="button" class="btn btn-default" style="height:50px;width:100px;font-weight:bold" value="mais" />
        </div>
      </div>
    </div>
    <div class="container" style="margin-top:80px">
      <div class="row" style="text-align:center">
        <div class="col-md-12">
          <h2><strong>Quem é SIS?</strong></h2>
          <p class="colorFontDefault">
            <strong>O que nossos cliente andam dizendo?</strong>
          </p>
        </div>
        <div class="col-md-12">

        </div>
        <div class="col-md-12">
          <p class="colorFontDefault" style="font-size: 20px;">
            <strong>BLOG</strong>
          </p>
          <h2><strong>Novidades SIS</strong></h2>
          <p class="colorFontDefault" style="font-size: 15px;">
            <strong>Acompanhe as novidades sobre o mundo de tecnologia e soluções SIS</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="row footerSis">
      <div class="container">
        <div class="col-md-3" style="margin-top: 30px">
          <img src="./assets/logEscuro.png" alt="Logo">
          <p class="colorFontDefault">
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
            <p class="colorFontDefault">
              Estratégia
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p class="colorFontDefault">
              Transformação digital
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p class="colorFontDefault">
              Sustentação
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p class="colorFontDefault">
              Desenvolvimento
            </p>
          </div>
          <div class="col-md-12" style="margin-top:10px">
            <p class="colorFontDefault">
              Tecnologia SIS
            </p>
          </div>
        </div>
        </div>
        <div class="col-md-3" style="margin-top:60px">
          <h4 style="color:white;margin-top:10px">Contato</h4>
          <div class="row">
            <div class="col-md-12" style="margin-top:30px">
              <p class="colorFontDefault">
                Lorem ipsum dolor sit amet,<br/>
                consectur adipiscing elit. Nunc
              </p>
            </div>
            <div class="col-md-12" style="margin-top:30px">
              <p class="colorFontDefault">
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
          <p style="text-align:right;margin-top:2px" class="colorFontDefault">Copyright 2020 por Ideia Brasil - Todos os direitos reservados.</p>
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
