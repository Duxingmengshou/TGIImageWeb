<template>
    <div class="toolbar-container">
        <div class="button-group">
            <button class="toolbar-button" @click="handleEncryptButton">加密</button>
            <div class="divider"></div>
            <button class="toolbar-button" @click="handleDecryptButton">解密</button>
            <div class="divider"></div>
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
        requestControlInstance.post('/upload/encrypt_image', { data: fileManagerInstance.getImageOriginalFile() }).then((response) => {
            PageCotrol.ModifyEncryptImage(response.encrypted_data);
            fileManagerInstance.setImageDecryptPermData(response.encrypt_info.perm);
            fileManagerInstance.setImageDecryptPermHigh(response.encrypt_info.perm_high);
            // console.log(fileManagerInstance);
        }).catch((error) => {
            console.error('请求失败:', error);
        });
    } else {
        console.error('没有可用的图片文件');
    }
};

const handleDecryptButton = () => {
    if (fileManagerInstance.getImageEncryptedFile()) {
        requestControlInstance.post('/upload/decrypt_image', {
            encrypted_data: fileManagerInstance.getImageEncryptedFile(),
            encrypt_info: {
                perm_high: fileManagerInstance.getImageDecryptPermHigh(),
                perm: fileManagerInstance.getImageDecryptPermData()
            }
        }).then((response) => {
            PageCotrol.ModifyDecryptImage(response.decrypted_data);
            fileManagerInstance.setImageDecryptedFile(response.decrypted_data);
            // console.log(fileManagerInstance);
        }).catch((error) => {
            console.error('请求失败:', error);
        });
    } else {
        console.error('没有可用的图片文件');
    }

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
    background-color: transparent;
    color: #808080;
    /* font-weight: bold; */
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.toolbar-button:hover {
    background-color: #ededed;
}

.toolbar-button:active {
    background-color: #cfcfcfc1;
}

.divider {
    width: 1px;
    height: 100%;
    background-color: #27a700;
    margin: 0 8px;
    /* 控制间距 */
}
</style>