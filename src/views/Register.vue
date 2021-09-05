<template>
  <div>
    <Form @submit="onSubmit">
      <div class="border">
        <Field
          name="name"
          type="text"
          placeholder="Enter name"
          :rules="isRequired"
        />
      </div>
      <div class="border">
        <Field
          name="email"
          type="email"
          placeholder="Enter email"
          :rules="validateEmail"
        />
      </div>
      <div class="border">
        <Field
          name="password"
          type="password"
          placeholder="Enter password"
          :rules="isRequired"
        />
      </div>
      <div class="border"><ErrorMessage name="name" /></div>
      <div class="border"><ErrorMessage name="email" /></div>
      <div class="border"><ErrorMessage name="password" /></div>
      <button type="submit">Register</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";

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
    onSubmit(values: any) {
      // alert(JSON.stringify(values, null, 2));
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
});
</script>
