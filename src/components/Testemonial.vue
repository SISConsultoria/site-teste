<template>
    <div>
        <div class="row" style="text-align:center">
            <div class="col-md-12">
                <h2 class="colorTitle"><strong>Quem é SIS?</strong></h2>
                <p class="colorFontDefault">
                    <strong>O que nossos cliente andam dizendo?</strong>
                </p>
            </div>
            <div class="col-md-12" style="padding-left:44%">
                <img src="../assets/picFollower.png" alt="Foto" class="img-responsive" />
            </div>
            <div class="col-md-12" style="margin-bottom: 50px" v-for="testemonial in listTestemonial" :key="testemonial.testemonialId">
                <p class="colorFontDefault" style="overflow-wrap: break-word;">
                    <strong>{{testemonial.description}}</strong>
                </p>
                <p>
                    <span style="color:#0074F8"><strong>{{testemonial.personName}}</strong></span> <span class="colorFontDefault">{{testemonial.personPosition}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'Testemonial',
        data: () => {
            return {
                listTestemonial: []
            }
        },
        created() {
          this.getTestemonial();
        },
        methods: {
          getTestemonial(){
            axios.get('api/testemonial')
                 .then((result) => 
                 {
                   this.listTestemonial = result.data
                 });
            }
        }
    }
</script>