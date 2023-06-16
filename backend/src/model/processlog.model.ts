import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { email_log, orderinterface, ProcessLogInstance } from '../interface/order.interface';


export class ProcessLogModel extends Model<ProcessLogInstance> { }
ProcessLogModel.init(
    {
        LOG_ID: {
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
        PROCESS_STATUS: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        PERPOUS: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ISDELETED: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_processlog',
    }
);

