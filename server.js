const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
app.get('/',(_,res)=>res.send('<body style="background:#000;color:#0f0;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh">Bot Host Online</body>'));
console.log('Telegram bot placeholder started');
app.listen(PORT,()=>console.log('Server '+PORT));
