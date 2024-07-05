import express from "express";
const router = express.Router();

router.post('/send-otp',(req,res)=>{
    res.send("hello for otp")
})

export default router;
