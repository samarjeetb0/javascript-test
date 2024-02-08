// function a() { 
//     var b =10;
    
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// a();


//setTimeout & closure

function x(){
    var i =1;
    setTimeout(function(){
        console.log(i)
    },1000);
}

x();

document.getElementById("clickMe").addEventListener("click", function(){
    alert("clicked")
})