<script setup></script>

<template>
  <footer>
    <div class="footer-nav">
      <div class="footer-nav-item">
        <router-link to="/">Garden</router-link>
      </div>
      <div class="footer-nav-item">
        <router-link to="/listen">Listen</router-link>
      </div>
      <div class="footer-nav-item">
        <router-link to="/read">Read</router-link>
      </div>
      <div class="footer-nav-item">
        <router-link to="/relation">Relation</router-link>
      </div>
      <div class="footer-nav-item">
        <router-link to="/record">Record</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: rgb(255, 223, 223);
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
}

.footer-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
