// 引入express模块
const express=require('express')
// 引入cors模块
const cors=require('cors');
// 引入中间件body-parser
const bodyParser=require('body-parser')
// 引入mysql模块，创建连接池
const mysql=require('mysql');
// 引入MD5
const MD5=require('MD5')
// 创建服务器对象
const server=express();
// 设置端口号
server.listen(3000,()=>{
    console.log('server is running......');
});
// 中间件cors
server.use(cors({
    origin:['http://localhost:8080','http://127.0.0.1:8080/']
}));
// 中间件body-parser
server.use(bodyParser.urlencoded({
    extended:false
}))

// 创建连接池
const pool=mysql.createPool({
    host:'176.18.8.11',
    port:'3306',
    user:'root',
    password:'',
    database:'web2010',
    connectionLimit:'20'
});
// 接口
// 列表查询排序
server.get('/list',(req,res)=>{
    var id=req.query.id;
    let rid=req.query.rid;
    let sort=req.query.sort;
    if(sort==3){
        sort=0
    }
    if(rid==0&&sort==1){
        // 全部价格降序
        var sql='select id,image01,title,title01,title02,price from web_list where category_id=? order by sales_volume desc'
    }
    if(rid==0&&sort==2){
        // 全部销量降序
        var sql='select id,image01,title,title01,title02,price from web_list where category_id=? order by price desc'
    }
    if(rid!=0&&sort==1){
        // 小类销量降序
        var sql='select id,image01,title,title01,title02,price from web_list where category_id=? and relation_id=? order by sales_volume desc'
    }
    if(rid!=0&&sort==2){
        // 小类价格降序
        var sql='select id,image01,title,title01,title02,price from web_list where category_id=? and relation_id=? order by price desc'
    }
    if(rid==0&&sort==0){
        // 默认搜索全部
        var sql='select id,image01,title,title01,title02,price from web_list where category_id=?'
    }
    if(rid!=0&&sort==0){
        // 搜索小类
        var sql='select id,image01,title,title01,title02,price from web_list where category_id=? and relation_id=?';
    }
    if(isNaN(id)){
        var id='%'+id+'%';
        var sql="select id,image01,title,title01,title02,price from web_list where keyword like ?"
    }
    
    pool.query(sql,[id,rid],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})
// 首页情人节商品请求
server.get('/index',(req,res)=>{
    let sql='select id, image01,title,title02,price from web_list where id in (1,7,20,21)';
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})
// 请求首页列表商品
server.get('/index_list',(req,res)=>{
    let id=req.query.id;
    let num=parseInt(req.query.num)
    let sql='select id,image01,title,title01,title02,flower_means,price,sales_volume from web_list  where category_id=? limit 1,?';
    pool.query(sql,[id,num],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})
// 请求商品详情
server.get('/details',(req,res)=>{
    let id=req.query.id
    // l.id=l.id,评论数不够，暂时使用全部查询，不区分商品
    let sql='select l.id,l.image01,l.image02,l.image03,l.image04,l.title,l.title01,l.title02,l.price,l.sales_volume,l.flower_means,l.material,l.package,l.range,l.image_text01,l.image_text02,l.image_text03,l.image_text04,l.image_text05,c.star,c.content,c.com_image01,c.com_image02,c.com_image03,c.com_image04,c.comment_time,u.user_pic,u.nickname from web_list as l inner join web_comment as c on c.id=c.id inner join web_user as u on user_id=u.id where l.id=? limit 1,3';
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})