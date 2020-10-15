<template>
    <div>
        <div class="row">
            <div class="col-md-12" style="text-align:center">
                <p class="colorTitle" style="font-size: 25px;">
                    BLOG
                </p>
                <p class="colorTitle" style="font-size:30px"><strong>Novidades SIS</strong></p>
                <p class="colorFontDefault" style="font-size: 15px;">
                    <strong>Acompanhe as novidades sobre o mundo de tecnologia e soluções SIS</strong>
                </p>
            </div>
        </div>
        <div class="row" style="margin-bottom:100px; margin-top: 50px">
          <div class="col-md-4" v-for="blog in listBlog" :key="blog.blogId">
            <img src="../assets/blog-1.png" alt="blog 1" class="img-responsive" />
            <p style="color:#0074F8;margin-top:15px">{{blog.dateFull}}</p>
            <p class="colorTitle" style="font-size:18px"><strong>{{blog.title}}</strong></p>
            <p class="colorFontDefault" style="overflow-wrap: break-word;">
              {{blog.description}}
            </p>
            <div class="row">
              <div class="col-md-6">
                <span style="color:#EF4025">Leia mais</span>
              </div>
              <div class="col-md-6" style="text-align:right">
                <span><img src="../assets/shareSmall.png" alt="share" /></span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'Blog',
        data: () => {
          return {
            listBlog : []
          }
        },
        created() {
          
          this.getBlogs();
        },
        methods: {
          getBlogs(){
            axios.get('api/blog')
                 .then((result) => 
                 {
                   this.listBlog = result.data
                 });
          }
        }
    }
</script>