<template>
  <div class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/form">Form</router-link>
    <div class="header">Header</div>
    <slot></slot>
    <div class="footer">Footer</div>
  </div>
</template>
