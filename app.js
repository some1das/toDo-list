var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++)
{
      close[i].onClick=function(){
          var div=this.parentElement;
          div.style.display="none";
      }
}




function add(){

var text=document.getElementById('input').value;
var li=document.createElement("li");
var t=document.createTextNode(text);
li.appendChild(t);
if(text==='')
    {
        alert("please write something");
      }
      else{
          document.getElementById('ul').appendChild(li);
      }
      document.getElementById('input').value="";

      //lets give some power to the user...
      span=document.createElement("button");
      var text=document.createTextNode("X");
      span.className="close";
      span.appendChild(text);
      li.appendChild(span);
      for(i=0;i<close.length;i++)
      {
          close[i].onclick=function(){
              var div=this.parentElement;
              div.style.display="none";
          }
      }

}

