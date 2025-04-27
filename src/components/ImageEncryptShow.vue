<template>
    <div class="image-shower" @click="handleClick">

        <div v-if="!imageUrl" class="show-placeholder">
            <svg viewBox="0 0 24 24" class="plus-icon">
                <path
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </div>

        <img v-else :src="imageUrl" alt="Uploaded" class="preview-image" @click.stop="showFullscreen" />

        <div v-if="imageUrl" class="overlay-actions">
            <button @click.stop="removeImage" class="remove-btn">×</button>
        </div>

        <FullImageViewer v-model:visible="isFullscreen" :image-url="imageUrl" />

    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { PageCotrol } from '@/pagecontrol/PageControl';
import FullImageViewer from './FullImageViewer.vue';

const imageUrl = ref('');
const isFullscreen = ref(false);

onBeforeMount(() => {
    PageCotrol.setModifyEncryptImage(modifyImage);
});

const modifyImage = (file) => {
    if (!file) {
        imageUrl.value = '';
        isFullscreen.value = false;
        return;
    }
    imageUrl.value = file;
};

const showFullscreen = () => {
    if (imageUrl.value) {
        isFullscreen.value = true;
    }
};

const removeImage = () => {
    imageUrl.value = '';
};

</script>

<style scoped>
.image-shower {
    position: relative;
    width: 90%;
    height: 60%;
    border: 2px dashed #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    transition: border-color 0.3s;
}

.image-shower:hover {
    border-color: #ff4444;
}

.show-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.plus-icon {
    width: 50px;
    height: 50px;
    fill: #999;
}

.preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay-actions {
    position: absolute;
    top: 0;
    right: 0;
}

.remove-btn {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 0 0 0 8px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.remove-btn:hover {
    background: rgba(0, 0, 0, 0.7);
}
</style>