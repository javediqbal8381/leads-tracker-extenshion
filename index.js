let myleads =[]

const inputEl=document.getElementById('input-el')
const inputbtn=document.getElementById('input-btn')
let ulEl =document.getElementById('ul-el')
let deletebtn=document.getElementById('delete-btn')
let savetabbtn=document.getElementById('save-tab');

const leadsfromlocalstorage=JSON.parse(localStorage.getItem("leads"))
if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    renderLeeds()
}

deletebtn.addEventListener('dblclick',function(){
    localStorage.clear()
    myleads=[]
    renderLeeds()
})

inputbtn.addEventListener('click',function(){
myleads.push(inputEl.value)
inputEl.value=''
localStorage.setItem('leads',JSON.stringify(myleads) )

renderLeeds()
})



savetabbtn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem('leads',JSON.stringify(myleads))
        renderLeeds()
     });
     
})


function renderLeeds(){
    let ListItems=''
for(let i=0;i<myleads.length;i++){
    // ListItems+="<li><a target='_blank' href='"+myleads[i]+"'>"+myleads[i]+"</a></li>"
    ListItems+=`
    <li>
        <a target='_blank' href='${myleads[i]}'>
                 ${myleads[i]}
        </a>
    </li>`

}
ulEl.innerHTML=ListItems
}
