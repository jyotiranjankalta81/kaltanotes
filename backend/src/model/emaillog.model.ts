import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { email_log, orderinterface } from '../interface/order.interface';


export class EmailInstance extends Model<email_log> { }
EmailInstance.init(
    {
        MAIL_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        ORDER_ID: {
            type: DataTypes.INTEGER,
            references: {
                model: "tbl_order",
                key: "ORDER_ID",
            },
            allowNull: false,
        },
        EMAIL_STATUS: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        },
        PERPOUS: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL_BODY: {
            type: DataTypes.TEXT,
            allowNull: true,
        },        
        ISDELETED: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_emaillog',
    }
);

