

// FileManager.js
class fileManager {
    constructor() {
        this.isFileManager = true;
        this.imageOriginalFile = null;
        this.imageEncryptedFile = null;
        this.imageDecryptedFile = null;

        this.imageDecryptPermHigh = null;
        this.imageDecryptPermData = null;
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

    setImageDecryptPermHigh(file) {
        this.imageDecryptPermHigh = file;
    }
    getImageDecryptPermHigh() {
        return this.imageDecryptPermHigh;
    }
    setImageDecryptPermData(file) {
        this.imageDecryptPermData = file;
    }
    getImageDecryptPermData() {
        return this.imageDecryptPermData;
    }



}

const fileManagerInstance = new fileManager();
export default fileManagerInstance;