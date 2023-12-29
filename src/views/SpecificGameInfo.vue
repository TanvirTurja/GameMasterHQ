<template>
   

     <section class="text-gray-600 body-font overflow-hidden">
 
  <!-- test -->
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 pt-24 justify-center items-center">
    <img alt="image" class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" v-bind:src="summary.background_image">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h2 class="text-sm title-font text-gray-500 tracking-widest">{{summary.released}}</h2>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{summary.name}}</h1>
       <div class="flex mb-4">
          <span class="flex items-center">
    <svg
      v-for="index in 5"
      :key="index"
      :fill="index <= summary.rating ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      class="w-4 h-4 text-green-500"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      ></path>
    </svg>
  </span>
          <span class="text-gray-600 ml-3"> {{summary.rating}} Rating</span>
          
        </div>
        
       <div class="flex w-full gap-2">

         <div class="bg-gray-50 rounded flex justify-between p-3 w-full h-full items-center  border mb-2">
          <span class="title-font font-bold">Publishers</span>
          <span class=" text-gray-900 text-sm" v-for="(i, index) in summary.publishers" :key="index">{{i.name}} <span v-if="index !== summary.publishers.length - 1">,</span></span>
        </div>

         <div class="bg-gray-50 rounded flex justify-between p-3 w-full h-full items-center border mb-2">
          <span class="title-font font-bold">Genres</span>
          <span class="ml-auto text-gray-900 text-sm" v-for="(i, index) in summary.genres" :key="index">{{i.name}} <span v-if="index !== summary.genres.length - 1">,</span></span>
        </div>
       </div>
        <p v-html="summary.description" class="leading-relaxed"></p>  
          
    </div>
  </div>
</section>
  <!-- test -->

  <!-- screenshots -->
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Screenshots</h1>
    </div> 
  <div class="flex flex-wrap ">
      <div class="p-4 flex gap-2 ">
        <div class="border" v-for="(image, index) in screenshots" :key="index">
          <img
            alt="image"
            class="w-full h-full cursor-pointer"
            :src="image.image"
            @click="openModal(image.image)"
          />
        </div>
      </div>
    </div>
  </div>
    <Modal :showModal="isModalOpen" :selectedImage="selectedImage" @close="closeModal" />
</section>
  <!-- screenshots -->

</section>
</template>

<script>
import axios from "axios";
import Modal from "@/components/Modal.vue";
    export default {
        props: {
    id: {
      type: String, // Set the appropriate type of your summary object
        required: true,
    },
  },
  components: {
    Modal
  },
  watch:{
    id(){
      this.getSummary()
      this.getScreenshots()
    }

  },
        
        created(){
            this.getSummary()
            console.log(this.id)
            this.getScreenshots()

            // console.log(this.summary)
        },
        data(){
            return{
                summary : '',
                apiKey : import.meta.env.VITE_API_KEY,
                screenshots : [],
                isModalOpen: false,
                selectedImage: ''
            }
        },
        methods:{
           async getSummary(){
           
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${this.id}?key=${this.apiKey}`)
                this.summary = response.data
                console.log(this.summary)
            } catch (error) {
                console.log(error)
              
            }
        },
        async getScreenshots(){
           
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${this.id}/screenshots?key=${this.apiKey}`)
                this.screenshots = response.data.results
                console.log(this.screenshots)
            } catch (error) {
                console.log(error)
              
            }
        },
         openModal(image) {
      this.selectedImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = '';
    }



       
    }
}
</script>

<style scoped>

</style>