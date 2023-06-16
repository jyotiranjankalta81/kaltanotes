"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    USERROLE: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    USERNAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    F_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    L_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PASSWORD: {
        type: sequelize_1.DataTypes.TEXT(),
        allowNull: false,
    },
    DOB: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true,
    },
    VISANO: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true,
    },
    EMAILSTATUS: {
        type: sequelize_1.DataTypes.BOOLEAN(),
        allowNull: true,
    },
    ISDELETED: {
        type: sequelize_1.DataTypes.BOOLEAN(),
        allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: "tbl_user",
});
//# sourceMappingURL=user.model.js.map