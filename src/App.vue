<template>
  <div id="app">
     <div class="row header">
       <div class="col-md-6" style="">
         <img src="./assets/iconLogoSis.png" class="iconSocialMediaHeader" style="padding-left: 15%" />
       </div>
       <div class="col-md-6" style="text-align:right">
          <a href="#"><img alt="" src="./assets/iconInstagramDark.png" height="20" class="iconSocialMediaHeader" /></a>
          <a href="#"><img alt="" src="./assets/iconFacebook.png" class="iconSocialMediaHeader" /></a>
          <a href="#"><img alt="" src="./assets/iconLinkedinDark.png" height="20" class="iconSocialMediaHeader" /></a>
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
              <li class="navLi"><a href="#">Home</a></li>
              <li class="nav-item dropdown navLi">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Somos SIS
                </a> 
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Sobre</a></li>
                  <li><a class="dropdown-item" href="#">Missão, Visão e Valores</a></li>
                  <li><a class="dropdown-item" href="#">Clientes e Parceiros</a></li>
                  <li><a class="dropdown-item" href="#">Certificações e Premiações</a></li> 
                  <li class="dropdown dropdown-submenu">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Carreira
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Junte-se ao Time (Portal de Vagas)</a></li>
                        <li><a class="dropdown-item" href="#">Employer branding / Atração/ Retenção de colaboradores</a></li>  
                      </ul>
                  </li>
                  <li>  <a class="dropdown-item" href="#">Inova SIS (Academia, Palestras e treinamentos)</a></li>
                  <li>  <a class="dropdown-item" href="#">Aprendizagem na SIS</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown navLi">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Soluções Tecnológicas
                </a> 
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Cloud Computing</a></li>
                  <li><a class="dropdown-item" href="#">Soluções de BI, Big data e Analytics</a></li>
                  <li><a class="dropdown-item" href="#">Machine learning e Deep learning</a></li>
                  <li><a class="dropdown-item" href="#">Soluções de ERP</a></li>    
                  <li><a class="dropdown-item" href="#">Outsystem</a></li>
                  <li><a class="dropdown-item" href="#">Cases de Sucesso</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown navLi">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Transformação
                </a> 
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Design Thinking (Ricardo)</a></li>
                  <li><a class="dropdown-item" href="#">Devops</a></li>
                  <li><a class="dropdown-item" href="#">Consultoria de Negócios</a></li>    
                  <li><a class="dropdown-item" href="#">Mapeamento e Revisão de Processos</a></li>
                  <li><a class="dropdown-item" href="#">UX (Ricardo)</a></li>
                  <li><a class="dropdown-item" href="#">Transformação Digital</a></li>
                </ul>
              </li>
              <li class="navLi"><a href="#">Blog</a></li>
              <li class="navLi"><a href="#" class="last">Contato</a></li>
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
                  <img src="./assets/instagramEscuro.png" alt="share" />
                </div>
                <div class="col-md-2">
                  <img src="./assets/facebookEscuro.png" alt="share" />
                </div>
                <div class="col-md-2">
                  <img src="./assets/linkedinEscuro.png" alt="share" />
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