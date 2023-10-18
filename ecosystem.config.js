module.exports = {
  apps: [
    {
      name: 'pasechnnik',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: "node_modules/nuxt-start/bin/nuxt-start.js",
      args: 'start'
    }
  ]
}
