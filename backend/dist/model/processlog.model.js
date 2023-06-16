"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogModel = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class ProcessLogModel extends sequelize_1.Model {
}
exports.ProcessLogModel = ProcessLogModel;
ProcessLogModel.init({
    LOG_ID: {
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
    PROCESS_STATUS: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    PERPOUS: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ISDELETED: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_processlog',
});
//# sourceMappingURL=processlog.model.js.map