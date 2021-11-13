import express from 'express';
import {Request, Response} from 'express';
const app = express();
const port = 3000;


app.get('/user', async (req: Request, res: Response) => {
    res.send({name: 'Szymon'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


export = {
    app
}