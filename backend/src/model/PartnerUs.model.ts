import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { partnerusinterface } from '../interface/partnerus.interface';



export class PartnerusInstance extends Model<partnerusinterface> {
}
PartnerusInstance.init(
    {
        PARTNERUS_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        FULLNAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        WHATSAPP: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MESSAGE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_partnerus',
    }
);

