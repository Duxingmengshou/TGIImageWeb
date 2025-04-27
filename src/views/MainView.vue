<template>
    <div class="main-container">
        <!-- 上方三列平铺 -->
        <div class="image-row">
            <div class="image-column">
                <UploadImage />
            </div>
            <div class="image-column">
                <ImageEncryptShow />
            </div>
            <div class="image-column">
                <ImageDecryptShow />
            </div>
        </div>

        <!-- 下方独立工具栏 -->
        <div class="toolbar-wrapper">
            <ToolBarView />
        </div>
    </div>
</template>

<script setup>
import ImageDecryptShow from '@/components/ImageDecryptShow.vue';
import ImageEncryptShow from '@/components/ImageEncryptShow.vue';
import UploadImage from '@/components/UploadImage.vue';
import ToolBarView from './ToolBarView.vue';
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}

/* 图片展示区 */
.image-row {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-bottom: 20px;
}

.image-column {
    flex: 1;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 工具栏区域 */
.toolbar-wrapper {
    height: 80px;
    border-top: 1px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>