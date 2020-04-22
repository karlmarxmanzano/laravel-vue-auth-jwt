<template>
  <div id="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link
          class="navbar-brand"
          tag="a"
          :to="{ name: 'home' }"
          active-class="active"
          exact
        >Laravel-Vue with JWT</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                tag="a"
                :to="{ name: 'home' }"
                active-class="active"
                exact
              >Home</router-link>
            </li>
            <li class="nav-item" v-if="authenticated">
              <router-link
                class="nav-link"
                tag="a"
                :to="{ name: 'dashboard' }"
                active-class="active"
              >Dashboard</router-link>
            </li>
            <li class="nav-item" v-if="authenticated">
              <router-link
                class="nav-link"
                tag="a"
                :to="{ name: 'permissions' }"
                active-class="active"
              >Permission</router-link>
            </li>
            <li class="nav-item" v-if="authenticated">
              <router-link
                class="nav-link"
                tag="a"
                :to="{ name: 'role' }"
                active-class="active"
              >Roles</router-link>
            </li>
            <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
            </li>-->
          </ul>
          <ul class="navbar-nav">
            <template v-if="!authenticated">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  tag="a"
                  :to="{ name: 'signin' }"
                  active-class="active"
                >Sign In</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  tag="a"
                  :to="{ name: 'signup' }"
                  active-class="active"
                >Sign Up</router-link>
              </li>
            </template>
            <li class="nav-item" v-else>
              <a class="nav-link" @click.prevent="onSignOut" style="cursor: pointer;">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "theHeader",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  methods: {
    onSignOut() {
      this.$store.dispatch('auth/signOut')
        .then(response => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>
