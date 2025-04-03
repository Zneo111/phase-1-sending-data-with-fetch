// Add your code here
function submitData(name, email) {
   
    const formData = { name, email };


    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {

        const newIdElement = document.createElement("p");
        newIdElement.textContent = data.id;
        document.body.appendChild(newIdElement);
        return data;
      })
      .catch(error => {

        const errorElement = document.createElement("p");
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }
