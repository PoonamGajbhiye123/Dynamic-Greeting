
button1 = document.querySelector("button")
output = document.querySelector(".output")

button1.addEventListener("click", displayMessage)

function displayMessage()
{
    let message 
    let date = new Date()
    let hours = date.getHours()
    if(hours < 12)
    {
        message = "Good Morning!"
    }
    else if(hours >= 12 && hours <= 17)
    {
        message = "Good Afternoon!"
    }
    else if(hours >=17 && hours <= 22)
    {
        message = "Good Evening!" 
    }
    else 
    {
        message = "Good Night!" 
    }
    output.innerText = message


}