const allUsersTable = document.getElementById("all-users");
const fetchUrl = "http://localhost:8080/api/admin";


async function showAllUsers() {
    fetch(fetchUrl)
        .then((res) => res.json())
        .then(
            (users) => {
                if (users.length > 0) {
                    let temp = "";

                    users.forEach((user) => {
                        let roles_ = [];

                        for (let role of user.roles) {
                            roles_.push(role)
                        }

                        temp += `<tr>
                        <td>${user.name}</td>
                        <td>${user.surname}</td>
                        <td>${roles_.map(role=>" " + role.role.toString().replaceAll("ROLE_", ""))}</td>
                        <td>
                             <button class="btn btn-info" type="button"
                             data-toggle="modal" data-target="#modalEdit" onclick="editModal(${user.id})">Edit</button></td> 
                             <td>
                             <button class="btn btn-danger" type="button"
                             data-toggle="modal" data-target="#modalDelete" onclick="deleteModal(${user.id})">Delete</button></td> 
                        </tr>`;
                    })
                    allUsersTable.innerHTML = temp;
                }
            }
        )
}

showAllUsers()


