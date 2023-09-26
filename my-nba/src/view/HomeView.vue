<template>
    <div>
      <h1>NBA Teams</h1>
      <div class="card-deck">
        <div v-for="team in teams" :key="team.id" class="card">
          <img :src="team.imageUrl" class="card-img-top" alt="Team Logo">
          <div class="card-body">
            <h5 class="card-title">{{ team.full_name }}</h5>
            <router-link :to="{ name: 'team-details', params: { id: team.id } }" class="btn btn-primary">Detalhes</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: [],
      };
    },
    mounted() {
      axios.get('https://www.balldontlie.io/api/v1/teams')
        .then(response => {
            this.teams = response.data.data;
        })
    },
  };
  </script>
  
  <style>
  .card {
    margin: 10px;
    width: 18rem;
  }
  </style>
  