 
     <script lang="ts">
        import { defineComponent, ref } from 'vue'
        import arrowHover from './arrow-hover.vue'
  import ArrowRightHero from './arrow-right-hero.vue'
        let showMenu =ref(false)
        export default defineComponent({
          components: { arrowHover, ArrowRightHero },
            setup() {
              return{showMenu}
            },
        })
        </script>
        <template>
             
           <button @mouseover="showMenu=true" @mouseleave="showMenu=false"    > 
             <a class="  hover:text-red-600 " > About Us    </a>    
           <ul :class="{'flex flex-col bg-white   absolute  items-start  text-black':showMenu ,'hidden ':!showMenu}">
           
          <li class="px-5 py-3  hover:text-red-600 ">Board of Directors</li>     
          <li   class="px-5   py-3 hover:text-red-600  ">Governing Committees</li>
          <li   class="px-5   py-3 hover:text-red-600">Bylaws  </li>
          <li   class="px-5   py-3 hover:text-red-600">Committees</li>
          <li   class="px-5   py-3 hover:text-red-600">Staff</li>
          <li   class="px-5   py-3 hover:text-red-600">History</li>
          <li   class="px-5   py-3 hover:text-red-600">Distinguished Service Awards</li>
          <li   class="px-5   py-3 hover:text-red-600">Lectureship Awards</li>
          
          
          
          </ul>
        </button>  
        </template>
         