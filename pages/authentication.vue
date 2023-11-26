<template>
  <div>
    <v-form v-if="step === 1" lazy-validation
            v-model="formValid.phone" ref="phone">
      <div class="mt-10 mx-auto" style="width: 260px">
        <v-text-field v-model="phoneNumber" label="Телефон" :rules="rules"
                      v-mask="'+7(###)-###-##-##'" required outlined dense
                      @click="resetFormValidation" @input="resetFormValidation"
                      placeholder="+7(9XX)-XXX-XX-XX"/>
      </div>
      <v-card-actions class="d-flex justify-center pt-0">
        <v-btn class="font-weight-medium text-none" @click="submitFormPhone" width="260px" height="40px"
               elevation="0" color="#26ae60" style="letter-spacing: .3px" dark>
          Получить код
        </v-btn>
      </v-card-actions>
    </v-form>

    <v-form v-if="step === 2" lazy-validation
            :disabled="disableOTP.form"
            v-model="formValid.otp" ref="otp">
      <div class="mt-10 mx-auto" style="width: 260px">
        <v-otp-input v-model="OTPNumber" @finish="submitFormOTP"
                     length="4" type="number" dense></v-otp-input>
      </div>

      <v-card-subtitle class="text-center pa-0 ma-0 mt-2">Введите код, отправленный Вам по смс</v-card-subtitle>
      <div class="d-flex justify-center my-1">
        <v-card-subtitle>Не пришёл код?</v-card-subtitle>
        <v-btn class="text-none pa-0 ma-0 ml-2" :disabled="disableOTP.repeat"
               height="23px" min-height="none" text small
               style="letter-spacing: .4px; font-size: 13px">
          {{ messageItem }}
        </v-btn>
      </div>
    </v-form>

    <div v-if="step < 3" class="d-flex justify-end mt-2 mx-auto" style="width: 260px">
      <v-btn class="text-none pa-0 ma-0" height="23px" min-height="none" @click="closeForm"
             text small style="letter-spacing: .4px; font-size: 13px">
        Отмена
      </v-btn>
    </div>

  </div>
</template>
<script lang="ts">
import {Vue, Component, Ref} from 'vue-property-decorator'

@Component({
  layout: 'auth'
})
export default class Authentication extends Vue {
  @Ref() phone!: HTMLDivElement[];
  @Ref() otp!: HTMLDivElement[];
  step: number = 1
  phoneNumber: string = ''
  OTPNumber: string = ''
  rules: any = [
    (v: string) => !!v || 'Телефон является обязательным полем',
    (v: string) => !!v && v.length == 17 || 'Не верный формат телефона',
  ]
  formValid: any = {
    phone: false,
    otp: false,
  }
  disableOTP: any = {
    form: false,
    repeat: false
  }

  resetFormValidation() {
    // @ts-ignore
    this.phone.resetValidation()
  }

  async submitFormPhone() {
    // @ts-ignore
    this.formValid.phone = this.phone.validate()
    if (!this.formValid.phone) return

    let code = await this.findUserOrCreate()
    await this.sendSMSCode(code)

    this.step++
  }

  async submitFormOTP() {
    // @ts-ignore
    this.formValid.otp = this.otp.validate()
    if (!this.formValid.otp) return

    this.step++
  }

  async findUserOrCreate() {
    let code = 0
    await this.$axios.post('', {})
      .then((data: any) => {

      })
      .catch((error: any) => {

      })


    return code
  }

  async sendSMSCode (code: any) {
    await this.$axios.post('', {})
      .then((data: any) => {

      })
      .catch((error: any) => {

      })
  }

  closeForm () {
    this.$router.push('/')
  }

  get messageItem() {
    return this.disableOTP.repeat ? 'Отправим повторно через ' : 'Отправить повторно'
  }
}
</script>
