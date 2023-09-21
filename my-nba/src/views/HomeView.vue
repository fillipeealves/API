<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListPokemons from '../components/ListPokemons.vue';

let basedUrlSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/")
let pokemons = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
  .then(response => response.json())
  .then(response => {
    pokemons.value = response.results;
    console.log(response);
  })
})

</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" class="card-img-top" alt="Pikachu">
            <div class="card-body">
              <h5 class="card-title">Pikachu</h5>
              <p class="card-text">Pikachu</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card">
            <div class="card-body row">
              <ListPokemons 
              v-for="pokemon in pokemons"
              :key="pokemon.name"
              :name="pokemon.name"
              :url="pokemon.url"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
