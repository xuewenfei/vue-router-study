
<template>
  <div>
    <div class="content">
      Item2
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
      console.log('push list')
      this.$router.push('/list')
    },
    item1Click () {
      console.log('push item1')
      this.$router.push('/item1')
    },
    item2Click () {
      console.log('push item2')
      this.$router.push('/item2')
    },
    listReplace () {
      console.log('replace list')
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
    console.log('Item2 beforeCreated')
  },
  created () {
    console.log('Item2 created')
  },
  beforeMounted () {
    console.log('Item2 beforeMounted')
  },
  mounted () {
    console.log('Item2 mounted')
  },
  beforeUpdated () {
    console.log('Item2 beforeUpdated')
  },
  updated () {
    console.log('Item2 updated')
  },
  beforeDestroyed () {
    console.log('Item2 beforeDestroyed')
  },
  destroyed () {
    console.log('Item2 destroyed')
  }

}
</script>
