<template >
   <body class="dark:bg-gray-800 bg-white">
     <!-- body -->
     <body>
      <!-- url -->
      <section class="text-gray-600 body-font dark:bg-gray-600 mb-10">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mx-auto leading-relaxed xl:mb-4 text-gray-900 dark:text-gray-300">GameMasterHQ </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-900 dark:text-gray-300">djdkjfhdkjhd </p>
    </div>
     
  </div>
</section>


     </body>
     <!-- body -->


   </body>
</template>

<script>
// import axios from "axios";
export default{
  components: {
  
  },
  data(){
    return {
     
    }
  },
   computed: {
     
    },
 
  mounted() {
   
  },
  methods: {
    
   
  }
}
  
</script>

<style scoped>

.loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
    }

  .section {
  /* max-height: 600px; */
  
  /* overflow-y: auto; */
  direction: ltr;
  scrollbar-color: rgb(191, 214, 212) #e4e4e4;
  scrollbar-width: thin;
}
.section::-webkit-scrollbar {
  width: 8px;
}
.section::-webkit-scrollbar-track {
  background-color: rgb(191, 214, 212);
  border-radius: 100px;
}
.section::-webkit-scrollbar-thumb {
  border-radius: 100px;
  /* background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%); */
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}



h1 {
    position: relative;
    color: rgba(114, 111, 111, 0.3);
    font-size: 4em
}



h1:before {
    content: attr(data-text);
    position: absolute;
    overflow: hidden;
    max-width: 10em;
    white-space: nowrap;
    color: rgb(88, 142, 224);
    animation: loading 10s  linear infinite;
}
@keyframes loading {
    0% {
        max-width: 0;
    }
}

.btn2 span:first-child{
  transform: translateX(-101%);
  transition: transform .3s ease-in
}
.btn2:hover span{
  transform: translateX(0)
}

.btn3 span:first-child{
  transform: translateX(-101%);
  transition: transform .3s ease-in
}
.btn3:hover span{
  transform: translateX(0)
}


</style>
