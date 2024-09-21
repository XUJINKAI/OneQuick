---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import MyHomeLayout from '../.vitepress/theme/MyHomeLayout.vue';
import { hero, features } from '../.vitepress/locale/zh';
</script>

<MyHomeLayout :hero="hero" :features="features"></MyHomeLayout>

<h3 class="comments">大家的评价：</h3>

![好评墙](/img/comments.png){ comments }

<a class="dl" :href="hero.actions.url" target="_blank">
    <img :src="hero.actions.image_src" :width="hero.actions.image_width" />
</a>

<style>
.features img {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

h3.comments {
    text-align: center;
}

img[comments] {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 100%;
    max-height: 300px;
    margin: 0 auto;
}

a.dl {
    display: block;
    margin-top: 60px;
}

a.dl img {
    margin: 0 auto;
}
</style>
