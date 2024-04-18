import express from 'express'
import cors from 'cors'
import { getRequest, getAndSaveFormData,getArray} from './controller/controller'
import {DBConnection} from './database/connection'

const app = express();
DBConnection()
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));


app.get('/', getRequest)

app.post('/',  getAndSaveFormData)

app.get('/getarray',  getArray)


// app.post('/delet', deletImage)

// app.post('/edit',editProduct)

app.listen(3000, () => {
    console.log("server is started on 3000 port");
})
