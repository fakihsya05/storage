import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import CategoriesModels from "./CategoriesModels.js";
import UserModels from "./UserModel.js";

const { DataTypes } = Sequelize;

const ProductModels = db.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_products: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 100],
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url_img: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModels,
        key: "id",
      },
    },
    categories_id: {
      type: DataTypes.INTEGER,
      references: {
        model: CategoriesModels,
        key: "id", 
      },
    },
    create_by: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModels,
        key: "id", 
      },
    },
    update_by: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModels,
        key: "id",
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

UserModels.hasMany(ProductModels, { foreignKey: "user_id" });
ProductModels.belongsTo(UserModels, { foreignKey: "user_id" });
CategoriesModels.hasMany(ProductModels, { foreignKey: "categories_id" });
ProductModels.belongsTo(CategoriesModels, { foreignKey: "categories_id" });

export default ProductModels;
