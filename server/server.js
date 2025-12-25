import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectDB from './configs/db.js'

import adminRouter from './routes/adminRoutes.js'

/*== PORT ==*/
const PORT = process.env.PORT || 3000

const app = express()

/*== DATABASE CONNECT ==*/
await connectDB()

/*== MIDDLEWARES ==*/
app.use(cors())
app.use(express.json())

/*== ROUTES ==*/
app.get('/', (req, res) => res.status(200).send('API is working'))
app.use('/api/admin', adminRouter)

app.listen(PORT, () => {
    console.log(`Server is running : http://localhost:${PORT}`)
})

export default app
