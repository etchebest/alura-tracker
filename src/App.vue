<template>
  <main class="columns is-one-quarter" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <CBarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <CFormulario @aoSalvarTarefa="salvaTarefa" />
      <div class="lista">
        <Tarefas v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" />

        <box v-if="listaEstaVazia">Você não esta muito produtivo :(</box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CBarraLateral from './components/BarraLateral.vue';
import CFormulario from './components/Formulario.vue';
import Tarefas from './components/Tarefas.vue';
import { ITarefa } from './interfaces/ITarefa';
import Box from './components/Box.vue';

export default defineComponent({
  name: 'App',
  components: { CBarraLateral, CFormulario, Tarefas, Box },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvaTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },

    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
