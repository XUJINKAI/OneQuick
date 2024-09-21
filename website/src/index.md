---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import MyHomeLayout from '../.vitepress/theme/MyHomeLayout.vue';
import { homeData } from '../.vitepress/locale/zh';
</script>

<MyHomeLayout :data="homeData"></MyHomeLayout>

<style>
</style>
