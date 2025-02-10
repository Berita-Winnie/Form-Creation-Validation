//Initialize the async function
async function fetchUserData () {

//define the API URL     
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//select the Data Container Element
const dataContainer = document.getElementById('api-data');

//fetching data using try catch
try {
    const response = await fetch (apiUrl);
    const users = await response.json();

//clear and loading Message
    dataContainer.innerHTML = '';

//clear and append user list
const userList = document.createElement("ul");

 users.forEach((user) => {
       const li = document.createElement("li");
       li.textContent = user.username;
       userList.appendChild(li);
 });
 dataContainer.appendChild(userList);

} catch (error) {
    
//clear existing Content
dataContainer.innerHTML ='';
dataContainer.textContent = 'Failed to load user data.'
}

}
 
document.addEventListener("DOMContentLoaded", function(){
       fetchUserData();
});
