const express = require('express');
const bodyparse = require('body-parser');
const app=express();
const  mysql=require('mysql');

app.use(bodyparse.urlencoded({}));
const pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'item',
	host:3306
})
app.get('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')

	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query('SELECT * FROM news',(err,rows)=>{
			res.send(rows)
		})
	})

	// res.send(req.body)
})
app.get('/del',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')

	pool.getConnection((err,con)=>{
		if(err) throw err;
		var  sid=req.query.id;
		con.query('DELETE  FROM news WHERE id='+sid,(err)=>{
			if(err) throw err
		})
	})

	// res.send(req.body)
})
app.post('',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')

	pool.getConnection((err,con)=>{
		if(err) throw err;
		console.log(req.body)
		var  sid=req.body.id;
		var  sval=req.body.val
		con.query('INSERT INTO news (id,tit,con) VALUES (1,sd,qwee)',(err)=>{
			if(err) throw err
		})
	})

	// res.send(req.body)
})
app.listen(8000,function(e){
	console.log('成功')
})