<template>
  <div id="app">
    <img src="{{logoUrl}}">
    <h1>{{ logoUrl }}</h1>
  </div>
</template>

<script>
import * as logo from './assets/logo.png';

export default {
  data () {
    return {
      msg: 'Hello Vue!',
      logoUrl: logo
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
