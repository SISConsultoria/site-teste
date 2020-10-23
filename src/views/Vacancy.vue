<template>
    <div id="vacancy-page">
        <div class="row header">
            <div>
                <h1>Você
                    <br/>
                    na SIS
                </h1>
            </div>
            <div class="row" id="div-search">
                <div class="col-md-2"><span>Confira nossas vagas</span></div>
                <div class="col-md-4"><input type="text" placeholder="PALAVRA CHAVE" /></div>
                <div class="col-md-4"><input type="text" placeholder="LOCAL" /></div>
                <div class="col-md-2"><button class="send-button">Buscar</button></div>
            </div>
        </div>
        <div id="div-vacancy-highlights"  style="display: block;">
            <div class="row">
                <div class="col-md-4 title">
                    <h2>Venha fazer parte do nosso time</h2>
                    <img src="../assets/vacancy-people.png" />
                </div>
                <div class="col-md-8">
                    <div class="row vacancy-item">
                        <div class="col-md-7">
                            <h2>Função destaque1</h2>
                            <p>
                                Descrição da função e skills necessárias descrição da função e skills 
                                necessárias Descrição da função e skills necessárias descrição da função e 
                                skills necessárias da função e skills necessárias Descrição da função e 
                                skills necessárias
                            </p>
                        </div>
                        <div class="col-md-5 div-signin">
                            <button class="send-button">Candidatar-se</button>
                        </div>
                    </div>
                    <div class="row"><hr class="separator-bar" /></div>
                    <div class="row vacancy-item">
                        <div class="col-md-7">
                            <h2>Função destaque1</h2>
                            <p>
                                Descrição da função e skills necessárias descrição da função e skills 
                                necessárias Descrição da função e skills necessárias descrição da função e 
                                skills necessárias da função e skills necessárias Descrição da função e 
                                skills necessárias
                            </p>
                        </div>
                        <div class="col-md-5 div-signin">
                            <button class="send-button">Candidatar-se</button>
                        </div>
                    </div>
                    <div class="row"><hr class="separator-bar" /></div>
                    <div class="row vacancy-item">
                        <div class="col-md-7">
                            <h2>Função destaque1</h2>
                            <p>
                                Descrição da função e skills necessárias descrição da função e skills 
                                necessárias Descrição da função e skills necessárias descrição da função e 
                                skills necessárias da função e skills necessárias Descrição da função e 
                                skills necessárias
                            </p>
                        </div>
                        <div class="col-md-5 div-signin">
                            <button class="send-button">Candidatar-se</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="div-tecnology">
                <div class="description">
                    <p>Área de atuação:</p>
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex" >
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/java.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/dotnet.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/android.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/ios.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/ionic.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/python.png" /></a></div>
                        <div class="img-item-tec"><a href="javascript:;"><img src="../assets/cobol.png" /></a></div>
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
        <div id="div-result-search" style="display: none;">
            <div class="row">
                <div class="col-md-12">
                    <p>Resultados da busca:</p>
                </div>
            </div>
                <div class="row vacancy-item-normal">
                <div class="col-md-10">
                    <h3>Vaga 1 <a href="javascript:;" class="show-details" @click="showDetails('1')"><img id="img-1" src="../assets/eye.png" /></a></h3>
                    <div id="job-details-1" class="job-details" style="display: none;">
                        <p class="job-details-title">Nome da Vaga</p>
                        <span>
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                        </span><br /><br />
                        - <span>Destaque 1</span><br />
                        - <span>Destaque 2</span><br />
                        - <span>Destaque 3</span><br />
                        - <span>Destaque 4</span><br />
                    </div>
                    <p>Descrição da função e skills necessárias descrição da função e 
                        skills necessárias Descrição da função e skills necessárias 
                        descrição da função e skills necessárias da função e skills 
                        necessárias Descrição da função e skills necessárias:
                    </p>
                </div>
                <div class="col-md-2  div-signin">
                    <button class="send-button">Candidatar-se</button>
                </div>
            </div>
            <div class="row"><hr class="separator-bar" /></div>
                <div class="row vacancy-item-normal">
                <div class="col-md-10">
                    <h3>Vaga 1 <a href="javascript:;" class="show-details" @click="showDetails('2')"><img id="img-2" src="../assets/eye.png" /></a></h3>
                    <div id="job-details-2" class="job-details" style="display: none;">
                        <p class="job-details-title">Nome da Vaga</p>
                        <span>
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                        </span><br /><br />
                        - <span>Destaque 1</span><br />
                        - <span>Destaque 2</span><br />
                        - <span>Destaque 3</span><br />
                        - <span>Destaque 4</span><br />
                    </div>
                    <p>Descrição da função e skills necessárias descrição da função e 
                        skills necessárias Descrição da função e skills necessárias 
                        descrição da função e skills necessárias da função e skills 
                        necessárias Descrição da função e skills necessárias:
                    </p>
                </div>
                <div class="col-md-2  div-signin">
                    <button class="send-button">Candidatar-se</button>
                </div>
            </div>
            <div class="row"><hr class="separator-bar" /></div>
                <div class="row vacancy-item-normal">
                <div class="col-md-10">
                    <h3>Vaga 1 <a href="javascript:;" class="show-details" @click="showDetails('3')"><img id="img-3" src="../assets/eye.png" /></a></h3>
                    <div id="job-details-3" class="job-details" style="display: none;">
                        <p class="job-details-title">Nome da Vaga</p>
                        <span>
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                        </span><br /><br />
                        - <span>Destaque 1</span><br />
                        - <span>Destaque 2</span><br />
                        - <span>Destaque 3</span><br />
                        - <span>Destaque 4</span><br />
                    </div>
                    <p>Descrição da função e skills necessárias descrição da função e 
                        skills necessárias Descrição da função e skills necessárias 
                        descrição da função e skills necessárias da função e skills 
                        necessárias Descrição da função e skills necessárias:
                    </p>
                </div>
                <div class="col-md-2  div-signin">
                    <button class="send-button">Candidatar-se</button>
                </div>
            </div>
            <div class="row"><hr class="separator-bar" /></div>
                <div class="row vacancy-item-normal">
                <div class="col-md-10">
                    <h3>Vaga 1 <a href="javascript:;" class="show-details" @click="showDetails('4')"><img id="img-4" src="../assets/eye.png" /></a></h3>
                    <div id="job-details-4" class="job-details" style="display: none;">
                        <p class="job-details-title">Nome da Vaga</p>
                        <span>
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                            Descrição da função e skills necessárias descrição da função e 
                            skills necessárias Descrição da função e skills necessárias 
                            descrição da função e skills necessárias da função e skills 
                            necessárias Descrição da função e skills necessárias.
                        </span><br /><br />
                        - <span>Destaque 1</span><br />
                        - <span>Destaque 2</span><br />
                        - <span>Destaque 3</span><br />
                        - <span>Destaque 4</span><br />
                    </div>
                    <p>
                        Descrição da função e skills necessárias descrição da função e 
                        skills necessárias Descrição da função e skills necessárias 
                        descrição da função e skills necessárias da função e skills 
                        necessárias Descrição da função e skills necessárias:
                    </p>
                </div>
                <div class="col-md-2  div-signin">
                    <button class="send-button">Candidatar-se</button>
                </div>
            </div>
        </div>
        <div id="send-curriculum" style="display: none;">
            <div class="row">
                <div id="div-curriculum-details" class="col-md-6" style="display: block;">
                    <h3>Vaga não disponível</h3>
                    <p>Descrição da função e skills necessárias descrição da função e skills 
                       necessárias Descrição da função e skills necessárias descrição da função 
                       e skills ecessárias da funDescrição da função e skills necessárias 
                       descrição da função e skills necessárias. 
                       Descrição da função e skills necessárias descrição da função e skills 
                       necessárias da função e skills necessárias Descrição da função e skills 
                       ação e skills necessárias Descrição da função e skills necessárias 
                    </p>
                       - <span>Destaque 1</span><br />
                       - <span>Destaque 2</span><br />
                       - <span>Destaque 3</span><br />
                       - <span>Destaque 4</span><br />
                </div>
                <div id="div-curriculum-not-found" class="col-md-6" style="display: none;">
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
    export default {
        name: 'vacancy',
        methods: {
            showDetails: function (id) {
                console.log(id);
                var modal = document.getElementById("job-details-" + id);
                if(modal.style.display == "block") {
                    modal.style.display = "none";
                }
                else {
                    var details = document.getElementsByClassName("job-details");
                    for(let x = 0; x < details.length; x++){
                        (details[x]).style.display =  "none";
                    }
                    modal.style.display = "block";
                }
                
            }
        }
    }
</script>

<style>
  @import '../assets/css/mainStyles.css';
</style>