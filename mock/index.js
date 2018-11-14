
const delay = (data, time = 500) => {
  return (req, res) => {
    setTimeout(() => {
      res.json(data);
    }, time);
  }
}

module.exports  =  {
  '/': delay(require('./test.json'))

  // 支持值为 Object 和 Array
  // 'GET /api/users': { users: [1, 2] },

  // // GET POST 可省略
  // '/api/users/1': { id: 1 },

  // // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => { res.end('OK'); },

  // // Forward 到另一个服务器
  // 'GET /assets/*': 'https://assets.online/',
  // 'POST /proxy/*': 'http://127.0.0.1',
  // '/api/*': 'http://127.0.0.1:3000',

  // // Forward 到另一个服务器，并指定子路径
  // // 请求 /someDir/0.0.50/index.css 会被代理到 https://g.alicdn.com/tb-page/taobao-home, 实际返回 https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  // 'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
};