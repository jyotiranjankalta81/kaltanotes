"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactusInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class ContactusInstance extends sequelize_1.Model {
}
exports.ContactusInstance = ContactusInstance;
ContactusInstance.init({
    CONTACTUS_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    FULLNAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SUBJECT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TRACKINGID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MESSAGE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_contactus',
});
//# sourceMappingURL=contactus.js.map