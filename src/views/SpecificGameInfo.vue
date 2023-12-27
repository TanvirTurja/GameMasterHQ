<template>
   

     <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" v-bind:src="summary.background_image">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{summary.released}}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{summary.name}}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
    <svg
      v-for="index in 5"
      :key="index"
      :fill="index <= summary.rating ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-4 h-4 text-indigo-500"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      ></path>
    </svg>
  </span>
          <span class="text-gray-600 ml-3"> {{summary.rating}} Rating</span>
          
        </div>
        <p v-html="summary.description" class="leading-relaxed"></p>
        <div class=" flex border-t border-gray-200 py-2">
          <span class=" text-gray-500 font-semibold">Publishers</span>
          <span class="ml-auto text-gray-900 text-sm" v-for="(i, index) in summary.publishers" :key="index">{{i.name}} <span v-if="index !== summary.publishers.length - 1">,</span></span>
        </div>
        <div class="flex  border-t border-gray-200 py-2">
          <span class="text-gray-500">Genres</span>
          <span class="ml-auto text-gray-900 text-sm" v-for="(i, index) in summary.genres" :key="index">{{i.name}} <span v-if="index !== summary.genres.length - 1">,</span></span>
        </div>
        <!-- <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">4</span>
        </div> -->
        
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from "axios";
    export default {
        props: {
    id: {
      type: String, // Set the appropriate type of your summary object
        required: true,
    },
  },
  watch:{
    id(){
      this.getSummary()
    }

  },
        
        created(){
            this.getSummary()
            console.log(this.id)
            // console.log(this.summary)
        },
        data(){
            return{
                summary : '',
                apiKey : import.meta.env.VITE_API_KEY,
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
        }



       
    }
}
</script>

<style scoped>

</style>