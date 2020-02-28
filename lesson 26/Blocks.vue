<template>
  <div class="blocks-wrapper">
    <div class="blocks-wrapper__block">
        {{getName}}
        <button @click="onClick">{{block.name}}</button>
       
      </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters} from 'vuex';
export default {
  name: 'Blocks',
  props: {
      block: Object
  },
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['getName'])
  },
  methods: {
    ...mapMutations(['setName']),
    onClick () {
       this.setName(this.block.name);
    }
  }
}
</script>

<style scoped lang="scss">
    .blocks-wrapper__block {
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       width: 200px;
       height:200px;
       padding: 5px;
       border: 2px solid red;
       margin: 20px;
     }
</style>