import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { orderinterface } from '../interface/order.interface';


export class OrderInstance extends Model<orderinterface> {
    EMAIL(EMAIL: any): any {
        throw new Error("Method not implemented.");
    }
}
OrderInstance.init(
    {
        ORDER_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        ORDER_TYPE: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        F_NAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        L_NAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DOB: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        VISA_APP_NO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PATNER_TYPE: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        SUPPOSE_F_NAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SUPPOSE_L_NAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SUPPOSE_DOB: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UCI_NUMBER: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ATIP: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        HEAR_CMT: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        STATUS: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        ISEDITED: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ISDELETED: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        APPLIED_BY: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        APPLIED_AT: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },

    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_order',
    }
);

