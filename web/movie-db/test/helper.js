
'use strict'

const { join } = require('node:path')
const { readFile } = require('node:fs/promises')
const { create } = require('@platformatic/db')

const os = require('node:os')
const path = require('node:path')
const fs = require('node:fs/promises')

let counter = 0


async function getServer (t) {

  const dbPath = join(os.tmpdir(), 'db-' + process.pid + '-' + counter++ + '.sqlite')
  const connectionString = 'sqlite://' + dbPath

  const config = JSON.parse(await readFile(join(__dirname, '..', 'watt.json'), 'utf8'))
  // Add your config customizations here. For example you want to set
  // all things that are set in the config file to read from an env variable
  config.server ||= {}
  config.server.logger ||= {}
  config.watch = false

  config.migrations.autoApply = true
  config.types.autogenerate = false
  config.db.connectionString = connectionString

  // Add your config customizations here
  const server = await create(join(__dirname, '../'),config)
  await server.start({}) // sets .getApplication()
  t.after(() => server.stop())

  t.after(async () => {
    await fs.unlink(dbPath)
  })

  return server.getApplication()
}

module.exports.getServer = getServer
