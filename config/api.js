const ApiRootUrl = 'http://127.0.0.1:8360/api/';

module.exports = {
  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口
  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录

  CatalogList: ApiRootUrl + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: ApiRootUrl + 'catalog/current',  //分类目录当前分类数据接口

  GoodsCount: ApiRootUrl + 'goods/count',  //统计商品总数
  GoodsHot: ApiRootUrl + 'goods/hot',  //热门
  GoodsList: ApiRootUrl + 'goods/list',  //获得商品列表
  GoodsCategory: ApiRootUrl + 'goods/category',  //获得分类数据
}