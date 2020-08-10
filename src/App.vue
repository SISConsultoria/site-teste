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
          <a class="navbar-brand logo" href="/"><img alt="Brand" src="./assets/logoSis.png"></a>
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
      <router-view />
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
            <div class="row" style="margin-top:30px">
              <div class="col-md-2">
                <img src="./assets/twitterEscuro.png" alt="share" />
              </div>
              <div class="col-md-2">
                <img src="./assets/facebookEscuro.png" alt="share" />
              </div>
              <div class="col-md-2">
                <img src="./assets/instagramEscuro.png" alt="share" />
              </div>
              <div class="col-md-2">
                <img src="./assets/linkedinEscuro.png" alt="share" />
              </div>
              <div class="col-md-2">
                <img src="./assets/pinterestEscuro.png" alt="share" />
              </div>
            </div>
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

<style>
  @import './assets/css/mainStyles.css';
</style>