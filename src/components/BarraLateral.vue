<template>
  <header>
    <h1><img src="../assets/logo.png" alt="[central-web]" width="150" /></h1>
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CBarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuro: false,
    };
  },
  computed:{
    textoBotao(){
      if(this.modoEscuro){
        return 'Ativar modo claro'
      }

      return 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro;
      this.$emit('aoTemaAlterado', this.modoEscuro);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1.2rem;
  background: #bbbbbb;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2rem;
    height: auto;
  }
}
</style>