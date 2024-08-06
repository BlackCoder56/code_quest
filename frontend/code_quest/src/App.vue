<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/challenges">Challenges</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <hr/>
</template>

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
hr{
  width: 50%;
  height:0;
  border: #232424 solid;
  border-radius:5px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
