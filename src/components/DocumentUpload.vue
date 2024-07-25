<!-- DocumentUpload.vue -->
<template>
  <div class="wrapper">
    <div class="center">
      <div class="upload-documents">
        <h2>Upload Documents</h2>
        <form @submit.prevent="uploadDocuments" class="upload-form">
          <div class="form-group">
            <label>Tax ID Document:</label>
            <input
              type="file"
              ref="taxIDFile"
              class="form-control-file"
              required
            />
            <div v-if="formErrors.taxIDFile" class="error-message">
              {{ formErrors.taxIDFile }}
            </div>
          </div>
          <div class="form-group">
            <label>Business License Document:</label>
            <input
              type="file"
              ref="licenseFile"
              class="form-control-file"
              required
            />
            <div v-if="formErrors.licenseFile" class="error-message">
              {{ formErrors.licenseFile }}
            </div>
          </div>
          <button type="submit" class="submit-button">Upload Documents</button>
          <div v-if="error" class="error-message">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formErrors: {
        taxIDFile: "",
        licenseFile: "",
      },
      error: "",
    };
  },
  methods: {
    uploadDocuments() {
      this.clearErrors();
      const taxIDFile = this.$refs.taxIDFile.files[0];
      const licenseFile = this.$refs.licenseFile.files[0];

      if (!taxIDFile) {
        this.formErrors.taxIDFile = "Tax ID document is required.";
      }
      if (!licenseFile) {
        this.formErrors.licenseFile = "Business license document is required.";
      }

      if (!taxIDFile || !licenseFile) {
        return;
      }

      console.log("Uploading documents:", taxIDFile, licenseFile);
      this.$router.push("/DashboardPage");

      this.clearForm();
    },
    clearForm() {
      this.$refs.taxIDFile.value = "";
      this.$refs.licenseFile.value = "";
      this.clearErrors();
    },
    clearErrors() {
      this.formErrors.taxIDFile = "";
      this.formErrors.licenseFile = "";
      this.error = "";
    },
  },
};
</script>

<style scoped>
div.wrapper {
  background-color: #459185;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-documents {
  max-width: 600px;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  width: 92%;
  margin-top: 10px;
}

label {
  color: #9ca3af;
  font-size: 17px;
}

.upload-documents h2 {
  color: #459185;
  font-size: 20px;
  margin-bottom: 20px;
}

.upload-form .form-group {
  margin-bottom: 20px;
}

.upload-form label {
  display: block;
  font-size-adjust: 15px;
}

.upload-form .form-control-file {
  width: 94%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #367169;
}

.upload-form .error-message {
  color: #ff0000;
  margin-top: 5px;
}

.upload-form .submit-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #459185;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  font-size: 15px;
}

.upload-form .submit-button:hover {
  background-color: #367169;
}

@media screen and (max-width: 768px) {
  .upload-documents {
    padding: 10px;
    width: 100%;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
