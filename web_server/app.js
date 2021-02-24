// 引入express模块
const express=require('express')
// 引入cors模块
const cors=require('cors');
// 引入中间件body-parser
const bodyParser=require('body-parser')
// 引入mysql模块，创建连接池
const mysql=require('mysql');
// 引入MD5
const MD5=require('MD5');
const { query } = require('express');
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
    let sql='select id, image01,title,title02,price from web_list where id in (1,2,3,4)';
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
    let sql='select image01,image02,image03,image04 from web_list where id=?';
    pool.query(sql,[id],(err,image)=>{
        if(err) throw err;
        if(image.length==0){
            // 发送空数组
            res.send({image:image[0]})
        }else{
            let sql='select id,title,title01,title02,price,sales_volume,flower_means,material,package,area,type01,image_text01,image_text02,image_text03,image_text04,image_text05 from web_list where id=?';
            pool.query(sql,[id],(err,result)=>{
                if(err) throw err;
                // 查询评论
                let sql='select id,star,content,com_image01,com_image02,comment_time,user_id,user_pic,nickname from web_comment where list_id=? limit 1,1';
                pool.query(sql,[id],(err,results)=>{
                    if(err) throw err;
                    res.send({image:image,result:result,results:results})
                })
            })
        }
        
    })
    
})

// 请求全部评论
server.get('/comment',(req,res)=>{
    let id=req.query.id
    let sql='select id,star,content,com_image01,com_image02,user_id,user_pic,nickname from web_comment where list_id=?';
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})