import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'


dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)


app.get('/', async (req, res) => {

    res.send('Hello from Imaginator')
})

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(process.env.PORT_NO, () => {
            console.log(`Server has started on port ${process.env.PORT_NO}`);
        })
    } catch (error) {
        console.log(error);
    }
}
startServer()