<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/challenges">Challenges</router-link> |
      <router-link to="/articles">Articles</router-link> |
      <router-link to="/about">About</router-link> 
    </div>

    <!-- Conditionally render the login link or profile picture -->
    <router-link v-if="!isLoggedIn" class="accountSign" to="/login">Login</router-link>
    <div v-else class="profile-container">
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture" />
    </div>
  </nav>
  <router-view/>
  <hr/>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Change this based on your authentication logic
      user: {
        profilePicture: '/path/to/profile-pic.jpg', // Update with the actual user's profile picture path
      }
    };
  },
  created() {
    // Logic to determine if the user is logged in
    this.checkAuthStatus();
  },
  methods: {
    checkAuthStatus() {
      // Replace with actual authentication check
      this.isLoggedIn = true; // Set this based on actual auth status
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  flex-grow: 1;
  text-align: center;
}

.accountSign {
  margin-left: auto;
}

.profile-container {
  margin-left: auto;
}

.profile-picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
hr{
  width: 50%;
  height:0;
  border: #232424 solid;
  border-radius:5px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.accountSign{
  padding-left: 10px;
}

@media (max-width: 768px) {
  .accountSign{
  padding-left: 10px;
}
}
</style>
