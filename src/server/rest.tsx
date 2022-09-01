import { SuccessCallback, FailCallback } from './type';

function createFetchConfig(method: string, params: any) {
  let body = '';
  if (params) {
    body = JSON.stringify(params);
  }

  let config = {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    cache: 'no-cache',
    mode: 'cors',
    credentials: 'include', //include, same-origin, omit
    body: body
  };
  return config;
}

export class Rest {
  serverURL: string;
  restBaseURL: string;

  constructor(serverUrl: string, restBaseURL: string) {
    this.serverURL = serverUrl;
    this.restBaseURL = restBaseURL;
  }

  getBaseUrl() {
    return this.restBaseURL;
  }

  createRestUrl(path: string, params?: any) {
    if (params) {
      path =
        path +
        '?' +
        Object.keys(params)
          .map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
          })
          .join('&');
    }
    if (path.startsWith('/')) return this.restBaseURL + path;
    return this.restBaseURL + '/' + path;
  }

  createUrl(path: string, params?: any) {
    if (params) {
      path =
        path +
        '?' +
        Object.keys(params)
          .map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
          })
          .join('&');
    }
    if (path.startsWith('/')) return this.serverURL + path;
    return this.serverURL + '/' + path;
  }

  get(
    path: string,
    params: any,
    cb: SuccessCallback,
    failCb?: FailCallback
  ): any {
    let config = createFetchConfig('GET', null);
    let url = this.createRestUrl(path);
    if (params) {
      url =
        url +
        '?' +
        Object.keys(params)
          .map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
          })
          .join('&');
    }
    this.doFetch(url, config, cb, failCb);
  }

  post(
    path: string,
    params: any,
    cb: SuccessCallback,
    failCb?: FailCallback
  ): any {
    let config = createFetchConfig('POST', params);
    let url = this.createRestUrl(path);
    this.doFetch(url, config, cb, failCb);
  }

  put(
    path: string,
    params: any,
    cb: SuccessCallback,
    failCb?: FailCallback
  ): any {
    let config = createFetchConfig('PUT', params);
    let url = this.createRestUrl(path);
    this.doFetch(url, config, cb, failCb);
  }

  delete(
    path: string,
    params: any,
    cb: SuccessCallback,
    failCb?: FailCallback
  ): any {
    let config = createFetchConfig('DELETE', params);
    let url = this.createRestUrl(path);
    this.doFetch(url, config, cb, failCb);
  }

  formSubmit(path: string, formData: any, cb: SuccessCallback): any {
    let config = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: formData
    };
    let url = this.createRestUrl(path);
    this.doFetch(url, config, cb);
  }

  doFetch(
    url: string,
    config: any,
    successCallback: SuccessCallback,
    failCb?: FailCallback
  ): any {
    fetch(url, config)
      .then(function (response: any) {
        return response.json();
      })
      .then(function (restResponse: any) {
        if (!restResponse || restResponse.error) {
          if (failCb) {
            failCb(restResponse.error);
          } else {
            // eslint-disable-next-line no-console
            console.log('Error:');
            // eslint-disable-next-line no-console
            console.log(restResponse);
          }
        } else {
          restResponse.data = JSON.parse(restResponse.data);
          successCallback(restResponse);
        }
      });
  }
}
