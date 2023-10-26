const sel = document.querySelector('.naruto');
let numCount = 0;
const display = (numCount)=>{
   sel.innerText = numCount;
}
const addTask = ()=>{
    const TaskNmae = document.querySelector('.sasuke input').value.trim();
    if(!TaskNmae){
        setTimeout(()=>{
           document.querySelector('.last').style.display= "block"; 
    },200);
    return;
    }
    numCount++;
    const name = ` <div class="tas">
    <input type="checkbox" class="inpu">
    <span class="ch">${TaskNmae}</span>
    <button class="delete">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>`;
    document.querySelector('.task').insertAdjacentHTML('beforeend',name);
    const deleteButton = document.querySelectorAll(".delete");
   deleteButton.forEach((idx)=>{
    idx.onclick = ()=>{
        idx.parentNode.remove();
        if(numCount>0)numCount--;
        display(numCount)
    };
})
}

document.querySelector('.btn').addEventListener('click',()=>{
    addTask();
    document.querySelector(' .sasuke input').value="";
    display(numCount)
})