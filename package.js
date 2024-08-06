/* globals Package, Npm, Cordova */
Package.describe({
  name: 'krauszrobert92:push',
  version: '2.0.11',
  summary: 'Push Notifications for Cordova and Web/PWA with Firebase (FCM).',
  git: 'https://github.com/activitree/meteor-push.git'
})

Npm.depends({
  'firebase-admin': '12.3.0',
  firebase: '10.12.5',
  events: '3.3.0'
})

Cordova.depends({
  // 'phonegap-plugin-push': '2.3.0',
  '@havesource/cordova-plugin-push': 'https://github.com/havesource/cordova-plugin-push.git#86b52a7769fe80e975752f2d2db5b1abeb194802', // for IOS with SDK > 8.1.1
  // '@havesource/cordova-plugin-push': '3.0.1', // for Android with SDK <=21.+
  'cordova-plugin-device': '2.1.0'
})

Package.onUse(api => {
  //api.versionsFrom(['1.8', '2.3'])

  api.use(['tracker'], ['web.browser', 'web.cordova'])
  api.use(['accounts-base'], ['web.browser', 'web.cordova', 'server'], { weak: true })

  api.use([
    'ecmascript',
    'check',
    'mongo',
    'ejson',
    'random'
  ], ['client', 'server'])

  // API's
  api.addFiles('lib/server/pushToDevice.js', 'server')
  api.addFiles('lib/server/internalMethods.js', 'server')

  api.mainModule('lib/client/cordova.js', ['web.cordova'])
  api.mainModule('lib/client/web.js', ['web.browser'])
  api.mainModule('lib/server/pushToDB.js', ['server'])
})
