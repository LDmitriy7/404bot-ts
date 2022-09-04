import BaseDatabase from './database'
import Handler from './handler'

class App {
  constructor(private botToken: string, private db: BaseDatabase) {
  }

  run(handlers: Handler[]) {
    console.log('Run with handlers:', handlers)
  }
}

export default App