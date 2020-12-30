function loadData()
{
var http =new XMLHttpRequest() 
// var url="https://5fe2159b7a94870017681fad.mockapi.io/console"
var url="https://5fe2159b7a94870017681fad.mockapi.io/console"


http.open('get',url)
http.send()
http.onreadystatechange=function()
                {
                    if(http.readyState==4 && http.status===200)
                     var result=JSON.parse(http.responseText)
                     for(let index=0;index<result.length;index++)
                     {
                         
                     }
                     console.log(result )
                }
            
}