import express from 'express'
import 'dotenv/config'
const app = express();
import models, {sequelize} from './model/config';
import { routes } from './route/routes';

app.use(express.json());

app.use(async (req, res, next) => {
    req.context = {
      models,
    };
    next();
  })

app.use('/curriculum', routes.curriculumRoute);

const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC;

sequelize.sync({force: eraseDatabaseOnSync})

app.listen(3000, () =>{
    console.log('Server on port 3000');
})