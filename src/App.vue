<template>
  <div id="app">
     <div class="row header">
       <div class="col-md-6" style="">
         <img src="./assets/iconLogoSis.png" class="iconSocialMediaHeader" style="padding-left: 15%" />
       </div>
       <div class="col-md-6" style="text-align:right">
          <a v-bind:href="urlInstagram" target="_blank">
            <img alt="" src="./assets/iconInstagramDark.png" height="20" class="iconSocialMediaHeader" />
            </a>
          <a v-bind:href="urlFacebook" target="_blank">
            <img alt="" src="./assets/iconFacebook.png" class="iconSocialMediaHeader" />
          </a>
          <a v-bind:href="urlLinkedin" target="_blank">
            <img alt="" src="./assets/iconLinkedinDark.png" height="20" class="iconSocialMediaHeader" />
          </a>
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
            <ul class="nav navbar-nav navbar-right navPai"> 
               <li class="dropdown">
                  <a href="#" class="dropdown-toggle orange" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">SOMOS SIS <span class="caret"></span></a>
                  <ul class="dropdown-menu navSomosSis">
                    <li><a class="dropdown-item" href="#">Sobre</a></li>
                    <li><a class="dropdown-item" href="#">Clientes e Parceiros</a></li>
                    <li><a class="dropdown-item" href="#/successCases">Cases de Sucesso</a></li>  
                  </ul>
              </li>   
              <li class="dropdown">
                <a class="dropdown-toggle purple" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  SERVIÇOS E SOLUÇÕES TECNOLÓGICAS <span class="caret"></span>
                </a> 
                <ul class="dropdown-menu navSolucoes">  
                  <li><a class="dropdown-item" href="#">Consultoria Estratégica</a></li>
                  <li><a class="dropdown-item" href="#">Desenvolvimento Web, Mobile e Mainframe</a></li>
                  <li><a class="dropdown-item" href="#">Sustentação de Ambientes</a></li>
                  <li><a class="dropdown-item" href="#">Dados e Inteligência Aplicada </a></li>    
                  <li><a class="dropdown-item" href="#">Serviços de Cloud Computing</a></li>
                  <li><a class="dropdown-item" href="#">Soluções de ERP </a></li>
                  <li><a class="dropdown-item" href="#">Soluções de Low Code (Outsystem, PEGA)</a></li>
                  <li><a class="dropdown-item" href="#">Quality Assurance</a></li>
                  <li><a class="dropdown-item" href="#">Sustentação de Ambientes e Canais</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle pink" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  INOVAÇÃO <span class="caret"></span>
                </a> 
                <ul class="dropdown-menu navInovacao" >
                  <li><a class="dropdown-item" href="#">Agile Coaching em metodologias e frameworks ágeis </a></li>
                  <li><a class="dropdown-item" href="#">Design Thinking</a></li>
                  <li><a class="dropdown-item" href="#">Transformação Digital</a></li>    
                  <li><a class="dropdown-item" href="#">Celulas Ágeis - Squads</a></li>
                  <li><a class="dropdown-item" href="#">User Experience e User Interface (UX/UI)</a></li>
                  <li><a class="dropdown-item" href="#">Devops</a></li>
                </ul>
              </li>
              <li class="dropdown">
                  <a href="#" class="dropdown-toggle orange" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CARREIRA <span class="caret"></span></a>
                  <ul class="dropdown-menu navSomosSis">
                    <li><a class="dropdown-item" href="#">Trabalhe Conosco</a></li>
                    <li><a class="dropdown-item" href="#">Employer Branding</a></li>
                    <li><a class="dropdown-item" href="#">Inova SIS</a></li>             
                    <li><a class="dropdown-item" href="#">Aprendizagem na SIS</a></li>
                  </ul>
              </li>
              <li class="dropdown"><a href="#" class="dropdown-item purple">BLOG</a></li>
              <li class="dropdown gray"><a href="#" class="dropdown-item ">CONTATO</a></li>
              <li class="dropdown " id="navTrabalheLi"><a href="#" class="navTrabalhe">TRABALHE NA SIS</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
      <div class="row footerSis">
        <div class="container">
          <div class="col-md-4" style="margin-top: 30px">
            <img src="./assets/logEscuro.png" alt="Logo">
            <p class="colorFontDefault" style="padding-left:5%">
              SIS | Soluções Integradas de Sistemas
              Desde 2003 Integramos tecnologia,
              processos e pessoas para atender às
              demandas mais desafiadoras do 
              mercado.
            </p>
          </div>
          <div class="col-md-4" style="margin-top:60px">
            <h4 style="color:white;margin-top:10px;text-align:center">Serviços</h4>
            <div class="row" style="padding-left: 36%">
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
          <div class="col-md-4" style="margin-top:60px">
            <h4 style="color:white;margin-top:10px;padding-left:20%">Contato</h4>
            <div class="row">
              <div class="col-md-12" style="margin-top:30px;padding-left:20%">
                <p class="colorFontDefault">
                  Email: contato@sisconsultoria.com.br<br/>
                  Fone: +55 (123) xxxx xxxx
                </p>
              </div>
              <div class="row" style="padding-top:30%;padding-left:15%">
                <div class="col-md-2">
                  <a v-bind:href="urlInstagram">
                    <img src="./assets/instagramEscuro.png" alt="share" />
                  </a>
                </div>
                <div class="col-md-2">
                  <a v-bind:href="urlFacebook">
                    <img src="./assets/facebookEscuro.png" alt="share" />
                   </a>
                </div>
                <div class="col-md-2">
                  <a v-bind:href="urlLinkedin">
                    <img src="./assets/linkedinEscuro.png" alt="share" />
                  </a>
                </div>
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

<script>
  export default {
    name: "App",
    data: () => {
      return {
        urlInstagram: "https://www.instagram.com/sisconsultoriati/",
        urlFacebook: "https://www.facebook.com/SISConsultoria1/",
        urlLinkedin: "https://www.linkedin.com/company/sisconsultoria/mycompany/"
      }   
    }
  }
</script>