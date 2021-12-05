const body = document.querySelector("body");

 submitData(userName,userEmail)

function submitData  (userName,userEmail){
    const infoObj = {
        name:userName,
        email:userEmail,
    }
    return fetch("http://localhost:3000/users",{
        method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
        body: JSON.stringify(infoObj),
      
        })
        .then(resp => resp.json())
        .then(users => {
            console.log(users);
            console.log(body);
            body.append(users.id);

        })
        .catch(error => {
            console.log(error.message)
            body.append(error.message)
        });
}



