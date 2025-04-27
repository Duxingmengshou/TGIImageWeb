

// FileManager.js
class fileManager {
    constructor() {
        this.isFileManager = true;
        this.imageOriginalFile = null;
        this.imageEncryptedFile = null;
        this.imageDecryptedFile = null;
    }

    setImageOriginalFile(file) {
        this.imageOriginalFile = file;
    }
    getImageOriginalFile() {
        return this.imageOriginalFile;
    }
    setImageEncryptedFile(file) {
        this.imageEncryptedFile = file;
    }
    getImageEncryptedFile() {
        return this.imageEncryptedFile;
    }
    setImageDecryptedFile(file) {
        this.imageDecryptedFile = file;
    }
    getImageDecryptedFile() {
        return this.imageDecryptedFile;
    }



}

const fileManagerInstance = new fileManager();
export default fileManagerInstance;