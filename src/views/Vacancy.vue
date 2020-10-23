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
        <div id="div-vacancy-highlights">
            <div class="row">
                <div class="col-md-4 title">
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
                <div class="row vacancy-item">
                <div class="col-md-10">
                    <h3>Vaga 1 <img src="../assets/eye.png" /> </h3>
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
                <div class="row vacancy-item">
                <div class="col-md-10">
                    <h3>Vaga 1 <img src="../assets/eye.png" /></h3>
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
                <div class="row vacancy-item">
                <div class="col-md-10">
                    <h3>Vaga 1 <img src="../assets/eye.png" /></h3>
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
                <div class="row vacancy-item">
                <div class="col-md-10">
                    <h3>Vaga 1 <img src="../assets/eye.png" /></h3>
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vacancy'
    }
</script>

<style>
  @import '../assets/css/mainStyles.css';
</style>