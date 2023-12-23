import express, { json } from 'express';
import router from "./routers/index.js";

const app = express()
const PORT = 8080

app.use(json())
app.use('/api', router)

const start = async () => {
    try{
        app.listen(PORT, () => console.log('Сервер запущен'))
    }
    catch(e){
        console.log(e)
    }
}

start()//запускаем сервер на порту 8080