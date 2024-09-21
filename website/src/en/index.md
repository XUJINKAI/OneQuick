---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import MyHomeLayout from '../../.vitepress/theme/MyHomeLayout.vue';
import { homeData } from '../../.vitepress/locale/en';
</script>

<MyHomeLayout :data="homeData"></MyHomeLayout>
