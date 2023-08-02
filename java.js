let one =  document.getElementById('p')


function square(){
    const size = document.getElementById('size').value

    

   
    one.innerHTML = '';


    for (let i=1; i<size; i++){
   let row =  "";
  
    for (let j=1; j<=i; j++)

    row += "*"
   
    

    
 one.innerHTML+= row + "<br>"
}

}

// This is 

// let two = document.getElementById('m')

// function patt ()
//     const save = document.getElementById('save').value
//    two .innerHTML='';
   
//     for (let s = 1; s<=save; s++){
//    let too = "#";

//    for (let a = 1; a<=save; a++)
//    too = "*"


// two . innerHTML+= too + "<br>"

//    }


