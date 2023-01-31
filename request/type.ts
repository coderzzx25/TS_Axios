import type { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface ZXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: ZXRequestConfig) => ZXRequestConfig
  requestFailureFn?: (err: AxiosError) => any
  responseSuccessFn?: <T = AxiosResponse>(res: T) => T
  responseFailureFn?: (err: AxiosError) => any
}

export interface ZXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZXInterceptors<T>
  headers: AxiosRequestHeaders
}
