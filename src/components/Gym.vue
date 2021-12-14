<template>
  <div>
    <h1>Gym</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Budget</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aGym in theGym" :key="aGym.GymID">
          <th>{{ aGym.Name }}</th>
          <th>{{ aGym.Budget }}</th>
          <th>
            <router-link :to="`/Gym/${aGym.GymID}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theGym() {
      return this.$store.state.gym;
    },
  },
};
</script>

<style></style>
