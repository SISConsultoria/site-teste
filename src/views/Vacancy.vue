<template>
    <div id="vacancy-page">
        <div class="row header">
            <div>
                <h1>Você
                    <br/>
                    na SIS
                </h1>
            </div>
            <form v-on:submit="showResult()">
                <div class="row" id="div-search">
                    <div class="col-md-2"><span>Confira nossas vagas</span></div>
                    <div class="col-md-4"><input v-model="keyword" type="text" placeholder="PALAVRA CHAVE" /></div>
                    <div class="col-md-4"><input v-model="location" type="text" placeholder="LOCAL" /></div>
                    <div class="col-md-2"><button class="send-button">Buscar</button></div>
                </div>
            </form>
        </div>
        <div id="div-vacancy-highlights" v-if="showHightLight">
            <div class="row">
                <div class="col-md-4 title">
                    <h2>Venha fazer parte do nosso time</h2>
                    <img src="../assets/vacancy-people.png" />
                </div>
                <div class="col-md-8">
                    <div class="test" v-for="(vacItem, index) in listHightlights" :key="vacItem.idHightLight">
                        <div class="row vacancy-item">
                            <div class="col-md-7">
                                <h2>{{vacItem.name}}</h2>
                                <p>
                                    {{vacItem.abstract}}
                                </p>
                            </div>
                            <div class="col-md-5 div-signin">
                                <button class="send-button" v-on:click="loadVacancyJob(vacItem, 'highlight')">Candidatar-se</button>
                            </div>
                        </div>
                        <div class="row" v-if="index != listHightlights.length -1"><hr class="separator-bar" /></div>
                    </div>
                </div>
            </div>
            <div id="div-tecnology">
                <div class="description">
                    <p>Área de atuação:</p>
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex" >
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('java')"><img src="../assets/java.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('dotnet')"><img src="../assets/dotnet.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('android')"><img src="../assets/android.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('ios')"><img src="../assets/ios.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('ionic')"><img src="../assets/ionic.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('python')"><img src="../assets/python.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;" v-on:click="showAreaResult('cobol')"><img src="../assets/cobol.png" /></a></div>
                    </div>
                </div>
            </div>  
            <div id="div-benefits">
                <div class="description">
                    <h3>Benefícios de ser Família SIS:</h3>
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex" >
                        <div class="img-item-benefit">
                            <img src="../assets/gptw.png" />
                            <p class="text-center">Você em uma empresa com certificação GPTW</p>
                        </div>
                        <div class="img-item-benefit">
                            <img src="../assets/diamond.png" />
                            <p class="text-center">Você atingindo suas metas profissionais</p>
                        </div>
                        <div class="img-item-benefit">
                            <img src="../assets/pen.png" />
                            <p class="text-center">Você atingindo os seus objetivos pessoais</p>
                        </div>
                        <div class="img-item-benefit">
                            <img src="../assets/dual-lamp.png" />
                            <p class="text-center">Equipe Multidisciplinar</p>
                        </div>
                        <div class="img-item-benefit">
                            <img src="../assets/meditate.png" />
                            <p class="text-center">Incentivo a saúde e qualidade de vida</p>
                        </div>
                        <div class="img-item-benefit">
                            <img src="../assets/single-lamp.png" />
                            <p class="text-center">Treinamentos semanais</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div id="div-result-search" v-if="showSearch">
            <div class="row">
                <div class="col-md-12">
                    <a href="javascript:;" v-on:click="goBack();"><h4>Voltar</h4></a>
                    <p>Resultados da busca:</p>
                </div>
            </div>
            <div v-for="(vacItem, index) in listVacancy" :key="vacItem.idHightLight">
                <div class="row vacancy-item-normal">
                <div class="col-md-10">
                    <h3>
                        {{vacItem.name}} 
                        <a href="javascript:;" class="show-details" v-on:click="showDetails(vacItem.idHightLight)">
                            <img class="eye-image" :id="'img-' + vacItem.idHightLight" src="../assets/eye.png" />
                            <img class="eye-image-hover" :id="'img-hover-' + vacItem.idHightLight" src="../assets/eye-hover.png" style="display: none;" />
                        </a>
                    </h3>
                    <div :id="'job-details-' + vacItem.idHightLight" class="job-details" style="display: none;">
                        <p class="job-details-title">{{vacItem.name}}</p>
                        <span v-html="vacItem.description"></span><br /><br />
                        - <span>{{vacItem.highLightOne}}</span><br />
                        - <span>{{vacItem.highLightTwo}}</span><br />
                        - <span>{{vacItem.highLightThree}}</span><br />
                        - <span>{{vacItem.highLightFour}}</span><br />
                    </div>
                   <p v-html="vacItem.abstract"></p>
                </div>
                <div class="col-md-2 div-signin">
                    <button class="send-button" v-on:click="loadVacancyJob(vacItem, 'search')">Candidatar-se</button>
                </div>
            </div>
            <div class="row" v-if="index != listVacancy.length -1"><hr class="separator-bar" /></div>
            </div>
        </div>
        <div id="send-curriculum" v-if="showDetail">
            <div class="row">
                <div id="div-curriculum-details" class="col-md-6" v-if="!showNotFound">
                    <a href="javascript:;" v-on:click="goBack();"><h4>Voltar</h4></a>
                    <p>Detalhes da vaga:</p>
                    <h3>{{currentVacancy.name}}</h3>
                    <p v-html="currentVacancy.description"></p>
                       - <span>{{currentVacancy.highLightOne}}</span><br />
                       - <span>{{currentVacancy.highLightTwo}}</span><br />
                       - <span>{{currentVacancy.highLightThree}}</span><br />
                       - <span>{{currentVacancy.highLightFour}}</span><br />
                </div>
                <div id="div-curriculum-not-found" class="col-md-6" v-if="showNotFound">
                    <h3>Vaga não disponível</h3>
                    <p>Mas não se preocupe</p>
                    <h2>Faça o cadastro e envie para o banco de talentos da SIS.</h2>
                </div>
                <div id="div-curriculum-send" class="col-md-6">
                    <p>Preencha os campos:</p>
                        <form>
                        <div class="col-md-12 form-group">
                            <label for="txt-email">Insira o seu e-mail:*</label>
                            <input type="email" class="form-control" id="txt-email">
                        </div>
                        <div class="col-md-12 form-group">
                            <label for="txt-name">Nome:*</label>
                            <input type="text" class="form-control" id="txt-name">
                        </div>
                        <div class="col-md-12 form-group">
                            <label for="txt-last-name">Sobrenome:*</label>
                            <input type="text" class="form-control" id="txt-last-name">
                        </div>
                        <div class="col-md-12 form-group">
                            <label for="txt-phone">Telefone:*</label>
                            <input type="text" class="form-control" id="txt-phone">
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                               <label class="lbl-cv" for="upl-cv"><a href="javascript:;"><img src="../assets/upload.png" /> Faça o upload do seu CV</a></label>
                               <input id="upl-cv" type="file" class="upload-photo" />
                            </div>
                            <div class="col-md-6">
                               <button type="submit" class="send-button">Confirmar cadastro</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'vacancy',
        data: () => {
          return {
            listVacancy : [],
            listHightlights : [],
            showDetail : false,
            showSearch : false,
            showHightLight : true,
            showNotFound: false,
            currentVacancy : {},
            keyword: "",
            location: "",
            lastPage: ""
          }
        },
        created() {
          let url = 'api/vacancy/gethighlights';
          this.get(url).then(result => this.listHightlights = result.data);
        },
        methods: {
            showDetails: function (id) {
                let modal = document.getElementById("job-details-" + id);
                let img = document.getElementById("img-" + id);
                let imgHover = document.getElementById("img-hover-" + id);
                if(modal.style.display == "block") {
                    modal.style.display = "none";
                    img.style.display = "inline";
                    imgHover.style.display = "none";
                }
                else {
                    var details = document.getElementsByClassName("job-details");
                    var eye = document.getElementsByClassName("eye-image");
                    var eyeHover = document.getElementsByClassName("eye-image-hover");
                    for(let x = 0; x < details.length; x++){
                        (details[x]).style.display =  "none";
                        (eye[x]).style.display =  "inline";
                        (eyeHover[x]).style.display =  "none";
                    }
                    modal.style.display = "block";
                    imgHover.style.display = "inline";
                    img.style.display = "none";
                }
                
            },
            jump(h){
                var url = location.href;               //Save down the URL without hash.
                location.href = "#"+h;                 //Go to the target element.
                history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
            },
          loadVacancyJob(objVacancy, lastPage) {
            this.hideAll();
            this.currentVacancy = objVacancy;
            this.showDetail = true;
            this.showNotFound = false;
            this.lastPage = lastPage;
            this.jump('div-search');
          },
          hideAll(){
            this.showDetail = false;
            this.showSearch = false;
            this.showHightLight = false;
          },
          goBack(){
            this.hideAll();
            if(this.lastPage == "highlight")
            {
                this.showHightLight = true;
                this.showNotFound = true;
            }
            else {
                this.showSearch = true;
                this.lastPage = "highlight";
            }
            this.jump('div-search');
          },
          async showAreaResult(area){
            let url = 'api/vacancy/filter/' + area;
            await this.get(url).then(result => this.listVacancy = result.data);
            this.showSearchTab();
          },
          async showResult(){
            let location = this.location == "" ? "null" : this.location
            let keyword = this.keyword == "" ? "null" : this.keyword
            let url = 'api/vacancy/filter/' + keyword + '/' + location;
            await this.get(url).then(result => this.listVacancy = result.data);
            this.showSearchTab();
          },
          showSearchTab(){
            this.hideAll();
            this.lastPage = "highlight";
            console.log(this.listVacancy);
            if(this.listVacancy.length == 0){
                this.showDetail = true;
                this.showNotFound = true;
            }
            else{
                this.showSearch = true;
            }
            this.jump('div-search');
          },
          async get(url) {
            return await axios.get(url);
          }
        }
    }
</script>

<style>
  @import '../assets/css/mainStyles.css';
</style>