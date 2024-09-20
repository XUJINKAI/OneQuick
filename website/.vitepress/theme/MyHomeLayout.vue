<script setup lang="ts">
const props = defineProps<{
    hero: Hero,
    features: Feature[],
}>();

export type Hero = {
    name: {
        text: string,
        suffix: string,
    },
    description: string,
    tagline: string,
    actions: {
        url: string,
        image_src: string,
        image_width: number,
    },
    tip: string,
};

export type FeatureParagraph = string | {
    text: string,
    emphasis?: boolean,
};

export type Feature = {
    title: string,
    content: FeatureParagraph[],
    image: {
        src: string,
    },
};
</script>

<template>
    <div class="hero">
        <div class="content">
            <h1 class="name-one-line">{{ hero.name.text + ' - ' + hero.name.suffix }}</h1>
            <h1 class="name-two-line">{{ hero.name.text }}</h1>
            <h1 class="name-two-line">{{ hero.name.suffix }}</h1>
            <p>{{ hero.description }}</p>
            <p>{{ hero.tagline }}</p>
            <div class="actions">
                <a :href="hero.actions.url" target="_blank">
                    <img :src="hero.actions.image_src" :width="hero.actions.image_width" />
                </a>
            </div>
            <p class="tip">{{ hero.tip }}</p>
        </div>
    </div>

    <slot></slot>

    <div class="features">
        <div v-for="(feature, index) in features" :key="index" :class="['feature', { reverse: index % 2 !== 0 }]">
            <div class="feature-content">
                <h3>{{ feature.title }}</h3>
                <template v-for="(content, index) in feature.content" :key="index">
                    <p v-if="typeof content === 'string'">{{ content }}</p>
                    <p v-else :class="{ emphasis: content.emphasis }">{{ content.text }}</p>
                </template>
            </div>
            <div class="feature-image">
                <img :src="feature.image.src" data-zoomable />
            </div>
        </div>
    </div>
</template>


<style scoped>
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

.hero .content h1.name-two-line {
    display: none;
}

@media (max-width: 640px) {
    .hero .content h1.name-one-line {
        display: none;
    }

    .hero .content h1.name-two-line {
        display: block;
    }
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

@media (max-width: 640px) {
    .feature {
        flex-direction: column;
        align-items: center;
    }

    .feature.reverse {
        flex-direction: column;
    }

    .feature-content,
    .feature-image {
        width: 100%;
        text-align: center;
    }

    .feature.reverse .feature-image {
        text-align: center;
    }
}
</style>
