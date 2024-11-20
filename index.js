// https://jsonplaceholder.typicode.com/users

const userList = document.getElementById("user-list");
const detailList = document.getElementById("detail-list");

const users = [];

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json( )

    data.forEach(user => {
        const li = document.createElement("li");
        li.innerText = user.name;
        li.addEventListener("click", () => {
            li.innerText = '';
            users.push(user);
            updateDetails();
        })

        userList.appendChild(li);
    }); 
}

function updateDetails() {
    detailList.innerText = '';

    users.forEach(user => {
        const li = document.createElement("li");
        li.innerText = 
        `Name: ${user.name} 
        Username: ${user.username} 
        Email: ${user.email} 
        Street: ${user.address.street} 
        Suite: ${user.address.suite} 
        City: ${user.address.city} 
        Zipcode: ${user.address.zipcode} 
        Lat: ${user.address.geo.lat} 
        Lng: ${user.address.geo.lng}`;

        const div = document.createElement("div");
        div.append(li);
        div.classList.add("userItem");

        detailList.appendChild(div);
    })
}

getUsers();
