let html = "";
let obj = {"1":"Name", "2":"Age", "3":"Gender"};
for(var key in obj){
  html += "<option value=" + key  + ">" + obj[key] + "</option>";
}
document.getElementById("your-id").innerHTML = html;
