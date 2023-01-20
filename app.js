let users = [];
let city=['Nagpur','kanpur','Banglore','Ahmedabad','Mumbai','Chennai','Banglore','Pune','Hyderabad']

let alertdiv=document.getElementById('alert')
let userdiv=document.getElementById('user')
let randomindex=Math.floor(Math.random()*city.length)
let randomcity=city[randomindex]
console.log(randomcity)


function register(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age=document.getElementById('age').value;
  
    let name1=document.getElementById('name1')
    let email1=document.getElementById('email1')
    let city=document.getElementById('city')
    
    // check if email exists
    let countEmail  = users.filter((user)=>{
        return user.email == email;
    })
    // storing the value to my array
    let tempUser = {
        name: name,
        email: email,
        age: age,
    }
   
    if(countEmail.length == 0 && age>=18 && age<=24)
    {
      
        users.push(tempUser);
        console.log(tempUser)
        console.log("eligible for Exam")

       
        alertdiv.innerHTML="Registered Sucessfully "
        alertdiv.classList.remove('d-none')
        alertdiv.classList.add('sucess')
        alertdiv.classList.remove('hide-alert')

        name1.innerText=name;
        email1.innerText=email;
        city.innerText=randomcity;
        
        name = document.getElementById('name').value=""
        email = document.getElementById('email').value=""
        age=document.getElementById('age').value=""

        
    
       setTimeout(()=>{
        name1=document.getElementById('name1').value=""
         email1=document.getElementById('email1').value=""
         city=document.getElementById('city').value=""
       },2000)

       
        
        setTimeout(()=>{
            alertdiv.classList.add('hide-alert')
            alertdiv.classList.remove('sucess')
        },2000)
        
      
    }

   else {

    name = document.getElementById('name').value=""
    email = document.getElementById('email').value=""
    age=document.getElementById('age').value=""

    alertdiv.innerHTML="Not eligible for exam minimum age 18 and maximum 24 is required"
    alertdiv.classList.remove('d-none')
    alertdiv.classList.remove('hide-alert')
    alertdiv.classList.add('danger')
   
    
    
        
    
    // console.log('not eligible')

    setTimeout(()=>{
        alertdiv.classList.remove('danger')
        alertdiv.classList.add('hide-alert')
        
    },3000)
    
   }   

}

register()