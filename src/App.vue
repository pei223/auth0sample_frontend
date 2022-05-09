<template>
  <div id="app">
    <nav>
      <router-link to="/">Top</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <a href="" @click="onLogout">Logout</a> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthManager from "./auth";
// import AuthManager from "./auth";

@Component({})
export default class App extends Vue {
  authenticated = false;
  async created() {
    // this.authenticated = (await AuthManager.getInstance().getToken()) !== "";
  }
  async onLogout() {
    await AuthManager.getInstance().logout();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
