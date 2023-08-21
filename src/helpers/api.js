import axios from 'axios';

export default function requestApi(endpoint, method, body, responseType = 'json') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (body instanceof FormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  const instance = axios.create({ headers });

  instance.interceptors.request.use(
    (config) => {
      const userData = JSON.parse(localStorage.getItem('user_data'));
      if (userData && userData.tokens.access_token) {
        config.headers['Authorization'] = `Bearer ${userData.tokens.access_token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response && error.response.status === 419) {
        console.log('Access token expired');
        try {
          const userData = JSON.parse(localStorage.getItem('user_data'));
          const refresh_token = userData.tokens.refresh_token;
          console.log('call refresh token api', refresh_token);
          const result = await instance.post(
            `http://localhost:9000/auth/refresh-token`,
            {
              refresh_token: refresh_token,
            },
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
          console.log(result);
          const { access_token: new_access_token, refresh_token: new_refresh_token } =
            result.data.result;

          console.log(new_access_token);
          userData.tokens.access_token = new_access_token;
          userData.tokens.refresh_token = new_refresh_token;
          localStorage.setItem('user_data', JSON.stringify(userData));

          originalConfig.headers['Authorization'] = `Bearer ${new_access_token}`;

          return instance(originalConfig);
        } catch (err) {
          // if (err.response && err.response.status === 400) {
          //   localStorage.removeItem('user_data');
          //   window.location.href = '/auth';
          // }
          console.log(err);
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    },
  );

  return instance.request({
    method: method,
    url: `http://localhost:9000${endpoint}`,
    data: body,
    responseType: responseType,
  });
}
