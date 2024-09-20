---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import MyHomeLayout from '../../.vitepress/theme/MyHomeLayout.vue';
import { hero, features } from '../../.vitepress/locale/en';
</script>

<MyHomeLayout :hero="hero" :features="features"></MyHomeLayout>
