function deleteModal(id) {
    fetch('http://localhost:8080/api/admin/' + id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(res => {
        res.json()
            .then(user => {
                document.getElementById('idDel').value = user.id;
                document.getElementById('firstNameDel').value = user.name;
                document.getElementById('lastNameDel').value = user.surname;
            })
    })
}

async function deleteUser() {
    await fetch('http://localhost:8080/api/admin/' + document.getElementById('idDel').value, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(document.getElementById('idDel').value)
    })
        .then(() => {
            document.getElementById("tab1").click();
            showAllUsers();
            document.getElementById("closeDeleteModal").click();})
}