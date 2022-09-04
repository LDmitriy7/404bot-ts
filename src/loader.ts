import {App} from './core'
import Database from './database'
import * as config from './config'

const db = new Database(config.MONGO_DB)
const app = new App(config.BOT_TOKEN, db)

export {db, app}
