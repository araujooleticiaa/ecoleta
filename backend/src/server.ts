import express from 'express';

const app = express();

app.get('/', (req, res) => {
 return res.json({ok: false})
})


app.listen(3333)
