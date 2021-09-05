<template>
  <div class="loans-root flex-1 pb-14">
    <h6>Hi {{ currentUser.name }}!</h6>
    <p v-if="allLoans.length === 0">
      You currently do not have any active loans. Tap on "Apply Now" to apply
      for a new loan.
    </p>
    <router-link to="/apply-and-manage-loans/new-loan">Apply Now</router-link>
    <template :key="index" v-for="(item, index) in allLoans">
      <div>{{ item.amount }}</div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Loans",
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.user,
      allLoans: (state) => state.loans.allLoans,
    }),
  },
});
</script>
