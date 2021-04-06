const users =[

    {
        id:1, name :"Denys", email:'test@test.com', password: '1234'
    }
];

const authUser =({email,password}) => new Promise((resolve,reject)=>{
   const user = users.find(_=>_.email === email);
   if (user){
       if(user.password === password) {
          setTimeout(()=>resolve(user), 1000);
       }else{
           setTimeout(()=>reject({error:"Wrong Credentials"}),1000);
       }
   }else {
       setTimeout(()=>reject({error:'User not Found'}), 1000);
   }
});

export {authUser}
