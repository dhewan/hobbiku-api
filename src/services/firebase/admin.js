import admin from 'firebase-admin'
import { readFile } from 'fs/promises'
import config from '../../config.js'

const saProd = JSON.parse(await readFile(new URL('../../credentials/firebase-adminsdk.prod.json', import.meta.url)))
const saDev = JSON.parse(await readFile(new URL('../../credentials/firebase-adminsdk.dev.json', import.meta.url)))

const serviceAccount = config.env === 'production' ? saProd : saDev

const firebaseAdmin = admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

export default firebaseAdmin
