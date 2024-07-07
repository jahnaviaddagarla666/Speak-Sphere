const mongoose = require('mongoose');
const url = `mongodb+srv://chat_app:chat_app@cluster0.uoj4idg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url, {
}).then(() => console.log('Connected to DB')).catch((e) => console.log('Error', e))