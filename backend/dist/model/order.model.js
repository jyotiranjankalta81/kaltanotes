"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class OrderInstance extends sequelize_1.Model {
    EMAIL(EMAIL) {
        throw new Error("Method not implemented.");
    }
}
exports.OrderInstance = OrderInstance;
OrderInstance.init({
    ORDER_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    ORDER_TYPE: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    F_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    L_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    DOB: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    VISA_APP_NO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PATNER_TYPE: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    SUPPOSE_F_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SUPPOSE_L_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SUPPOSE_DOB: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    UCI_NUMBER: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    ATIP: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    HEAR_CMT: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    STATUS: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ISEDITED: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ISDELETED: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    APPLIED_BY: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    APPLIED_AT: {
        type: 'TIMESTAMP',
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_order',
});
//# sourceMappingURL=order.model.js.map