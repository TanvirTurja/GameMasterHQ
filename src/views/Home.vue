<template >
   <body class="dark:bg-gray-800 bg-white">
     <!-- body -->
     <body>
      <!-- url -->
      <section class="text-gray-600 body-font dark:bg-gray-600 ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mx-auto leading-relaxed xl:mb-4 text-gray-900 dark:text-gray-300">GameMasterHQ </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-900 dark:text-gray-300">the ultimate destination for gamers seeking comprehensive information and resources across all gaming platforms. As a premier website dedicated to the world of gaming, GameMasterHQ offers a wealth of valuable content and features designed to enhance the gaming experience for enthusiasts of all levels. </p>
    </div>
   
  </div>
</section>



<section class="text-gray-600 body-font dark:bg-gray-600">
  <div class="container px-5 py-24 mx-auto">
  
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0 flex px-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">New Popular Games </h1>
       
      </div>
   
      <!--  card -->
      
    <div class="flex flex-wrap " >
      <div class="xl:w-1/3 md:w-1/2 p-4  " v-for="i in this.results " :key="i">
       <router-link :to="{ name: 'SpecificGameInfo', params: { id: i.id } }">
        <div class="bg-gray-100  rounded-lg border-2">
          <img class="h-60 rounded w-full object-cover object-center mb-6" v-bind:src="i.background_image" alt="content">
          <section class="p-6">

          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{{i.released}}</h3>
          <h2 class="text-xl text-gray-900 font-bold title-font mb-4">{{i.name}}</h2>
          <div class="flex justify-between ">
            <div>

            <label for="">Genres</label>
            </div>
            <div class="flex">

          <p class="leading-relaxed text-base " v-for="(x,index) in i.genres" :key="index" > {{x.name}} <span v-if="index !== i.genres.length - 1">,</span> </p>
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <label for="">Metacritic</label>
            </div>
            <div>
          <p class="leading-relaxed text-base">{{i.metacritic}}</p>

            </div>
          </div>
          <div class="flex justify-between">
            <div>

            <label for="">Platforms</label>
            </div>
            <div class="flex gap-1">

          <div class="flex " v-for="x in i.platforms" :key="x">
            <img v-if="x.platform.name === 'PC'" src="@/assets/platforms/pc.svg"  class=" w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'PlayStation 4'" src="@/assets/platforms/ps4.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'Xbox 360'" src="@/assets/platforms/xbox360.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'Nintendo Switch'" src="@/assets/platforms/nintendoswitch.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'Linux'" src="@/assets/platforms/linux.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'PlayStation 3'" src="@/assets/platforms/ps3.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'Xbox One'" src="@/assets/platforms/xboxone.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'PlayStation 5'" src="@/assets/platforms/ps5.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'PlayStation 2'" src="@/assets/platforms/ps2.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'PlayStation'" src="@/assets/platforms/ps1.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'macOS'" src="@/assets/platforms/macOs.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'Android'" src="@/assets/platforms/android.svg"  class=" w-10 h-10 bg-black  border-2  border-black rounded-4xl">
            <img v-if="x.platform.name === 'IOS'" src="@/assets/platforms/ios.svg"  class=" w-10 h-10  border-2 bg-black border-black rounded-4xl">
            <img v-if="x.platform.name === 'PSVITA'" src="@/assets/platforms/psvita.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">
            <img v-if="x.platform.name === 'XBox series X/s'" src="@/assets/platforms/xboxseriesxs.svg"  class="w-10 h-10  border-2 bg-black  border-black rounded-4xl">


          </div>
            </div>
          </div>
         
          </section>
          
        </div>
        </router-link>
      </div>
 

      
    </div>
    <!-- card -->
    
  </div>
</section>
<section class="dark:bg-gray-600">

 <div class="container flex justify-center   px-5 py-4 mx-auto">
      <!-- Previous button -->
      <button
        v-if="currentPage > 1"
        @click="getPreviousPage"
        class="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
      >
        Prev
      </button>

      <!-- Next button -->
      <button
        v-if="currentPage < totalPages"
        @click="getNextPage"
        class="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Next
      </button>
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
       platforms: [{
          platform:{
            name: ''
          }
        }],
      
        results : [],
        currentPage: 1,
        totalPages: null,
     
    }
  },
  created() {
    this.getInfo()
  },
   computed: {
     
    },
 
  mounted() {
    this.getInfo(this.currentPage);
   
  },
  methods: {
    
      
      async getInfo(page){
        try {
          
          const response = await axios.get('https://api.rawg.io/api/games', {
         params: {
          // Optional parameters
          key: import.meta.env.VITE_API_KEY,
          page: page,
          page_size: 12}
        })

        this.results = response.data.results
        this.totalPages = response.data.count / 10

        this.currentPage = page;



        console.log(this.results)
        console.log(this.totalPages)
       
        } catch (error) {
          console.error(error)
          
        }

       },
         async getNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.getInfo(this.currentPage);
      }
    },

    async getPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.getInfo(this.currentPage);
      }
    },

      

    
   
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
