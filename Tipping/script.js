button1 = document.querySelector("button")
input1 = document.querySelector("input")
output = document.querySelector(".output")

button1.addEventListener("click", showMessage)
function showMessage(){
    let message = `You can donate ${input1.value*(10/100)}`
    output.innerHTML = "<h3><I> Hello</I> </h3>"+ message
}