function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
         var response = JSON.parse(this.responseText);
       // console.log(response);
        var jgrocery=response.grocery;
       // console.log(jgrocery);
   
     var table="";
    
       
        for (var j=0 ;j<jgrocery.length ;j++){
           
          table +="<tr>" 
          table +="<td>" +jgrocery[j].sino+ "</td>"
          table +="<td>" +jgrocery[j].name+ "</td>"
          table +="<td>" +jgrocery[j].quantity+ "</td>"
          table +="<td>" +jgrocery[j].unit+ "</td>"
          table +="<td>" +jgrocery[j].deptmnt+ "</td>"
          table +="<td>" +jgrocery[j].notes+ "</td>"
          
          for (var i=0 ;i<jgrocery.length ;i++){
          } table +="</tr>"
         
       
         } 
      
         document.getElementById("tdata").innerHTML = table;
        
    }
}
xhttp.open("GET","grocery.json",true);
xhttp.send();
 }