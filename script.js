//your JS code here. If required.
let p = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello,world!")
	},1)
})
p.then((data)=>{
	document.getElementById("output").innerText=data
})