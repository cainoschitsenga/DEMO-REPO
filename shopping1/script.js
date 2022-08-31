const form = document.getElementById('form');
const name = document.getElementById('name');
const nam = document.getElementById('nam');
const na = document.getElementById('na');
const n = document.getElementById('n');

form.addEventListener('submit',(e)=>{
e.preventDefault();
checkinputs();
})
function checkinputs(){
// first get the value on inputs

const namevalue=name.value.trim();
const namvalue=nam.value.trim();
const navalue=na.value.trim();
const nvalue=n.value.trim();
if(nvalue==''){
    // show error
    // add error class
    setErrorFor(n,'cannot be blank')
}
else{
    // add success class
    setSuccessFor(n);
}
}
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small =formControl.querySelector('small')
    small.innerText =message;
    formControl.className='form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}















