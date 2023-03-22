const data = document.getElementById("data-about-user");
const url = 'http://localhost:8080/api/user';

console.log("before")
function userInfo() {
    fetch(url)
        .then((res) => res.json())
        .then((user) => {
            console.log(user)

            let roles_ = [];

            for (let role of user.roles) {
                roles_.push(role)
            }

            let temp = '';

            temp +=
                `<tr>
            
            <td>${user.username}</td>
            <td>${user.surname}</td>
            <td>${roles_.map(role=>" " + role.role.toString().replaceAll("ROLE_", ""))}</td> 
            </tr>`;
            data.innerHTML = temp;
        });
}
userInfo()