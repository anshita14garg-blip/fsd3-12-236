// we use in memory database
let users = [
    { id: 1, name: "John Doe", mobile: "123-456-7890", email: "john@example.com" },
    { id: 2, name: "Jane Smith", mobile: "098-765-4321", email: "jane@example.com" },
]
// next id to be assigned to a new user
let nextId = 3;

// get all users
export const getAllUsers = () => {
    return users;
}

// get user by id
 export const getUserById = (pid) => {
    const found = users.find(user => user.id === pid);
    return found;
 }
export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};
 // update user by id
 export const updateUser = (pid, updatedUser) => {
    const index = users.findIndex(user => user.id === pid);
    if (index !== -1) {
       return false;
    }
    updatedUser.id = pid;
    users[index] = updatedUser;
    return updatedUser;
 }
 // delete user by id
     export const deleteUser = (pid) => {
    const index = users.findIndex(user => user.id === pid);
if ( index == -1){
    return false ;
}
users.splice(index, 1);  // splice used to delete from the  array
return true;
}