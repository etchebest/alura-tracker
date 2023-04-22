<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulario de criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa vc quer iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Temporizador from './Temporizador.vue';

export default defineComponent({
  name: 'CFormulario',
  components: { Temporizador },
  emits: ['aoSalvarTarefa'],
  data() {
    return {
      descricao: '',
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracaoSegundos: tempoDecorrido,
        descricao: this.descricao,
      });
      this.descricao = '';
    },
  },
});
</script>
<style scoped>
.formulario{
  color:var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
