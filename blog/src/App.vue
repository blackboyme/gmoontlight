<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header>
      <nav>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/moment">Moment</router-link>
          <router-link to="/dance">DANCE</router-link>
          <router-link to="/music">MUSIC</router-link>
          <router-link to="/about">ABOUT ME</router-link>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
@font-face {
  font-family: 'GyeonggiBatang-Regular';
  src: url('/fonts/GyeonggiBatang-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

html, body {
  font-family: 'GyeonggiBatang-Regular', sans-serif;
  margin: 0;
  padding: 0;
}

* {
  font-family: 'GyeonggiBatang-Regular', sans-serif !important;
}

.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
}

header {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: #F7B500;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #F7B500;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: #F7B500;
}

.nav-links a.router-link-active::after {
  width: 100%;
}

main {
  width: 100%;
  height: 100%;
}
</style>
