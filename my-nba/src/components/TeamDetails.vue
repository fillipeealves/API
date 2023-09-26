<template>
    <div>
      <h2>Detalhes do Time</h2>
      <div class="card">
        <img :src="team.imageUrl" class="card-img-top" alt="Team Logo">
        <div class="card-body">
          <h5 class="card-title">{{ team.full_name }}</h5>
          <p class="card-text">Abreviação: {{ team.abbreviation }}</p>
          <p class="card-text">Cidade: {{ team.city }}</p>
          <p class="card-text">Conferência: {{ team.conference }}</p>
          <p class="card-text">Divisão: {{ team.division }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: {},
      };
    },
    mounted() {
        axios.get(`https://www.balldontlie.io/api/v1/teams/${this.$route.params.id}`)
        .then(response => {
            this.team = response.data;
        })
    },
  };
  </script>
  
  <style>
  .card {
    margin: 20px;
    width: 18rem;
  }
  </style>
  