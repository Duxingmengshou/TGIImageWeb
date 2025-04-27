export const PageCotrol = {
    funcModifyEncryptImage: null,
    funcModifyDecryptImage: null,

    setModifyEncryptImage: function (func) {
        if (func == null || typeof func != 'function') {
            return;
        }
        this.funcModifyEncryptImage = func;
    },

    ModifyEncryptImage(file) {
        if (this.funcModifyEncryptImage == null) {
            return;
        }
        this.funcModifyEncryptImage(file);
    },

    setModifyDecryptImage: function (func) {
        if (func == null || typeof func != 'function') {
            return;
        }
        this.funcModifyDecryptImage = func;
    },

    ModifyDecryptImage(file) {
        if (this.funcModifyDecryptImage == null) {

            return;
        }
        this.funcModifyDecryptImage(file);
    },

}