//initialize Async Function
async function fetchUserData(){
   //define the API URL
    const apiUrl =  'https://jsonplaceholder.typicode.com/users';

    //Select the Data Container Element
    const dataContainer = document.getElementById("api-data");

    //Fetch data using try catch
   
          try {
           const response = await fetch(apiUrl); //fetch data
           const users = await response.json(); //Parse JSON

    //Clear Previous Content
           dataContainer.innerHTML = '';

    //Create  and Populate the user list       
            const userList = document.createElement('ul');
            users.forEach((user) =>{
                const liElement =document.createElement('li');
                liElement.textContent = user.name;
                userList.appendChild(liElement);
               });

    //Append the list to the Data Container;
           dataContainer.appendChild(userList);

    //Error Handling;
          } catch (error){
           dataContainer.innerHTML ='';
           dataContainer.textContent = 'Failed to load user data.'; 
          }
    }

//Invoke fetchUserData on DOMContenLoaded     
document.addEventListener('DOMContentLoaded', fetchUserData);
   
