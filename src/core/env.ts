class Env {
  constructor(private file: string) {
  }

  get(var_name: string) {
    return process.env[var_name]
  }
}

const env = new Env('.env')

export default env