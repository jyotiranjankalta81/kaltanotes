"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class BlogsInstance extends sequelize_1.Model {
}
exports.BlogsInstance = BlogsInstance;
BlogsInstance.init({
    BLOG_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    IMAGE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    HEADING: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    CONTENT: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    LIKE: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ADDED_BY: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_blogs',
});
//# sourceMappingURL=blogs.model..js.map