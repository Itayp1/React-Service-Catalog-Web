import axios from 'axios'
import { BaseUrl } from '../../src/config'

export default axios.create({
    baseURL: BaseUrl
})


