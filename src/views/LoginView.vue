<template>
  <div class="home">
    <h2>ログイン</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import AuthManager from "@/auth";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class LoginView extends Vue {
  async mounted() {
    await AuthManager.getInstance().login("/home");
  }
}
</script>
