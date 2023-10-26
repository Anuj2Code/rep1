

// // logic bto fill table ;
const show =()=>{
let tb = document.querySelector('table');
let data = localStorage.getItem('passwords')
if(data==null){
  tb.innerHTML = 'No Data To show';
}
else{
  tb.innerHTML = `<tr>
  <td>website</td>
  <td>username</td>
  <td>passwords</td>
  <td>"delete"</td>
  </tr>`
  let arr  = JSON.parse(data);
 let  s=" ";
  for(let i = 0;i<arr.length;i++){
    const ele = arr[i];
    s +=  `<tr>
    <td>${ele.website}</td>
    <td>${ele.username}</td>
    <td>${ele.passwords}</td>
    <td>${"delete"}</td>
    </tr>`
  }
tb.innerHTML = tb.innerHTML+s;
}
}
show()
document.querySelector('.btn').addEventListener('click',(e)=>{
   e.preventDefault();
  console.log('clicked');
  console.log(la.value,laa.value);
  let passwords  = localStorage.getItem('passwords')
  console.log(passwords);
  if(passwords == null){
    let json = []
    json.push({website:we.value,username:la.value,passwords:laa.value});
    alert("password saved");
    localStorage.setItem('passwords',JSON.stringify(json));
  }else{
     let json = JSON.parse(localStorage.getItem('passwords'))
     json.push({website:we.value,username:la.value,passwords:laa.value});
    alert("password saved");
    localStorage.setItem('passwords',JSON.stringify(json));
  }
    show()
}) 
