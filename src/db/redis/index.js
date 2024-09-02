import Redis from 'ioredis'
import config from '../../config.js'

const options = {
  host: config.rd_server, // Redis host
  port: config.rd_port, // Redis port
  password: config.rd_pass // Redis password
}

const redisClient = new Redis(options)
const redisPub = new Redis(options)
const redisSub = new Redis(options)

export { redisClient, redisPub, redisSub }
