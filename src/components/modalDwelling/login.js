const express = require('express');
const router = express.Router();
import data from './data.json';

router.get('/', (req, res) => {
    res.status(404);
});


function logincheck(email, password){
    data.forEach(element => {
        if(element.email == email && element.password == password){
            return "success";
        }
    });
    return "error";
}
router.get('/test', (req, res) => {
    message = logincheck(req.body.email, req.body.password);
    if(message == "success"){
        res.json({ message: '/api/test' });
    }
    else{
        res.json({ message: 'error' });
    }
    res.json({ message: '/api/test' });
});

module.exports = router;