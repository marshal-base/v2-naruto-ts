import { AxiosRequestConfig } from 'axios'

export type RequestConfig = AxiosRequestConfig & { parallel?: boolean }

export const defaultConfig: AxiosRequestConfig = {
  timeout: 30000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
}

export function genConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
  if (!config) {
    return defaultConfig
  }
  const { headers } = config
  if (headers && typeof headers === 'object') {
    defaultConfig.headers = {
      ...defaultConfig.headers,
      ...headers,
    }
  }
  return { ...defaultConfig }
}

export const METHODS = ['post', 'get', 'put', 'delete', 'option', 'patch']
