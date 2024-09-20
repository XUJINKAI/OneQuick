---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import { common } from '../.vitepress/common';
</script>

<div class="hero">
  <div class="content">
    <h1>OneQuick - 热键工具</h1>
    <p>不止于热键</p>
    <p>开箱即用，符合直觉，简单高效</p>
    <div class="actions">
      <a :href="common.url_msstore" target="_blank">
        <img src="/cn-ws-dl.svg" width="200"/>
      </a>
    </div>
    <p class="tip">*官网施工中，有问题欢迎到<a :href="common.url_github_issues" target="_blank">github</a>提issue</p>
  </div>
</div>

<div class="features">
  <div class="feature">
    <div class="feature-content">
      <h3>如何最快的修改音量？</h3>
      <p>看电影时，玩游戏时，工作汇报时，被突然的声音吓一跳？如何快速修改音量？</p>
      <p class="emphasis">把鼠标移动到屏幕左上角，滚动滚轮即可，按下还可以静音。</p>
      <p>通过OneQuick，鼠标在各个屏幕边缘的功能，都是可调的。</p>
    </div>
    <div class="feature-image">
      <img src="/img/feature/screen-volume.gif" data-zoomable>
    </div>
  </div>
  <div class="feature reverse">
    <div class="feature-content">
      <h3>如何快速搜索一段文本？</h3>
      <p>复制文字，打开想搜索的网站，在搜索框中粘贴，最后回车...</p>
      <p>如果想在多个网站同时搜索，还得重复以上步骤！</p>
      <p class="emphasis">选中文字后，按两下Ctrl-C （或Ctrl-C-C），再按一个键，直达搜索结果</p>
      <p>通过搭配不同的网址，你还可以把文字转为二维码，或进行更多操作。</p>
    </div>
    <div class="feature-image">
      <img src="/img/feature/copy-search.gif" data-zoomable>
    </div>
  </div>
  <div class="feature">
    <div class="feature-content">
      <h3>每次调整扩展屏都要去设置里点半天？</h3>
      <p>Win+P不够用了，怎么办？</p>
      <p>工作，游戏的屏幕设置不同，如何快速切换？</p>
      <p class="emphasis">OneQuick可以记住当前屏幕配置，需要的时候一键切换。</p>
    </div>
    <div class="feature-image">
      <img src="/img/shot/cn-display.png" data-zoomable>
    </div>
  </div>
  <div class="feature reverse">
    <div class="feature-content">
      <h3>如何...？</h3>
      <p>想置顶当前窗口，好搭配其他窗口工作？</p>
      <p>想将浏览器变为半透明然后摸鱼？</p>
      <p>想找到一个程序的exe位置在哪里？</p>
      <p>想修改一个游戏的键位？</p>
      <p>想快速运行一行命令？</p>
      <p class="emphasis">在OneQuick中，都可以方便的做到。</p>
    </div>
    <div class="feature-image">
      <img src="/img/shot/cn-hotkey.png" data-zoomable>
    </div>
  </div>
</div>

<p class="tip">*官网施工中，有问题欢迎到<a :href="common.url_github_issues" target="_blank">github</a>提issue</p>

<style>
body {
  font-family: 'Roboto', sans-serif;
  /* background-color: #f5f7fa; */
  color: #333;
}

.hero {
  text-align: center;
  padding: 50px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero .content h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-weight: 700;
  color: #0078D7;
}

.hero .content p {
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: 400;
}

.hero .content p.tip {
  font-size: 0.8em;
  color: #666;
}

.hero .actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 0;
  gap: 60px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature-content {
  flex: 1;
  width: 50%;
}

.feature-content h3 {
  font-size: 1.5em;
  margin-top: 8px;
  margin-bottom: 28px;
  font-weight: 700;
}

.feature-content p {
  font-size: 1em;
}

.feature-content .emphasis {
  font-size: 1.1em;
  font-weight: 700;
}

.feature-image {
  flex: 1;
  width: 50%;
}

.feature-image img {
  max-width: 100%;
  height: auto;
}
</style>
