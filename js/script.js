function register(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let course = document.getElementById('course').value;
  let genderoption=document.getElementsByName('gender');
  for(let i=0;i<genderoption.length;i++){
    if(genderoption[i].checked){
      gender=genderoption[i].value;
    }
  }
  let message = document.getElementById('message');
  let result = document.getElementById('result');
  if(name==="" || email===""){
    message.innerHTML="&#10060; Please fill all required fields";
    message.className="message error";
    result.innerHTML="";
  } else {
    message.innerHTML="&#9989; Registration Successful";
    message.className="message success";
    
    result.innerHTML=` 
    <p>Name:${name}</p>
    <p>Email:${email}</p>
    <p>Course:${course}</p>
    <p>Gender:${gender}</p>
    `;
  }
}
