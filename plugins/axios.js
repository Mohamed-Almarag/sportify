// this.$axios.setBaseURL('offsideapi.anamuslim.co/api/')
// export default function ({ $axios }) {}
import axios from 'axios'

const domain = 'offsideapi.anamuslim.co/api/'
// const domain = 'http://offers.softgatesdemo.com/api/'

export const baseUrl = `${domain}`
const API_URL = axios.create({
  baseURL: domain,
})

export default API_URL
