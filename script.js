var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfDF8MHx8fDA%3D" , story:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfDF8MHx8fDA%3D" },
    {dp:"https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHwxfDB8fHww" , story:"https://images.unsplash.com/photo-1597898111396-f149999e08f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHwxfDB8fHww" },
    {dp: "https://media.istockphoto.com/id/1952306305/photo/close-up-portrait-of-a-little-baby-laughing-with-her-mouth-open-dressed-in-a-ruffled-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=NHD5B6z3nvmqVuXfuR1BDZnMks5QOyxRigixw4FO0nQ=", story:"https://media.istockphoto.com/id/2240099799/photo/proud-child-showing-arm-with-bandage-after-vaccination-in-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=D28CZjAhS8Rsk6kHUOJGlo1rIcHldYxLVUb31DZlMkc=" },
    {dp: "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHwxfDB8fHww", story:"https://media.istockphoto.com/id/1395727868/photo/happy-smiling-school-girl-kid-holding-empty-slate-board-near-paddy-field-concept-of-education.jpg?s=612x612&w=0&k=20&c=3tZxeSZHHXdt5DtIvM_cQeGXYj3tea3cavtsPcJaSmk=" },
]


var storiyan = document.querySelector('#storiyan')
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener('click',function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
})

setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
},3000)


