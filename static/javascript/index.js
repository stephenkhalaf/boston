const predict= document.querySelector('.predict')
let bostonForm= document.querySelector('.boston_form')
const resultDiv = document.querySelector('#result')


predict.addEventListener('click',e=>{
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/predict')
    xhr.onreadystatechange = function(){
        if(xhr.status==200 && xhr.readyState==4){
            let result = parseInt(xhr.responseText)
            console.log(result)
            if(typeof result == 'number'){
                resultDiv.innerHTML = "The predicted price prediction is " + result
            }else{
                resultDiv.innerHTML = "An error occurred"
            }
           
        }
    }
    const formdata = new FormData(bostonForm)
    xhr.send(formdata)
})