import Vue from 'vue'

Vue.config.productionTip = false

import "./styles.css";

new Vue({
  el: "#form-wrapper",
  data: {
    isProcessing: false,
    isSubmitted: false,
    name: '',
    email: '',
    message: '',
    errors: {},
  },
  computed: {
    hasErrors() {
      // Determine which properties of the error object have a message
      // to determine whether the form has validation errors
      let newObj = {};
      Object.keys(this.errors).forEach((prop) => {
        if (this.errors[prop]) {
          newObj[prop] = this.errors[prop]
        }
      });
      return Object.keys(newObj).length
    }
  },
  methods: {
    processForm() {
        this.isProcessing = true
        this.errors = {}
        setTimeout(() => {
            this.isProcessing = false

            this.errors = {
                name: !this.name.length ? "Name is required." : "",
                email: !this.email.length ? "Email is required." : "",
                message: !this.message.length ? "Message is required." : "",
            }

            if (!this.hasErrors) {
                this.isSubmitted = true
            }
        }, 3000);
    }
  }
})
