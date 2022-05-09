<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import AuthManager from "@/auth";
import { popRedirectPath } from "@/storages/redirectStorage";
import { Component, Vue } from "vue-property-decorator";
import { baseApi } from "../api/baseApi";

@Component({
  components: {},
})
export default class HomeView extends Vue {
  async mounted() {
    const redirectURL = popRedirectPath();
    if (redirectURL) {
      this.$router.replace(redirectURL);
      return;
    }
    try {
      console.log(
        "Authenticated: " + (await AuthManager.getInstance().isAuthenticated())
      );
      await baseApi.get("test");
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
