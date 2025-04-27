<template>
    <transition name="fade">
        <div v-if="visible" class="fullscreen-image-viewer" @click.self="close">
            <div class="viewer-content">
                <img :src="imageUrl" :alt="altText" class="viewer-image" @click.self="close" />
                <button class="close-button" @click="close" aria-label="Close image viewer">
                    &times;
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        default: 'Fullscreen image'
    },
    showNavigation: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:visible', 'close', 'prev', 'next']);

const close = () => {
    emit('update:visible', false);
    emit('close');
};

// 处理ESC键关闭
const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        close();
    }
};

// 禁止背景滚动
const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
};

const enableBodyScroll = () => {
    document.body.style.overflow = '';
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
    if (props.visible) {
        disableBodyScroll();
    }
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    enableBodyScroll();
});
</script>

<style scoped>
.fullscreen-image-viewer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: zoom-out;
}

.viewer-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    text-align: center;
}

.viewer-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    cursor: default;
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}

.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
}

.nav-button:hover {
    background: rgba(255, 255, 255, 0.5);
}

.prev-button {
    left: 20px;
}

.next-button {
    right: 20px;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>