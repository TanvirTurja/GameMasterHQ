<template>

    <section>

    <div>
        <h1 class="font-bold text-3xl">Games and contents that are free </h1>

    </div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <!-- <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div> -->
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2" v-for="i in this.freeGames" :key="i">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-2 rounded-lg">
          <img alt="image" class="flex-shrink-0 rounded-l-lg w-64 h-64 object-fill object-center sm:mb-0 mb-4 " v-bind:src="i.image">
          <div class="flex-grow sm:p-4">
                <h2 class="flex title-font font-semibold text-base text-gray-900">{{i.title}} 
                <span v-if="i.status == 'Active'">
                    <img class="w-6 h-6 text-green-500" src="@/assets/platforms/active.svg" alt="" srcset="">
                </span>
            </h2>
             <p class="mb-1 text-xs ">{{i.type}}</p>
             <p class="mb-1 text-xs ">{{i.platforms}}</p>

            <h3 class="text-gray-500 mb-1 text-sm">{{i.end_date}}</h3>
              <p class="mb-4 text-xs" @click="toggleDescription(i.id)">
            {{ getTruncatedDescription(i.description, i.id) }}
            <span v-if="expandedDescription === i.id"> {{ i.description }} </span>
            <span v-else class="text-xs italic"> ...Click to expand </span>
          </p>
            <p class="mb-4 text-xs">{{i.instructions}}</p>
           

           
          </div>
        </div>
      </div>
     
      
      
    </div>
  </div>
</section>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        
        data() {
            return {
                freeGames: '',
                expandedDescription: null,
            }
        },
        created() {
            this.getFreeGames()
        },
        methods: {
           async getFreeGames() {
                try {
                    const response = await axios.get('https://gamerpower.p.rapidapi.com/api/filter',{
                        params:{
                            platform: 'epic-games-store.steam.android.pc.ps4.xbox-one',
                            // sort: 'recent',
                            type: 'gameloot'
                        },
                        headers:{
                            'X-RapidAPI-Key': '054469e9c6msh5546221914f663dp153f71jsn2e92b7bd8095',
                            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
                        }
                    })
                    this.freeGames = response.data
                    console.log(this.freeGames)
                } catch (error) {
                    console.log(error)
                }
            },
         toggleDescription(id) {
      this.expandedDescription = this.expandedDescription === id ? null : id;
    },
    getTruncatedDescription(description, id) {
      const maxLength = 110;

      if (this.expandedDescription === id || description.length <= maxLength) {
        return description;
      }

      return description.slice(0, maxLength) + '...';
    },
            
         
        },
        
    }
</script>

<style scoped>

</style>