import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { blogsinterface } from '../interface/blogs.interface';



export class BlogsInstance extends Model<blogsinterface> {
}
BlogsInstance.init(
    {
        BLOG_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        IMAGE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        HEADING: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        CONTENT: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        LIKE: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        ADDED_BY: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_blogs',
    }
);

