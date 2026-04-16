const express = require('express');
const app = express();
// app is variable name
app.use(express.json());

const users = [
    { "id": 1, "name": "Raman", "address": "Amnour" },
    { "id": 2, "name": "Kaushal", "address": "Patna" },
    { "id": 3, "name": "Khushboo", "address": "Patna" }
];

app.get('/users', (request, response) => {

    response.status(200).json({
        message: "All Users Get Successfully",
        users: users
    })
});

app.delete('/deleteUser/:id', (request, response) => {
    const uID = parseInt(request.params.id);

    const userIndex = users.findIndex(u => u.id === uID);
    if (userIndex === -1) {
        response.json({
            message: "User Not Found"
        });
    }
    else {
        const data = users.splice(userIndex, 1)
        response.json({
            message: "User Deleted Successfully",
            data
        })

    }
});

app.put('/userUpdate/:id', (request, response) => {
    const uID = parseInt(request.params.id);
    const { name, address } = request.body;
    const uIndex = users.findIndex(u => u.id === uID);
    if (uIndex === -1) {
        response.json({
            message: "User Not Found"
        })
    }
    else {
        users[uIndex] = { uID, name, address };
        response.status(201).json({
            message: "Data updated successfully"

        })
    }
}
)
app.listen(3300, () => {
    console.log("Server is Running.....");
})

