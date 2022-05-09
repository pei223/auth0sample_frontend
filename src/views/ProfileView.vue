<template>
  <div class="home">
    <div v-if="!user">
      <v-progress-circular :size="50" color="primary" indeterminate />
    </div>
    <div v-else>
      <ul>
        <li>email: {{ user.email }}</li>
        <li>name: {{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import AuthManager from "@/auth";
import { User } from "@auth0/auth0-spa-js";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomeView extends Vue {
  user: User | null = null;
  async mounted() {
    const user = await AuthManager.getInstance().getUser();
    if (user) {
      this.user = user;
    }
  }
}
</script>
