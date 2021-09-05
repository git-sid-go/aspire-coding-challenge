<template>
  <div class="items-center bg-app-primary min-h-screen py-12">
    <div class="text-center bg-app-primary pb-12">
      <router-link to="/">
        <img :src="appNameLogo" alt="aspire" class="m-auto" />
      </router-link>
      <p class="text-white font-bold text-lg mt-10 mb-4">
        Register as a new user!
      </p>
      <Form
        @submit="onSubmit"
        class="w-full max-w-xl flex flex-col items-center mx-auto"
      >
        <div class="w-10/12 flex justify-center relative">
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            class="w-full border font-semibold py-2 px-4 mb-9 rounded-md text-app-primary"
            :rules="isRequired"
          />
          <ErrorMessage
            class="absolute left-0 bottom-4 text-xs text-red-400"
            name="name"
          />
        </div>

        <div class="w-10/12 flex justify-center relative">
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            class="w-full border font-semibold py-2 px-4 mb-9 rounded-md text-app-primary"
            :rules="validateEmail"
          />
          <ErrorMessage
            class="absolute left-0 bottom-4 text-xs text-red-400"
            name="email"
          />
        </div>
        <div class="w-10/12 flex justify-center relative">
          <Field
            name="password"
            type="password"
            placeholder="Enter a strong password"
            class="w-full border font-semibold py-2 px-4 mb-9 rounded-md text-app-primary"
            :rules="isRequired"
          />
          <ErrorMessage
            class="absolute left-0 bottom-4 text-xs text-red-400"
            name="password"
          />
        </div>
        <button
          class="bg-app-tertiary px-4 py-2 font-bold text-white text-lg mt-5 rounded-md"
          type="submit"
        >
          Register
        </button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import { CommonIcons } from "@/assets/assets";

export default defineComponent({
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      authStatus: (state: any) => state.auth.isLoggedIn,
    }),
  },
  methods: {
    ...mapActions({
      registerUserAction: "auth/registerUser",
    }),
    onSubmit(values: { name: string; email: string; password: string }) {
      this.registerUserAction(values).then(() => {
        this.$router.push("/apply-and-manage-loans");
      });
    },
    isRequired(value: string) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      return true;
    },
    validateEmail(value: string) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }

      // if the field is not a valid email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return "This field must be a valid email";
      }

      // All is good
      return true;
    },
  },
  setup() {
    return { appNameLogo: CommonIcons.appNameLogo };
  },
});
</script>
