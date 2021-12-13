<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Payments</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later
    </p>
    <table v-if="paymentsByUser" class="table">
      <thead>
        <th>Payment ID</th>
        <th>Amount</th>
        <th>Date</th>
      </thead>
      <tbody>
        <tr v-for="thisPayment in paymentsByUser" :key="thisPayment.PaymentPK">
          <th>
            <router-link :to="`/gym/${thisGym.gymIDFK}`">{{
              thisPayment.paymentID
            }}</router-link>
          </th>
          <th>{{ thisPayment.amount }}</th>
          <th>{{ thisPayment.Date }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      paymentsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/Payment/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.paymentsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
