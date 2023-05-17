<template>
    <!-- header -->
    <header class="text-gray-600 dark:text-gray-200 dark:bg-gray-800 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center dark:text-gray-200 text-gray-900 mb-4 md:mb-0">
           
            <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white p-2 bg-gray-100 dark:bg-gray-300 border  rounded-full">
                    <g filter="url(#filter0_d_1_5)">
                    <path d="M17.16 17.92C17.3733 17.92 17.5733 18.1333 17.76 18.56C17.9733 18.96 18.08 19.3467 18.08 19.72C18.08 20.04 18.0267 20.36 17.92 20.68C17.84 21 17.76 21.24 17.68 21.4L17.52 21.68C16.2133 24.2133 14.2667 26.5467 11.68 28.68C9.12 30.8133 6.54667 31.88 3.96 31.88C2.6 31.88 1.6 31.4 0.96 30.44C0.32 29.4533 0 28.2 0 26.68C0 24.0133 0.76 21.2933 2.28 18.52C3.82667 15.72 5.77333 13.1733 8.12 10.88C7.10667 10.7733 6.16 10.3867 5.28 9.72C4.4 9.05333 3.96 8.24 3.96 7.28C3.96 5.81333 5.16 4.36 7.56 2.92C9.96 1.48 12.9333 0.759998 16.48 0.759998C17.6 0.759998 19.0133 0.906665 20.72 1.2C22.4533 1.46667 23.7867 1.6 24.72 1.6C26.2133 1.6 27.28 1.36 27.92 0.879999C28.0267 0.853333 28.12 0.84 28.2 0.84C28.3333 0.84 28.4 0.893332 28.4 0.999998C28.4 1.10666 28.3467 1.25333 28.24 1.44C27.7067 2.29333 26.9867 2.98667 26.08 3.52C25.1733 4.05333 24.1733 4.32 23.08 4.32C21.9067 4.32 20.1733 4.01333 17.88 3.4C15.6133 2.78666 13.8533 2.48 12.6 2.48C11.1867 2.48 9.84 2.88 8.56 3.68C7.28 4.48 6.64 5.57333 6.64 6.96C6.64 7.54667 6.8 8.12 7.12 8.68C7.44 9.24 7.76 9.65333 8.08 9.92L8.56 10.32L8.64 10.4C11.76 7.44 14.56 5.68 17.04 5.12C17.1733 5.09333 17.3333 5.08 17.52 5.08C17.7867 5.08 17.92 5.16 17.92 5.32C17.92 5.53333 17.72 5.72 17.32 5.88C16.5733 6.17333 15.5067 6.93333 14.12 8.16C12.7333 9.38667 11.2667 10.9067 9.72 12.72C8.17333 14.5067 6.82667 16.6533 5.68 19.16C4.56 21.64 4 24.04 4 26.36C4 28.7333 4.81333 29.92 6.44 29.92C7.61333 29.92 8.76 29.5467 9.88 28.8C11.0267 28.0267 12.0267 27.0267 12.88 25.8C13.76 24.5733 14.52 23.3333 15.16 22.08C15.8 20.8267 16.3333 19.56 16.76 18.28C16.84 18.04 16.9733 17.92 17.16 17.92Z" fill="black"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_5" x="0" y="0.759995" width="30.4" height="34.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape"/>
                    </filter>
                    </defs>
            </svg>
            
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <router-link :to="{name: 'Home'}" class="mr-5 hover:text-gray-900">Home</router-link>
            <!-- <a class="mr-5 hover:text-gray-900">About Us</a>
            <a class="mr-5 hover:text-gray-900">Contact Us</a> -->
            <!-- <a class="mr-5 hover:text-gray-900">Fourth Link</a> -->
           
         
          </nav>
          <button
          id="theme-toggle"
          type="button"
          @click="toggleDarkMode()"
          class="text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            class="w-5 h-5 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            class="w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <!-- Dark mode switcher end -->
       
            
        </div>
      </header>
      <!-- header -->
      
</template>

<script>
    export default {
        
     data(){
        let isDark = localStorage.getItem('darkMode') == 'true'


        return{
        isDark,
       
        }
       
    },
    methods:{
        
      toggleDarkMode(){
        let htmlclass = document.querySelector('html').classList;
        let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if(this.isDark){
            htmlclass.remove('dark')
            localStorage.setItem('darkMode',false)
            this.isDark = false
            themeToggleLightIcon.classList.remove('hidden')
            themeToggleDarkIcon.classList.add('hidden')
            themeToggleDarkIcon.classList.toggle('hidden')
            themeToggleLightIcon.classList.toggle('hidden')


            
        }else{
            htmlclass.add('dark')
            localStorage.setItem('darkMode',true)
            this.isDark = true
            themeToggleLightIcon.classList.add('hidden')
            themeToggleDarkIcon.classList.remove('hidden')
            themeToggleDarkIcon.classList.toggle('hidden')
            themeToggleLightIcon.classList.toggle('hidden')

            
            
        }
        


   
 },




    },


        
    }
</script>

<style scoped>

</style>