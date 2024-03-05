const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://fire:ao@43.203.67.138', 27017)
.then(() => {
    console.log("몽고BD연결성공");
})
.catch(err => {
    console.log("몽고DB연결실패");
    console.error(err);
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true}));

app.post('/register', async (req, res) => {
    const { userName, studentId, phoneNumber, motivated } = req.body;
    const user = new User({ //회원가입에 입력한 정보를DB에 저장
        userName,
        studentId,
        phoneNumber,
        motivated
    });

    try {
        await user.save();
        res.status(200).send("지원서가 제출되었습니다");
    } catch (error) {
        res.status(400).send("지원서 신청에 문제가 있습니다.");
    }
});

app.listen(3000, () => { //nodemon(서버 열기)
    console.log("서버 접속 완료!!!")
})