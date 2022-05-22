// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  throught: ProductTag,
  as: 'product_tag',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag) Tag belongs to many Product models.
Tags.belongsToMany(Product, {
  throught: ProductTag,
  as: 'product_tag',
  foreignKey: 'tag_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
