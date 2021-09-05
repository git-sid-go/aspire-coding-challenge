<template>
  <div>
    <Form @submit="onSubmit">
      <div class="border">
        <Field
          name="amount"
          type="number"
          placeholder="Enter loan amount"
          :rules="isRequired"
        />
      </div>
      <div class="border">
        <Field
          name="numOfTerms"
          type="number"
          placeholder="Enter number of repayment terms"
          :rules="isRequired"
        />
      </div>
      <div class="border"><ErrorMessage name="amount" /></div>
      <div class="border"><ErrorMessage name="numOfTerms" /></div>
      <button type="submit">Apply</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "NewLoan",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    ...mapActions({
      addNewLoanAction: "loans/addNewLoan",
    }),
    onSubmit(values: any) {
      this.addNewLoanAction(values).then(() => {
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
  },
});
</script>
