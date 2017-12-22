#!/usr/bin/env node
const fs = require('fs')

console.log('Write env file')

fs.writeFileSync(
  './env.json',
  JSON.stringify({
    CLIENT_ID: process.env.CLIENT_ID || 'CLIENT_ID',
    CLIENT_SECRET: process.env.CLIENT_SECRET || 'CLIENT_SECRET',
  }),
)
