// const express = require('express');
// const app = express();
// // app is variable name
// app.use(express.json());

// const users = [
//     { "id": 1, "name": "Raman", "address": "Amnour" },
//     { "id": 2, "name": "Kaushal", "address": "Patna" },
//     { "id": 3, "name": "Khushboo", "address": "Patna" }
// ];

// app.get('/users', (request, response) => {

//     response.status(200).json({
//         message: "All Users Get Successfully",
//         users: users
//     })
// });

// app.delete('/deleteUser/:id', (request, response) => {
//     const uID = parseInt(request.params.id);

//     const userIndex = users.findIndex(u => u.id === uID);
//     if (userIndex === -1) {
//         response.json({
//             message: "User Not Found"
//         });
//     }
//     else {
//         const data = users.splice(userIndex, 1)
//         response.json({
//             message: "User Deleted Successfully",
//             data
//         })

//     }
// });

// app.put('/userUpdate/:id', (request, response) => {
//     const uID = parseInt(request.params.id);
//     const { name, address } = request.body;
//     const uIndex = users.findIndex(u => u.id === uID);
//     if (uIndex === -1) {    
//         response.json({
//             message: "User Not Found"
//         })
//     }
//     else {
//         users[uIndex] = { uID, name, address };
//         response.status(201).json({
//             message: "Data updated successfully"

//         })
//     }
// }
// )
// app.listen(3300, () => {
//     console.log("Server is Running.....");
// })



// Q (2) ----------


// const express = require('express'); 
//  const app = express();
// app.use(express.json());

// const employees = [
//     { id: 1, name: "Amit", department: "IT" },
//     { id: 2, name: "Ravi", department: "HR" }
// ];

// // GET Employees
// app.get('/employees', (req, res) => {
//     res.json({
//         message: "All Employees",
//         data: employees
//     });
// });

// // DELETE Employee
// app.delete('/deleteEmployee/:id', (req, res) => {
//     const id = parseInt(req.params.id);

//     const index = employees.findIndex(e => e.id === id);

//     if (index === -1) {
//         return res.json({ message: "Employee Not Found" });
//     }

//     const deleted = employees.splice(index, 1);

//     res.json({
//         message: "Employee Deleted",
//         data: deleted
//     });
// });

// // UPDATE Employee
// app.put('/updateEmployee/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const { name, department } = req.body;

//     const index = employees.findIndex(e => e.id === id);

//     if (index === -1) {
//         return res.json({ message: "Employee Not Found" });
//     }

//     employees[index] = { id, name, department };

//     res.json({
//         message: "Employee Updated"
//     });
// });

// app.listen(3300, () => {
//     console.log("Server is Running.....");
// })




// Q(3) ---------

const express = require('express');
const app = express();
app.use(express.json());

const users = ["ram", "mohan", "shyam"];

//  GET METHOD
app.get('/users', (req, res) => {
    res.status(200).json({
        message: "get data successfully",
        users: users
    });
});

//  POST METHOD
app.post('/users', (req, res) => {
    const newUser = req.body.name;
    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        users: users
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000 🚀");
});


