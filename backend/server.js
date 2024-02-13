const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
const { notFound, errorHandler } = require('./middleWare/errorMiddleware');
// const cors = require("cors");
// const chats = require('./data/data');

dotenv.config();
const app = express();
connectDB();

app.use(express.json()); // To accept JSON data

app.get('/', (req, res) => {
    res.send("API is Running");
})

app.use('/api/user',userRoutes);
app.use("/api/chat",chatRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

//****** API Test Points ******/
    
// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// })

// app.get('/api/chat/:id', (req, res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// })

/******** If Proxy Does'nt work Use Cors **********/
// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"]
// }));