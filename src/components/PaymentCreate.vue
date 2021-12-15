<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Make a Payment</h4>
            <form id="review-form" @submit.prevent="submitPayment">
              <div class="mb-3">
                <label for="rating-input" class="form-label">Amount</label
                ><input
                  type="number"
                  class="form-control"
                  id="rating-input"
                  required=""
                  min="1"
                  max="9999"
                  v-model="amount"
                />
              </div>
              <div class="mb-3">
                <label for="summary-input" class="form-label">Date</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="summary-input"
                  required=""
                  v-model="date"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Payment</button
              ><button
                v-on:click="cancelPayment"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>
              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      amount: null,
      date: "",
      errorMessage: null,
    };
  },
  methods: {
    submitPayment() {
      let myPayment = {
        amount: this.amount,
        date: this.date,
        gymIDFK: this.$route.params.pk,
      };

      axios
        .post("/Payment", myPayment, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage =
            "Unable to make a payment, please try again later";
        });
    },
    cancelPayment() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
