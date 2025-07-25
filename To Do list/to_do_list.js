let AddButton=document.getElementById("addButton");

let tasklist=document.getElementById("tasklist");
AddButton.addEventListener("click",()=>{
    var input1=document.getElementById("input1").value;
    let h = document.createElement("li"); 
        h.innerHTML = input1; 
        h.classList.add("h"); 
        tasklist.appendChild(h); 

           //Edit Btton
        let EditButton=document.createElement("button");
        EditButton.textContent="Edit";
        EditButton.classList.add("EditButton"); 
        h.appendChild(EditButton)
        EditButton.addEventListener("click",()=>{
            console.log("edit a value")
            let EditValue=prompt("enter new Value Add")
            h.firstChild=EditValue;
        
        });

        //Delete Button

        let DeletButton=document.createElement("button");
        DeletButton.textContent="Delete";
        DeletButton.classList.add("DeletButton");
        h.append(DeletButton)
        DeletButton.addEventListener("click",()=>{
           
          h.remove()
            
        })
        
        console.log(input1)
})


document.addEventListener("DOMContentLoaded",()=>{

})


