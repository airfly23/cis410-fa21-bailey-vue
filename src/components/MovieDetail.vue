<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ gym.Name }}</h2>
        <br />

        <p>
          Budget: <br /><strong>{{ formattedBudget }}</strong>
        </p>
      </div>
    </div>

    <br />

    <router-link v-if="auth" :to="`/gym/${this.$route.params.pk}/payment`"
      ><button class="btn btn-success">Make a Payment</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign in to Make a Payment
      </button></router-link
    >
    <br />
    <br />

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    gym() {
      let allGym = this.$store.state.gym;

      let thisGym = allGym.find((aGym) => {
        return aGym.GymID == this.$route.params.pk;
      });

      return thisGym;
    },
    formattedBudget() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).Format(this.Gym.Budget);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
