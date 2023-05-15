 const express =require("express") // imorting express

const app = new express () //initilising

app.use(express.urlencoded({extended:true}));
app.use(express.json());

                           //api creation
app.get('/', (req,res)=>{   
    res.json("hello welcome to the backend")
})
app.post('/singup',(req,res)=>{
    res.send(req.body.name)
    
 })
 

                        //setting port
app.listen(3007,()=>{
 console.log("Acessing your reguest: Authorizathion Accesed ")
})