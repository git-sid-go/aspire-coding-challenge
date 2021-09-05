<template>
  <q-dialog v-show="showConfirmationModal">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="payment" color="primary" text-color="white" />
        <span class="q-ml-sm"
          >Are you sure you want to repay {{ repayAmount }} for the month of
          {{ repayMonth }} with regards to {{ repayForLoan }}</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "ConfirmRepayment",
  computed: {
    ...mapState({
      showConfirmationModal: (state: any) => state.loans.showConfirmationModal,
    }),
  },
});
</script>
