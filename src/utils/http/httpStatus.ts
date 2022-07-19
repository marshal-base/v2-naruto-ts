import { Notify } from 'vant'

export function httpStatus(status: number | undefined, msg: string): void {
  switch (status) {
    case 400:
      Notify({ type: 'danger', message: `${msg}` })
      break
    case 401:
      Notify({ message: '用户没有权限（令牌、用户名、密码错误）!', type: 'warning' })
      break
    case 403:
      Notify({ message: '用户得到授权，但是访问是被禁止的。!', type: 'warning' })
      break
    case 404:
      Notify({ message: '网络请求错误,未找到该资源!', type: 'warning' })
      break
    case 405:
      Notify({ message: '网络请求错误,请求方法未允许!', type: 'warning' })
      break
    case 408:
      Notify({ message: '网络请求超时!', type: 'warning' })
      break
    case 500:
      Notify({ message: '服务器错误,请联系管理员!', type: 'warning' })
      break
    case 501:
      Notify({ message: '网络未实现!', type: 'warning' })
      break
    case 502:
      Notify({ message: '网络错误!', type: 'warning' })
      break
    case 503:
      Notify({ message: '服务不可用，服务器暂时过载或维护!', type: 'warning' })
      break
    case 504:
      Notify({ message: '网络超时!', type: 'warning' })
      break
    case 505:
      Notify({ message: 'http版本不支持该请求!', type: 'warning' })
      break
    default:
      Notify({ message: msg, type: 'warning' })
  }
}
