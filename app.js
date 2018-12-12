var Mock = require('mockjs');
var Random = Mock.Random
var categories = ["电子产品", "生活用品", "图书影音"]

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'products|50': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: '@ctitle(5,10)',
        'price|100-300': 100,
        'rating|1-5': 1,
        desc: '@ctitle(6)',
        'category|1-6': 1
      }
    ],
    'categories|3': [
      {
        "id|+1": 1,
        'name|+1': categories
      }
    ]
  });
  // 返回的data会作为json-server的数据
  return data;
};