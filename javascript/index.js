var img1=document.querySelector(".sagecover")
var img2=document.querySelector(".stotlecover")
var path1="./Images/sage cover.jpg"
var path2="./Images/stotle cover.jpg"

img1.addEventListener("click",function(){
    if(img1.getAttribute("src")===path1){
        img1.setAttribute("src", path2)
        img2.setAttribute("src", path1)
    }else{
        img1.setAttribute("src", path1)
        img2.setAttribute("src", path2)
    }
})
img2.addEventListener("click",function(){
    if(img1.getAttribute("src")===path1){
        img1.setAttribute("src", path2)
        img2.setAttribute("src", path1)
    }else{
        img1.setAttribute("src", path1)
        img2.setAttribute("src", path2)
    }
})