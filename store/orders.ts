import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import * as process from "process";

export const state = () => ({})

export const mutations = {}

export const actions = {
  async generatePayLink(_conf: any, data: any) {
    try {
      const {value, description, return_url} = data
      const yookassa_link = 'http://localhost:3003/api-payment/'
      const youkassa_config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic MjEwMTUxOnRlc3RfUVFpaEY3czgyX1djWGhrU25oYXNPbGVhaEpoemV3b3NpZ3lKRUREbXh1VQ==',
          'Idempotence-Key': uuidv4()
        }
      }

      const youkassa_data = {
        "amount": {
          "value": value,
          "currency": "RUB"
        },
        "capture": true,
        "confirmation": {
          "type": "redirect",
          "return_url": return_url
        },
        "description": description,
      }

      return await axios.post(yookassa_link, youkassa_data, youkassa_config)
    } catch (e) {
      console.log(e)
    }
  },

  async checkOrderToPayment(_conf: any, data: any) {
    try {
      const {payment_id} = data
      const yookassa_link = 'http://localhost:3003/api-payment/' + payment_id
      const youkassa_config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic MjEwMTUxOnRlc3RfUVFpaEY3czgyX1djWGhrU25oYXNPbGVhaEpoemV3b3NpZ3lKRUREbXh1VQ==',
          'Idempotence-Key': uuidv4()
        }
      }
      return await axios.post(yookassa_link, {}, youkassa_config)
    } catch (e) {
      console.log(e)
    }
  },

  async createOrder(_conf: any, data: any) {
    try {
      let {Total_Value, payment_id} = data

      let model = {
        Total_Value: Total_Value,
        payment_id: payment_id
      }
    } catch (e) {
      console.log(e)
    }
  }
}
export const getters = {}
