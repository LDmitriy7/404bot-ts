import * as dotenv from 'dotenv'
import * as fs from 'fs'

function fileExists(path: string) {
  return fs.existsSync(path)
}

class Env {
  constructor(private file: string) {
    if (!fileExists(file)) {
      throw new Error(`File "${file}" does not exist`)
    }
    dotenv.config({path: file})
  }

  get(var_name: string) {
    let value = process.env[var_name]
    if (value === undefined) {
      throw new Error(`Environment variable "${var_name}" not set`)
    }
    return value
  }
}

const env = new Env('.env')

export default env