<template>
  <div class="container">
    <router-link to="/" class="button">Главная</router-link>
    <router-link :to="{ name: 'postCreate' }" class="button">Создать</router-link>
  </div>
</template>

<script>
export default {
    name: "headerComponent"
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }
  .button {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  } 

  .button:hover {
    background-color: #555;
  }
</style>
