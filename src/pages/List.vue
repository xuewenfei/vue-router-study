<template>
  <div>
    <div class="content">
      list
    </div>
    <div class="links">
      <router-link to="/list">list</router-link>
      <router-link to="/item1">Item1</router-link>
      <router-link to="/item2">Item2</router-link>
    </div>
    <div class="links2">
      <div @click="listClick">gotolist</div>
      <div @click="item1Click">gotoItem1</div>
      <div @click="item2Click">gotoItem2</div>
    </div>
    <div>
      replace
    </div>
    <div class="links2">
      <div @click="listReplace">replacelist</div>
      <div @click="item1Replace">replaceItem1</div>
      <div @click="item2Replace">replaceItem2</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    listClick () {
      this.$router.push('/list')
    },
    item1Click () {
      this.$router.push('/item1')
    },
    item2Click () {
      this.$router.push('/item2')
    },
    listReplace () {
      this.$router.replace('/list')
    },
    item1Replace () {
      this.$router.replace('/item1')
    },
    item2Replace () {
      this.$router.replace('/item2')
    }
  },
  beforeCreated () {
    console.log('beforeCreated')
  },
  created () {
    console.log('created')
  },
  beforeMounted () {
    console.log('beforeMounted')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdated () {
    console.log('beforeUpdated')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroyed () {
    console.log('beforeDestroyed')
  },
  destroyed () {
    console.log('destroyed')
  }

}
</script>
