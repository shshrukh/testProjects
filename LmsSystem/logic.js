
const fName = document.querySelector('#fName');
const mName = document.querySelector('#mName');
const lName = document.querySelector('#lName');
const gardianName = document.querySelector('#gardianName');
const dOfB = document.querySelector('#dOfB');
const currentClass = document.querySelector('#class');
const gender = document.querySelector('#gender');
const eMail = document.querySelector('#email');
const password = document.querySelector('#password');
const conPassword = document.querySelector('#conPassword');
const submitBtn = document.querySelector('#formSubmitBtn');

console.dir(fName);

let studensArray = [];
class Student {
    constructor(fName, mName, lName, gardianName, dOfB, currentClass, gender, eMail, password, conPassword){
        this.fName = fName;
        this.mName = mName;
        this.lName = lName;
        this.gardianName = gardianName;
        this.dOfB = dOfB;
        this.currentClass = currentClass;
        this.gender = gender;
        this.password = password;
        this.conPassword = conPassword;
        this.eMail = eMail;
    }
    getFullName(){
        if(this.mName != ''){
            return `${this.fName} ${this.mName} ${this.lName}`
        }else{
             return `${this.fName} ${this.lName}`
        }
    }
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const u1 = new Student(fName.value.trim(),mName.value.trim(), lName.value.trim(), gardianName.value, dOfB.value, currentClass.value, gender.value, eMail.value,password.value, conPassword.value)
    studensArray.push(u1);
});
submitBtn.addEventListener('propstate',()=>{

});