// const mainlogo = document.getElementById('main_logo')
// const mainlogo = document.querySelector('#main_logo')
// const all_links = document.getElementsByClassName('link')



// console.log(mainlogo)

// function sayHi(){
    
// }

// let myArrowFunc = ()=>{
//     document.body.innerHTML = `<h1>hi</h1>`

// }

// mainlogo.addEventListener("click",myArrowFunc)
const toggle_bar = document.getElementById('nav_toggle_button')
const main_sidebar = document.querySelector('.main_sidebar')
const close_button = document.getElementById('close_but')
// elemnts

let isToggle = false;

function toggle(event){
    // console.log("hii")

    console.log(event);   
    // function
    

    if(isToggle){
        main_sidebar.style.transform = "translateY(-100%)"
        isToggle= false;
    }else{
        main_sidebar.style.transform = "translateY(0%)"    
        isToggle= true;
    }
    // code

    // main_sidebar.style.transform = "translateY(0%)"    
    
}

// function closeNav(){
//     main_sidebar.style.transform = "translateY(-100%)"

// }

toggle_bar.addEventListener("mouseover" ,toggle)


close_button.addEventListener("mouseover",toggle)

const myname = "divya"

// document.body.innerHTML = `<h1>hi "${myname}"</h1>`

// console.log('Hi ' + myname);

