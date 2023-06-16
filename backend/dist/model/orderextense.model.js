"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderextenseInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class OrderextenseInstance extends sequelize_1.Model {
}
exports.OrderextenseInstance = OrderextenseInstance;
OrderextenseInstance.init({
    ORDER_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "tbl_order",
            key: "ORDER_ID",
        },
        allowNull: false,
    },
    NORMAL_ID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    SPECIAL_ID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    DOCUMENT_STATUS: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    DOCUMENTS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    PAYMENT_TYPE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    PAYMENT_ID: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    NOTES_APPLIEDON: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    NOTES_APPLIEDBY: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    COMPLETION_DATE: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    COMPLETED_BY: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_ordeextense',
});
//# sourceMappingURL=orderextense.model.js.map