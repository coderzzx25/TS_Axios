// import { loaclCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import ZXRequest from './request'

const zxRequest = new ZXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestSuccessFn: (config) => {
      // const token = localCache.getCache('token')
      // if (token && config.headers) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})

export default zxRequest
