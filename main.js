// function getfile(file,callback)
// {
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function(){
//   if(xhr.readyState === 4 && xhr.status=="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text)
// {
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.CareerObjective);
//   education(data.education);
//   skill(data.skill);
// })
function loadjson(file)
{
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile =loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.CareerObjective);
   education(data.education);
   skill(data.skill);
   Achievement(data.Achievement);
 })
var child= document.querySelector(".child1");
function details(det){
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name=document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);

  var phoneno=document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);

  var mail=document.createElement("a");
  mail.href="mailto:vandhithameegada12@gmail.com";
  mail.textContent=det.email;
  child.appendChild(mail);

  var add=document.createElement("h2");
add.textContent=det.add;
  child.appendChild(add);

  var Address=document.createElement("h2");
  Address.textContent=det.Address;
  child.appendChild(Address);

  var b=document.createElement("hr");
  child.appendChild(b);

}
var child2=document.querySelector(".child2")
function career(det)
{
  var text=document.createElement("h2");
text.textContent=det.text;
  child2.appendChild(text);

  var c=document.createElement("hr");
  child2.appendChild(c);

  var info=document.createElement("h3");
  info.textContent=det.info;
  child2.appendChild(info);
}
function education(edu){
  var ed=document.createElement("h2");
  ed.textContent="Education Qualification:";
  child2.appendChild(ed);

  var d=document.createElement("hr");
  child2.appendChild(d);
  for(i=0;i<edu.length;i++)
  {
    var deg=document.createElement("h2");
    deg.textContent=edu[i].degree;
    child2.appendChild(deg);

     var eduul=document.createElement("ul");
     var eduli=document.createElement("li");
     eduli.textContent=edu[i].institute;
     eduul.appendChild(eduli);
     child2.appendChild(eduul);

     var eduul=document.createElement("ul");
     var eduli=document.createElement("li");
     eduli.textContent=edu[i].duration;
     eduul.appendChild(eduli);
     child2.appendChild(eduul);

     var eduul=document.createElement("ul");
     var eduli=document.createElement("li");
     eduli.textContent=edu[i].branch;
     eduul.appendChild(eduli);
     child2.appendChild(eduul);
}
}
function skill(skillinfo)
{
  var sk=document.createElement("h2");
  sk.textContent="Technical skills:";
  child2.appendChild(sk);

  var e=document.createElement("hr");
  child2.appendChild(e);

var skilldata=document.createElement("table");
skilldata.border="1";
child2.appendChild(skilldata);

tabledata="";
for(i=0;i<skillinfo.length;i++)
{
  tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
}
skilldata.innerHTML=tabledata;
}
function Achievement(Achinfo)
{
  var ach=document.createElement("h2");
  ach.textContent="Achievements:";
  child2.appendChild(ach);

  var f=document.createElement("hr");
  child2.appendChild(f);

  var cer=document.createElement("h3");
  cer.textContent=Achinfo.title;
  child2.appendChild(cer);

  var ach1=document.createElement("ul");
  var ppt=document.createElement("li");
  ppt.textContent=Achinfo.ppt;
  ach1.appendChild(ppt);
  child2.appendChild(ach1);

  var ach1=document.createElement("ul");
  var cisco=document.createElement("li");
  cisco.textContent=Achinfo.cisco;
  ach1.appendChild(cisco);
  child2.appendChild(ach1);

  var ach1=document.createElement("ul");
  var csi=document.createElement("li");
  csi.textContent=Achinfo.csi;
  ach1.appendChild(csi);
  child2.appendChild(ach1);

  var ach1=document.createElement("ul");
  var web=document.createElement("li");
  web.textContent=Achinfo.web;
  ach1.appendChild(web);
  child2.appendChild(ach1);

  var ach1=document.createElement("ul");
  var  arduino=document.createElement("li");
  arduino.textContent=Achinfo.arduino;
  ach1.appendChild(arduino);
  child2.appendChild(ach1);
}
