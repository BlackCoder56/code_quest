<template>
    <div class="modal-backdrop" v-if="isVisible">
      <div class="modal-content">
        <div class="modal-header">
          <h2 v-if="isLogin">Login</h2>
          <h2 v-else>Sign Up</h2>
          <!-- <button @click="closeModal" class="close-button">&times;</button> -->
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" class="submit-button">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
          </form>
          <p>
            <span v-if="isLogin">Don't have an account?</span>
            <span v-else>Already have an account?</span>
            <button @click="toggleAuthMode" class="toggle-button">
              {{ isLogin ? 'Sign Up' : 'Login' }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isLogin: true,
        email: '',
        password: ''
      };
    },
    methods: {
    //   closeModal() {
    //     this.$emit('close');
    //   },
      toggleAuthMode() {
        this.isLogin = !this.isLogin;
      },
      handleSubmit() {
        if (this.isLogin) {
          // Handle login logic
          this.$emit('login', { email: this.email, password: this.password });
        } else {
          // Handle signup logic
          this.$emit('signup', { email: this.email, password: this.password });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  
  .toggle-button {
    background: none;
    border: none;
    color: #42b983;
    cursor: pointer;
    padding: 0;
    margin-left: 5px;
    font-size: 0.9em;
  }
  </style>
  