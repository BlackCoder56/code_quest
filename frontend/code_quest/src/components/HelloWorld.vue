<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Code Quest is an interactive app teaching Python and Django basics <br> through fun coding challenges and quizzes.
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
    <h3>Where to start?</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Introduction to Python</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Control Flow in Python</a></li>
    </ul>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Functions in Python</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Data Structures in Python</a></li>
    </ul>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">File Handling in Python</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Error Handling in Python</a></li>
    </ul>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Classes and Objects in Python</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Basic Django Setup</a></li>
    </ul>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Django Models</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Django Views and Templates</a></li>
    </ul>
    <h3>Developer Community</h3>
    <ul class="iconz">
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'github']" />
        BlackCoder56
      </a>
      </li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        Blackcoder56
      </a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'discord']" />
        Community Chat
      </a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        elishabyamukama
      </a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'youtube']" />
        Youtube
      </a></li>
    </ul>
    <h3>Technologies</h3>
    <ul class="iconz">
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'vuejs']" />
        Vue.js
      </a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'python']" />
        Python
      </a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'react']" />
      React  
      </a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'java']" />
        Java        
      </a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'aws']" />
        AWS
      </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.iconz li a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
