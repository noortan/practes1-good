'use strict';


// array have all trips
let trips=JSON.parse(localStorage.getItem('Trips'))?JSON.parse(localStorage.getItem('Trips')):[];


// constrouctor 
function Trip(Pname,Tname,Tot,path)
{
    this.Pname=Pname;
    this.Tname=Tname;
    this.Tot=Tot;
    this.path=path;
    trips.push(this);

}


// get the form data

let tripForm=document.getElementById('tripForm');

tripForm.addEventListener('submit',function(event){
    event.preventDefault();
    // get the data
    let Pname,Tname,Tot,path;
    Pname=event.target.Pname.value;
    Tname=event.target.Tname.value;
    Tot=event.target.TOT.value;
    // console.log(Pname,Tname,Tot);
    if (Tname==='HAWAII') {
        path='images/HAWAII.jpg';
    }
    else if (Tname==='LONDON') {
        path='images/LONDON.png';
    }
    else if (Tname==='PARIS') {
        path='images/PARIS.png';
    }
    else if (Tname==='ITALY') {
        path='images/ITALY.png';
    }
    else if (Tname==='SLOVAKIA') {
        path='images/SLOVAKIA.png';
    }
    else
    {
        path='images/MALAYSIA.png';
    }

    let newObject=new Trip(Pname,Tname,Tot,path);
    // console.log(trips);
    setItem();
    render(newObject);

});

// set item to localStorge

function setItem()
{
    localStorage.setItem('Trips',JSON.stringify(trips));
}


let tBody=document.getElementById('tableBody');
let rows=[];
localStorage.setItem('rows',JSON.stringify(rows));
for (let i = 0; i < trips.length; i++) {
    render(trips[i]);
    
}
function render(data)
{
    if(rows!==null)
    {
        rows=JSON.parse(localStorage.getItem('rows'));

    }
    let tr=document.createElement('tr');
    rows.push(rows.length);
    tr.setAttribute('id',`R${rows.length-1}`);
    localStorage.setItem('rows',JSON.stringify(rows));
    tBody.appendChild(tr);
    //array of data
    let image=`<image src="${data.path}">`;
    let info=`<ul>
        <li>Place name: ${data.Pname}</li>
        <li>Trip name: ${data.Tname}</li>
        <li>Type of transport: ${data.Tot}</li>
    </ul>`;
    let removeBtn=`<button id="btn${rows.length-1}" onclick="remItem(${rows.length-1})">X</button>`
    let attrib=[removeBtn,image,info];
    let td=[];
    for (let i = 0; i < 3; i++) {
        td[i]=document.createElement('td');
        tr.appendChild(td[i]);
        if (i===0) {
            td[i].innerHTML=attrib[i];
        }
        else if (i===1) {
            td[i].innerHTML=attrib[i];
        }
        else if(i===2)
        {
            td[i].innerHTML=attrib[i];
        }
        
    }
}


function remItem(rowId)
{
    document.getElementById(`R${rowId}`).remove();
    let localArray=JSON.parse(localStorage.getItem('Trips'));
    localArray.splice(rowId,1);
    localStorage.setItem('Trips',JSON.stringify(localArray));
}

let clearBtn=document.getElementById('clearAll');

clearBtn.addEventListener('click',function(event){
    event.preventDefault();
    tBody.remove();
    localStorage.clear('Trips');
});