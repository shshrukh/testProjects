const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('eMail');
const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');
const gneder = document.getElementById('gender');
const birth= document.getElementById('birth');
const education = document.getElementById('education');
const skills = document.getElementById('skills');
const action = document.getElementById('action');
// console.dir(fName.value);
// console.log(fName.value, lName.value,email.value)
usersArrys = new Array();
// console.log(usersArrys);


class UserDetails {
    constructor(fName, lName, email, password, confPassword, gneder, birth, education, skills) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
        this.confPassword = confPassword;
        this.gneder = gneder;
        this.birth = birth;
        this.education = education;
        this.skills = skills;
    }
}


action.addEventListener('click', (e)=>{ 
    e.preventDefault();
    const u1 = new UserDetails( fName.value, lName.value, email.value, password.value, confPassword.value, gneder.value, education.value, skills.value)
    usersArrys.push(u1)
    fName.value = '';
    lName.value = '';
    email.value = '';
    password.value = '';
    confPassword.value = '';
    gneder.value = '';
    education.value = '';
    skills.value = '';
    birth.value = '';
    console.log(usersArrys);
});




