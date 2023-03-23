const createUser = document.getElementById("add-user-form");

createUser.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nameValue = document.getElementById('username').value;
    let lastNameValue = document.getElementById('surname').value;
    let passwordValue = document.getElementById('password').value;
    let rolesValue = getRoles(Array.from(document.getElementById("newRole").selectedOptions).map(role => role.value));
    console.log(nameValue + " " + lastNameValue + " " + passwordValue + " " + rolesValue)

    fetch('http://localhost:8080/api/admin/', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            username: nameValue,
            surname: lastNameValue,
            password: passwordValue,
            roles: rolesValue,
        })
    })
        .then(user => {
            const usersArr = [];
            usersArr.push(user);
            showAllUsers(usersArr)
        })
        .then(() => {
            document.getElementById("tab1").click();})
})

function getRoles(roles_) {
    let roles = [];
    if (roles_.indexOf("ROLE_ADMIN") >= 0) {
        roles.push({"id": 1});
    }
    if (roles_.indexOf("ROLE_USER") >= 0) {
        roles.push({"id": 2});
    }
    return roles;
}