<template>
  <div class="wrapper">
   <Blocks v-for="blocks in blocksName" :block="blocks">
   </Blocks>
  </div>
</template>

<script>
import Blocks from './Blocks';
export default {
  name: 'HelloWorld',
  components: {
    Blocks: Blocks
  },
  props: {
  },
  data () {
    return {
      blocksName: [
        {name: 'Петя'},
        {name: 'Ирина'},
        {name: 'Коля'}
      ]
      
    }
  },
}
</script>

<style lang="scss">
   .wrapper {
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-content: space-between;
   }
</style>
