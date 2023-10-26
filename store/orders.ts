import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export const state = () => ({})

export const mutations = {}

export const actions = {
  async generatePayLink(_conf: any, data: any) {
    try {
      const {value, description} = data

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
          "return_url": "http://localhost:3003/"
        },
        "description": description,
      }

      return await axios.post(yookassa_link, youkassa_data, youkassa_config)
    } catch (e) {
      console.log(e)
    }
  },
}
export const getters = {}
