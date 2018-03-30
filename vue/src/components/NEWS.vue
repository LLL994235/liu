<template>
	
	<div>
		<div class="content">
			<div  class="add" >
				<button @click='add' class="a" v-if='idx==0'>+</button>
				<div class="qq" v-if='idx==1'>
					name:<input type="text" id="na"><br>
					 val : <input type='text'  id="val"><br>
					<button @click='sub' class="sub">提交</button>
				</div>
			</div>
			<div class="rows" v-for='(i,index) in arr'>
				<div class='row'>
					<p @click='aaa(index)'>{{'name  : '+i.tit+'  age : '+i.con | length }}</p>  <button @click='del(i.id,$event)'>X</button>
				</div>
			</div>
		</div>
		
	</div>


</template>


<script>

	export default{
			data(){
				return{
					arr:[],
					idx:0
				}
			},
			methods:{
				del(id,s){
					this.$http.get('http://localhost:8000/del?id='+id).then((e)=>{
						console.log('成功');
					});
					console.log(s.currentTarget.parentNode.remove())
				},
				add(){
					this.idx=1;
				},
				sub(){
					this.$http.post('http://localhost:8000',{id:na.value,val:val.value},{emulateJSON:true}).then((e)=>{
						console.log('成功');
					});
					this.idx=0;
				}
			},
			created(){
			this.$http.get('http://localhost:8000').then((el)=>{
				this.arr = el.body
			})
		}
	}


</script>
<style>
	.content{
		width: 300px;
		height: auto;
		background-color: #ccc;
		padding-bottom: 20px;
		overflow:hidden;
	}
	.rows{
		width: 100%;
		height: 30px;
		overflow: hidden;
	}
	p{
		float: left;
		margin-right: 30px;
	}
	button{
		float:right;
		margin-top: 5px;
	}
	.a{
		float: left;
	}
	.sub{
		float: left;
		margin-left: 150px;
	}
</style>