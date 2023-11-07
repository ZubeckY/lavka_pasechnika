<template>
  <v-dialog max-width="760px" v-model="dialog">

    <template v-slot:activator="{ on, attrs }">
      <div v-on="on" v-bind="attrs">
        <slot></slot>
      </div>
    </template>

    <div style="background:#ffffff;width:760px;height:740px;overflow:hidden;position:relative;">

      <v-card-actions class="pb-0">
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" fab small
               elevation="0" color="grey lighten-3">
          <v-icon color="grey">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>

      <iframe style="width:100%;height:95%;border:none;border-radius:8px;
            box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/112646265113?comments">
      </iframe>

      <a href="https://yandex.ru/maps/org/lavka_pasechnika_rf/112646265113/"
         target="_blank" style="
             color:#b3b3b3;
             font-family:YS Text,sans-serif;
             box-sizing:border-box;
             text-decoration:none;
             position:absolute;
             bottom:8px;width:100%;
             text-align:center;left:0;
             overflow:hidden;
             display:block;
             text-overflow:ellipsis;
             font-size:10px;
             max-height:14px;
             white-space:nowrap;
             padding:0 16px;">
        Лавка-Пасечника.рф на карте Горячего Ключа — Яндекс Карты
      </a>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Pages extends Vue {
  dialog: boolean = false
}
</script>
