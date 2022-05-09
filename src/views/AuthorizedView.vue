<template>
  <v-progress-circular :size="50" color="primary" indeterminate />
</template>

<script lang="ts">
import AuthManager from "@/auth";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AuthorizedView extends Vue {
  async mounted() {
    await AuthManager.getInstance().onRedirect();
    this.$router.replace("/home");
  }
}
</script>
