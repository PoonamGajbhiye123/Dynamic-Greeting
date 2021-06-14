button1 = document.querySelector("button")
input1 = document.querySelector("input")
output = document.querySelector(".output")

button1.addEventListener("click", showMessage)
function showMessage(){
    let message = `Welcome ${input1.value} in Board Infinity`
    output.innerHTML = "<h3><I>Hello</I></h3>"+ message
}