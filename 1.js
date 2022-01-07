function sendMsg() {
    let parentDiv = document.querySelector("#parent");
  
   
    let prevChildTags = parentDiv.innerHTML;
  

    let inputValue = document.querySelector("#input").value;
  
    if (inputValue.length > 3) {

      let newChildTag = `<div class="alert alert-secondary">${inputValue}</div>`;
  
      parentDiv.innerHTML = `${newChildTag} ${prevChildTags} `;
  
      
      document.querySelector("#input").value = "";
    } else {
     
      document.querySelector("#input").classList.add("border-3");
      document.querySelector("#input").classList.add("border-danger");
    }
  }
  
  function validateBorder() {
    let inputValue = document.querySelector("#input").value;
    if (inputValue.length > 3) {
      document.querySelector("#input").classList.remove("border-danger");
    }
  }