require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var Mock = require('mockjs')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')
var bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
app.use('/assets', express.static('./assets'))
app.use('/api', express.static('./mock'))
app.get('/mock',function (req,res) {
  var key = 'res|30';
  var mockData = Mock.mock({
   [key]: [{
        'id|+1': 0,
        'url':'@url()',
        'admin':'@domain()',
        'time':'@datetime()',
        'test':{
          'timeAdmin':'@image()'
        }
    }]
  });    
  res.send(mockData);  
})
//模拟后台分页
app.use(bodyParser.json());
app.post('/mock/test',function (req,res) {
  var params = req.body;
  var total = params.total;
  var index = 0,id=0;
  if (params.page==1) {
    index = total>20?20:total;
    id = 1;
  } else {
    index = (params.page-1)*params.limit+20<total?params.limit:total-(params.page-2)*params.limit-20;
    id = (params.page-2)*params.limit+20;
  }
  var key = 'res|'+index;
  var mockData = Mock.mock({
    [key]: [{
         'id|+1': id,
         'url':'@url()',
         'admin':'@domain()',
         'time':'@datetime()',
         'test':{
           'timeAdmin':'@image()'
         }
     }],
     total
   });    
  
  res.send(mockData);     
})
var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
