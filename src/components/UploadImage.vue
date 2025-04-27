<template>
    <div class="image-uploader" @click="handleClick">
        <input ref="fileInput" type="file" accept="image/*" style="display: none" @change="handleFileChange" />

        <div v-if="!imageUrl" class="upload-placeholder">
            <svg viewBox="0 0 24 24" class="plus-icon">
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
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
import fileManagerInstance from '@/pagecontrol/FileManager';
import { ref } from 'vue';
import FullImageViewer from './FullImageViewer.vue';
const fileInput = ref(null);
const imageUrl = ref('');
const isFullscreen = ref(false);


const handleClick = () => {
    if (!imageUrl.value) {
        fileInput.value.click();
    }
};

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imageUrl.value = event.target.result;
            fileManagerInstance.setImageOriginalFile(imageUrl.value);
        };
        reader.readAsDataURL(file);
    }
};

const removeImage = () => {
    imageUrl.value = '';
    fileInput.value.value = '';
    fileManagerInstance.setImageOriginalFile(null);
};

const showFullscreen = () => {
    if (imageUrl.value) {
        isFullscreen.value = true;
    }
};
</script>

<style scoped>
.image-uploader {
    position: relative;
    width: 90%;
    height: 60%;
    max-width: 558px;
    max-height: 408px;
    border: 2px dashed #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    transition: border-color 0.3s;
}

.image-uploader:hover {
    border-color: #38b304;
}

.upload-placeholder {
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
