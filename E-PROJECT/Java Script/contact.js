document.getElementById('aform')
.addEventListener('submit',function(event){
    event.preventDefault()
    var nam = document.getElementById('an').value
    var eml = document.getElementById('an1').value
    var feed = document.getElementById('an2').value
     document.getElementById('era1').style.display="none"
     document.getElementById('era2').style.display="none"
     document.getElementById('era3').style.display="none"

 
var reg__a =  /^[a-zA-Z\s]+$/
var reg__b = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
var reg__c =  /^.+$/

if (!reg__a.test(nam)){   
    document.getElementById('an').style.border="2px solid red"
    document.getElementById('era1').textContent="Invalid input"
    document.getElementById('era1').style.display="block"
    document.getElementById('era1').style.color="red"
}

if (!reg__b.test(eml)){
    document.getElementById('an1').style.border="2px solid red"
    document.getElementById('era2').textContent="Invalid input"
    document.getElementById('era2').style.display="block"
    document.getElementById('era2').style.color="red"
}
if (!reg__c.test(feed)){   
    document.getElementById('an2').style.border="2px solid red"
    document.getElementById('era3').textContent="Invalid input"
    document.getElementById('era3').style.display="block"
    document.getElementById('era3').style.color="red"
}
})