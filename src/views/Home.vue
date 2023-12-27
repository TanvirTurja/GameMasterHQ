<template >
   <body class="dark:bg-gray-800 bg-white">
     <!-- body -->
     <body>
      <!-- url -->
      <section class="text-gray-600 body-font dark:bg-gray-600 mb-10">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mx-auto leading-relaxed xl:mb-4 text-gray-900 dark:text-gray-300">GameMasterHQ </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-900 dark:text-gray-300">the ultimate destination for gamers seeking comprehensive information and resources across all gaming platforms. As a premier website dedicated to the world of gaming, GameMasterHQ offers a wealth of valuable content and features designed to enhance the gaming experience for enthusiasts of all levels. </p>
    </div>
    <form @submit.prevent="store">
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

      <div class="relative flex-grow w-full">
        <input type="text" name="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="text" placeholder="Enter ....">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Summarize</button>
    </div>
      </form>
     
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto" v-show="this.summary != 0">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">{{summary}}</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      
    </div>
  </div>
  <div v-show=" this.showloading == true ">
    <div id="loading" class="loading-container">
    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
  </div>

  </div>
</section>


     </body>
     <!-- body -->


   </body>
</template>

<script>
 import axios from "axios";
export default{
  components: {
  
  },
  data(){
    return {
       text :'',
        summary : '',
        showloading : false
     
    }
  },
  created() {
    this.getInfo()
  },
   computed: {
     
    },
 
  mounted() {
   
  },
  methods: {
     store(){
        this.getSummary()
      },
       async getSummary(){
        
        this.showloading = true

        try {
          
          const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: import.meta.env.VITE_API_KEY,
            search: this.text,
            page_size: 1,
             }
        })

        // console.log(response)
        this.summary = response.data.results[0]
        this.showloading = false
          
        } catch (error) {
          console.error(error)
          
        }
       


      },
      async getInfo(){
        try {
          
          const response = await axios.get('https://api.rawg.io/api/games', {
         params: {
          // Optional parameters
          key: import.meta.env.VITE_API_KEY,
          page: 1,
          page_size: 10}
        })

        // console.log(response)
       
        } catch (error) {
          console.error(error)
          
        }

       }
      

    
   
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
