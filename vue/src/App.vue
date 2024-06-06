<template>
  <div id="app">
    <div v-directiveName:someArg.mod.modd="'hello'">
      HELLO
    </div>
    <ul>
      <li v-for="(value, key) in filteredList">
        {{ value }} {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      list: {
        key1: true,
        key2: false,
      }
    }
  },
  filters: {
    filterList(item) {
      console.log(item);
      return {
        key: true,
      }
    }
  },
  computed: {
    filteredList() {
      return {
        key: 22
      }
    }
  },
  directives: {
    directiveName: {
      bind(el, bindings, vNode) {
        console.log('bind', el, bindings, vNode);
        console.log(bindings.modifiers);
      },
      inserted(el, bindings, vNode) {
        console.log('inserted', el, bindings, vNode);
      },
      update(el, bindings, vNode, oldVNode) {
        console.log('update', el, bindings, vNode);
      },
      componentUpdated(el, bindings, vNode) {
        console.log('componentUpdated', el, bindings, vNode);
      },
      unbind(el, bindings, vNode) {
        console.log('unbind', el, bindings, vNode);
      },
    }
  }
}
</script>

<style>

</style>
