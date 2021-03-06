import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { connect } from './UDP'

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

const start = async (): Promise<void> => {
    try {
        app.listen(PORT, () => {
            console.log(`Data server started on port ${PORT}`)
        })
        const tcp = connect()
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

start()
