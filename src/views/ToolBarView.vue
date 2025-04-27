<template>
    <div class="toolbar-container">
        <div class="button-group">
            <button class="toolbar-button" @click="handleEncryptButton">加密</button>
            <button class="toolbar-button" @click="handleDecryptButton">解密</button>
            <button class="toolbar-button" @click="handleAboutmeButton">关于</button>
        </div>
    </div>
</template>

<script setup>
import fileManagerInstance from '@/pagecontrol/FileManager';
import { PageCotrol } from '@/pagecontrol/PageControl';
import requestControlInstance from '@/pagecontrol/RequestControl';

const handleEncryptButton = () => {
    if (fileManagerInstance.getImageOriginalFile()) {
        requestControlInstance.post('/upload/image', { data: fileManagerInstance.getImageOriginalFile() }).then((response) => {
            PageCotrol.ModifyEncryptImage(response.processed_data);
            PageCotrol.ModifyDecryptImage(response.processed_data2);
        }).catch((error) => {
            console.error('请求失败:', error);
        });
    } else {
        console.error('没有可用的图片文件');
    }
};

const handleDecryptButton = () => {
    requestControlInstance.get('/check').then((response) => {
        console.log(response);
    }).catch((error) => {
        console.error('请求失败:', error);
    });
};

const handleAboutmeButton = () => {

};
</script>

<style scoped>
.toolbar-container {
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-group {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
}

.toolbar-button {
    width: 100%;
    height: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.toolbar-button:hover {
    background-color: #45a049;
}

.toolbar-button:active {
    background-color: #3e8e41;
}
</style>