import { Sequelize } from "sequelize"
import getCurriculum from "./curriculum"

const sequelize = new Sequelize(process.env.DB_URL)

const models = {
    Curriculum: getCurriculum(sequelize, Sequelize),
};

export default models;
export { sequelize }

