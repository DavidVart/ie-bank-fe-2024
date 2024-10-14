<!-- WelcomeHome.vue -->
<template>
    <div class="welcome-container text-center">
      <h1>Welcome to IE's Official Bank</h1>
      <p>We're glad to have you here. Manage your accounts easily and securely.</p>
      <button class="btn btn-primary" @click="goToAccounts" aria-label="Manage Accounts">Manage Accounts</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "WelcomeHome",
    methods: {
      goToAccounts() {
        this.$router.push({ name: "AppAccounts" }); 
      },
    },
  };
  </script>
  
  <style scoped>
  .welcome-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #5492c7;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  </style>