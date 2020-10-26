<template>
    <div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="../assets/imgSlide1.png" class="imgSlider">
          </div>
          <div class="item">
            <img src="../assets/imgSlider2.png" class="imgSlider">
          </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/otherAbout.png" style="position: relative; top:-30px" />
          </div>
          <div class="col-md-6">
            <h2><strong>Somos SIS</strong></h2>
            <h4 style="color:#EF4025"><strong>#SomosSoluções</strong></h4>
            <p class="colorFontDefault" style="font-weight:normal">
              A SIS Consultoria é uma empresa provedora de serviços e soluções<br/>
              integradas de sistemas, alinhada com<br/>
              as principais estratégias corporativas, através de uma equipe altamente<br/>
              qualificada. Nossa experiência e comprometimento traduzem o alto nível
            </p>
            <div class="row" style="padding-top: 29%">
              <div class="col-md-3">
                <input type="button" class="btn btn-primary" value="SAIBA MAIS" style="height:50px; background-color:#0074F8; border-color:#0074F8" />
              </div>
              <div class="col-md-2">
                <a v-bind:href="urlInstagram" target="_blank">
                  <img src="../assets/instagramBackgroundWhite.png" alt="share" />
                </a>
              </div>
              <div class="col-md-2">
                 <a v-bind:href="urlFacebook" target="_blank">
                  <img src="../assets/facebookBranco.png" alt="share" />
                 </a>
              </div>
              <div class="col-md-2">
                 <a v-bind:href="urlLinkedin" target="_blank">
                  <img src="../assets/linkedinBranco.png" alt="share" style="padding-top:5%" />
                 </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:30px;margin-bottom: 100px">
          <div class="col-md-6">
            <h2 style="padding-bottom: 100px"><strong>Nossas Soluções</strong></h2>
            <div class="row spaceParcOurSolution">
              <div class="col-md-6">
                <img src="../assets/estrategiaNegocio.png" alt="Negocio" />
                <h5><strong>Estratégia de negócio<br/>/tecnologia</strong></h5>
                <p class="colorFontDefault">
                  Somos altamente qualificados e
                  alinhados as principais práticas e 
                  tendências.Investimos 
                  constantemente no corpo 
                  estratégico, gerencial e nas equipes
                  multidisciplinares, contemplando 
                  aspectos de negócio, técnicos e 
                  comportamentais.
                </p>
              </div>
              <div class="col-md-6">
                <img src="../assets/transformacaoDigital.png" alt="Transformacao" />
                <h5><strong>Transformação<br/>Digital</strong></h5>
                <p class="colorFontDefault">
                  Atuamos em diversos projetos de 
                  desenvolvimento de novas 
                  funcionalidades, para diferentes 
                  ativos digitais e modalidades de 
                  serviços, bem como no 
                  desenvolvimento ágil, web e 
                  mobile.
                </p>
              </div>
            </div>
            <div class="row spaceParcOurSolution">
              <div class="col-md-6">
                <img src="../assets/sustentacaoAplicacao.png" alt="Sustentacao" />
                <h5><strong>Sustentação<br/>de Aplicações</strong></h5>
                <p class="colorFontDefault">
                  Temos um time completo de 
                  desenvolvimento, composto por 
                  arquitetos técnicos, product 
                  owners, Scrum Masters, UX/UI, 
                  desenvolvedores e engenheiros 
                  DevOps. Assim, possibilitamos o 
                  desenvolvimento de novos 
                  produtos e projetos de forma ágil.
                </p>
              </div>
              <div class="col-md-6">
                <img src="../assets/squadDesenvolvimento.png" alt="Squad" />
                <h5><strong>Squad de<br/>Desenvolvimento</strong></h5>
                <p class="colorFontDefault">
                  Oferecemos uma gestão corretiva, 
                  adaptativa e evolutiva dos sistemas 
                  de tecnologia utilizados 
                  diariamente em uma empresa.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/torre.png" alt="Torre" class="img-responsive" />
          </div>
        </div>
      </div>
      <div class="row" style=" background-color: #910045;border-color: #910045;">
        <div class="container" style="text-align:center;padding-top:2%">
          <div class="row">
            <div class="col-md-3" style="z-index: 999;">
             <img src="../assets/hourProject.png" alt="Hour" class="imgCounterDataSis" />
             <div class="textCounterDataSis">
               <span>
                 <span id="idCounterHourProject"></span> milhão de <br/>
                 horas de projetos <br/>
                 nos últimos 4 anos
               </span>
               
             </div>
            </div>
            <div class="col-md-3" style="z-index: 999;">
             <img src="../assets/collaborators.png" alt="Hour" class="imgCounterDataSis" />
             <div class="textCounterDataSis">
               <span>
                 <span id=idCounterEmployer></span> colaboradores
               </span>
             </div>
            </div>
            <div class="col-md-3" style="z-index: 999;">
             <img src="../assets/training.png" alt="Hour" class="imgCounterDataSis" />
             <div class="textCounterDataSis">
               <span>
                 <span id="idCounterTraining"></span> mil horas de <br/>
                 treinamentos no ano
               </span>
             </div>
            </div>
            <div class="col-md-3" style="z-index: 999;">
             <img src="../assets/projects.png" alt="Hour" class="imgCounterDataSis" />
             <div class="textCounterDataSis">
               <span>
                 <span id="idCounterProject"></span> projetos nos <br/>
                 últimos 4 anos
               </span>
             </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 middlePartImgVideo" @click="openModalVideoTour()"></div>
      </div>
      <div class="container" style="margin-top:80px">
        <app-testemonial></app-testemonial>
        <app-blog></app-blog>
      </div>
      
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModalVideo()">&times;</span>
           <div class="row">
            <div class="col-md-12">
              <video id="videoTour" width="100%" height="500" controls>
                <source v-bind:src="urlVideo">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.prototype.$startedCounterHourProject = false;
    Vue.prototype.$startedCounterEmployer = false;
    Vue.prototype.$startedCounterTraining = false;
    Vue.prototype.$startedCounterProject = false;

    export default {
        name: "home",
        data: () => {
          return {
            urlInstagram: "https://www.instagram.com/sisconsultoriati/",
            urlFacebook: "https://www.facebook.com/SISConsultoria1/",
            urlLinkedin: "https://www.linkedin.com/company/sisconsultoria/mycompany/",
            urlVideo : "http://192.168.30.91/video/videoSis.mp4"
          }          
        },
        created() {
          window.addEventListener('scroll', this.handleScroll);
        },
         destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
          openModalVideoTour(){
            var modal = document.getElementById("myModal");

            modal.style.display = "block";

            var video = document.getElementById("videoTour");

            video.play();
          },
          closeModalVideo(){
            var modal = document.getElementById("myModal");

            var video = document.getElementById("videoTour");
            video.pause(); 
            video.currentTime = 0;
            video.load();

            modal.style.display = "none";
          },
          animateCounterHourProject(id, start, end, duration, addicionalValue, subsitute) {       
              if (!this.$startedCounterHourProject) {
                  if (start === end) return;
                  this.$startedCounterHourProject = true;
                  var range = end - start;
                  var current = start;
                  var increment = end > start ? 1 : -1;
                  var stepTime = Math.abs(Math.floor(duration / range));
                  var obj = document.getElementById(id);
                  var timer = setInterval(function () {
                      current += increment;
                      obj.innerHTML = current;
                     if(current == end) {
                        clearInterval(timer);

                        if(addicionalValue !== "") {
                          if(subsitute){
                            obj.innerHTML = addicionalValue;
                          }
                          else{
                            obj.innerHTML = subsitute + current
                          }
                        }
                      }
                  }, stepTime);
              }
            },
            animateCounterEmployer(id, start, end, duration, addicionalValue, subsitute) {       
              if (!this.$startedCounterEmployer) {
                  if (start === end) return;
                  this.$startedCounterEmployer = true;
                  var range = end - start;
                  var current = start;
                  var increment = end > start ? 1 : -1;
                  var stepTime = Math.abs(Math.floor(duration / range));
                  var obj = document.getElementById(id);
                  var timer = setInterval(function () {
                      current += increment;
                      obj.innerHTML = current;
                      if(current == end) {
                        clearInterval(timer);

                        if(addicionalValue !== "") {
                          if(subsitute){
                            obj.innerHTML = addicionalValue;
                          }
                          else{
                            obj.innerHTML = subsitute + current
                          }
                        }
                      }
                  }, stepTime);
              }
            },
            animateCounterTraining(id, start, end, duration, addicionalValue, subsitute) {       
              if (!this.$startedCounterTraining) {
                  if (start === end) return;
                  this.$startedCounterTraining = true;
                  var range = end - start;
                  var current = start;
                  var increment = end > start ? 1 : -1;
                  var stepTime = Math.abs(Math.floor(duration / range));
                  var obj = document.getElementById(id);
                  var timer = setInterval(function () {
                      current += increment;
                      obj.innerHTML = current;
                      if(current == end) {
                        clearInterval(timer);

                        if(addicionalValue !== "") {
                          if(subsitute){
                            obj.innerHTML = addicionalValue;
                          }
                          else{
                            obj.innerHTML = subsitute + current
                          }
                        }
                      }
                  }, stepTime);
              }
            },
            animateCounterProject(id, start, end, duration, addicionalValue, subsitute) {       
              if (!this.$startedCounterProject) {
                  if (start === end) return;
                  this.$startedCounterProject = true;
                  var range = end - start;
                  var current = start;
                  var increment = end > start ? 1 : -1;
                  var stepTime = Math.abs(Math.floor(duration / range));
                  var obj = document.getElementById(id);
                  var timer = setInterval(function () {
                      current += increment;
                      obj.innerHTML = current;
                      if(current == end) {
                        clearInterval(timer);

                        if(addicionalValue !== "") {
                          if(subsitute){
                            obj.innerHTML = addicionalValue;
                          }
                          else{
                            obj.innerHTML = subsitute + current
                          }
                        }
                      }
                  }, stepTime);
              }
            },
            handleScroll() {
                this.animateCounterHourProject('idCounterHourProject', 0, 1500, 5000, "+1,5", true);
                this.animateCounterEmployer('idCounterEmployer', 0, 300, 5000, "+300", true);     
                this.animateCounterTraining('idCounterTraining', 0, 400, 5000, "+40", true);       
                this.animateCounterProject('idCounterProject', 0, 300, 5000, "+3600", true);     
            }
        }
    }
</script>

<style>
  @import '../assets/css/mainStyles.css';
  @import '../assets/css/modalCustom.css';
</style>
