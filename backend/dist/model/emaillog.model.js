"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class EmailInstance extends sequelize_1.Model {
}
exports.EmailInstance = EmailInstance;
EmailInstance.init({
    MAIL_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    ORDER_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "tbl_order",
            key: "ORDER_ID",
        },
        allowNull: false,
    },
    EMAIL_STATUS: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    PERPOUS: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EMAIL_BODY: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    ISDELETED: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_emaillog',
});
//# sourceMappingURL=emaillog.model.js.map