var i=1,j,k;
var s= function(event) {
    for(k=1;k<=i;k++)
    {
        if(document.getElementById("idd"+k))
        {
            document.getElementById("id"+k).style.backgroundColor="white";
        }
    }
     event.target.previousSibling.style.backgroundColor="coral";
  };
var s1=function(event) {
    var ele=event.target.parentElement;
     ele.remove();
 };

function fun1()
{   var di=document.createElement("div");
    di.id="idd"+i;
 
    var check=document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.id="idc"+i;
    check.class="checkbox";

    var lis=document.createElement("li");
    lis.id="id"+i;
    lis.classList.add("list");
    var text=document.getElementById("textbox").value;
    var apptext=document.createTextNode(text);
    lis.appendChild(apptext);
    
    var right=document.createElement("button");
    var text=document.createTextNode("active");
    right.class="rightbut";
    right.id="idr"+i;
    right.appendChild(text);
   
    
    var wrong=document.createElement("button");
    var text1=document.createTextNode("X");
    wrong.class="wrongbut";
    wrong.id="idw"+i;
    wrong.appendChild(text1);
    
    di.appendChild(check);
    di.appendChild(lis);
    di.appendChild(right);
    di.appendChild(wrong);

 document.getElementById("unorder").appendChild(di);
 document.getElementById(`idr${i}`).onclick = s;

 document.getElementById(`idw${i}`).onclick =s1;
  document.getElementById("textbox").value=" ";
    i++;
}

function fun2()
{
    for(j=1;j<=i;j++)
    {
        if(document.getElementById("idd"+j))
        if(document.getElementById("idc"+j).checked)
        {
            var ele=document.getElementById("idd"+j);
            ele.remove();
        }
    }
    
}
