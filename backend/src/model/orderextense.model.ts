import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { orderextenseInterface } from '../interface/order.interface';


export class OrderextenseInstance extends Model<orderextenseInterface> {
    ORDER_ID: any;
}
OrderextenseInstance.init(
    {
        ORDER_ID: {
            type: DataTypes.INTEGER,
            references: {
                model: "tbl_order",
                key: "ORDER_ID",
            },
            allowNull: false,
        },
        NORMAL_ID: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        SPECIAL_ID: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        DOCUMENT_STATUS: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        DOCUMENTS: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PAYMENT_TYPE: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        PAYMENT_ID: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        NOTES_APPLIEDON: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        NOTES_APPLIEDBY: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        COMPLETION_DATE: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        COMPLETED_BY: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_ordeextense',
    }
);

