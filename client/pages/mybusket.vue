<template>
  <div class="d-flex flex-row">
    <div style="width: 100vw; max-width: 600px;">

      <v-card-actions class="pa-0">
        <v-spacer/>
        <v-card-subtitle style="font-size: 16px">
          {{ itemsCount }} товаров
        </v-card-subtitle>
      </v-card-actions>

      <v-card class="mx-auto mt-5" width="320"
              elevation="0" color="transparent">

        <v-img class="mx-auto" width="174px" height="214px" alt="#"
               :src="require(`~/assets/images/honeyhivecart.png`)"></v-img>

        <v-card-title class="d-flex justify-center text-center mt-6">В корзине пока <br> ничего нет</v-card-title>
        <v-card-text class="text-center font-weight-medium mt-4"
                     style="font-size: 16px; line-height: 18px; letter-spacing: -.3px !important">
          Вы можете начать свой выбор с главной
          страницы или воспользоваться поиском
          если ищите что-то конкретное
        </v-card-text>

        <v-card-actions class="d-flex flex-column mx-auto mt-2" style="width: 220px;">
          <v-btn class="font-weight-bold text-none custom-rounded" dark block height="40px"
                 color="#26ae60" style="font-size: 16px; letter-spacing: .3px">
            К покупкам
          </v-btn>
          <v-btn class="font-weight-bold text-none mt-2" text
                 color="#26ae60" style="font-size: 16px; letter-spacing: .3px">
            Акции и скидки
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="ml-8">
      <div>
        <v-card class="d-flex align-center custom-rounded pl-4 pr-3" elevation="0" width="300px" height="50px">
          <v-card-subtitle style="font-size: 18px">Получатель</v-card-subtitle>
          <v-spacer/>
          <v-btn class="font-weight-bold text-none custom-rounded"
                 min-height="0" height="30px" width="140px" color="#26ae60"
                 dark style="font-size: 16px; letter-spacing: .3px">
            Заполнить
          </v-btn>
        </v-card>

        <v-card class="d-flex align-center custom-rounded pl-4 pr-3 mt-4" elevation="0" width="300px" height="50px">
          <v-card-subtitle style="font-size: 18px">Доставка</v-card-subtitle>
          <v-spacer/>
          <v-btn class="font-weight-bold text-none custom-rounded"
                 min-height="0" height="30px" width="140px" color="#26ae60"
                 dark style="font-size: 16px; letter-spacing: .3px">
            Выбрать
          </v-btn>
        </v-card>

        <v-card></v-card>

      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
@Component ({
  layout: 'lk'
})
export default class Mybusket extends Vue {
  itemsCount: number = 0

}
</script>
