//Array of contacts
let contactList = [
  {
    name: "Barry Allen",
    phone: "+1 555 555-5555",
    address: "123 front st, Unit #1, Dakota City",
    email: "theflash@gmail.com",
  },
  {
    name: "Beverly Crusher",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "chiefmedicalofficer@slack.example.com",
  }, 
  {
    name: "Diana Prince",
    phone: "123-867-5309",
    address: "Warner Brothers Animation Lot",
    email: "wonderwoman@doc.example.com",
  }
]

//Index function 1
function cleanUpindex() {
var contactList = document.querySelector(".main");
  while (contactList.firstChild) {
      contactList.removeChild(contactList.firstChild);
  }
}

//Index funtion 2
function createSingleIndex(){
  let createLink = document.createElement("a");
  let createDiv = document.createElement("div");
  let createP = document.createElement("p");

  document.querySelector('.main').appendChild(createLink)
  createLink.setAttribute('href','page3.html')
  createLink.appendChild(createDiv).setAttribute('class','contact');
  document.querySelector('.contact').appendChild(createP);
  createP.innerText = contactList[0].name;

}

//Index function 3
function renderIndex(CList){
  for(i = 0; i< contactList.length; i++){
      let createLink = document.createElement("a");
      let createDiv = document.createElement("div");
      document.querySelector('.main').appendChild(createLink);
      createLink.setAttribute('href','page3.html');
      createLink.appendChild(createDiv).setAttribute('class','contact');
  const divs = document.querySelectorAll('.contact');
  divs[i].innerText = CList[i].name;
  }
}

//View function 1
function cleanUpView() {
  var contactView = document.querySelector(".contactinfo");
  while (contactView.firstChild) {
  contactView.removeChild(contactView.firstChild)
  }
}

//View function 2
function renderView(Clist){
  let qselct = document.querySelector('.contactinfo');
  for(i=0;i<5;i++){
    qselct.appendChild(document.createElement('div'));
  }
  let classList = ['contactname','contactemail','contactphone','contactaddress','buttons'];
  let childDivs = qselct.getElementsByTagName('div');
  let keylist = Object.keys(Clist);
  let valuelist = Object.values(Clist)
  childDivs[0].innerText = keylist[0] +': '+ valuelist[0];
  childDivs[1].innerText = keylist[3] +': '+ valuelist[3];
  childDivs[2].innerText = 'cell: '+ valuelist[1];
  childDivs[3].innerText = keylist[2] +': '+ valuelist[2];
  for(i=0; i<5; i++){
    childDivs[i].setAttribute('class',classList[i])
  }
  document.querySelector('.'+classList[0]).innerText = Clist.name;
  document.querySelector('.'+classList[0]).appendChild(document.createElement('img'));
  let selectImg = document.querySelector('.'+classList[0]).getElementsByTagName('img');
  selectImg[0].setAttribute('src','./img/profile.jpg');
  selectImg[0].setAttribute('class','profilepic');
  selectImg[0].setAttribute('alt','Profile picture');
  for(i=0; i <2;i++ ){
  document.querySelector('.buttons').appendChild(document.createElement('button'));
  }
  let childButton = document.querySelector('.'+classList[4]).getElementsByTagName('button');
  let buttonClass = ['button edit','button close'];
  let buttonValue = ['Edit','Close']
  for(i=0;i<2;i++){
    childButton[i].setAttribute('class',buttonClass[i]);
    childButton[i].setAttribute('value',buttonValue[i])
    childButton[i].innerText = buttonValue[i];
  }
}

//Create function 1
function cleanUpCreate() {
  var createContact = document.querySelector(".contactedit");
  while (createContact.firstChild) {
      createContact.removeChild(createContact.firstChild);
  }
}

//Create function 2
function renderCreate(){
  //button setup
  let buttonidArray = ['extranamefield','extraphonefield','extraaddressfield','extraemailfield'];
  //input tag set up
  let inputattribute = ['type','id','name','placeholder'];
  let inputtypeArray = ['text','tel','text','email'];
  let attributeidArray = ['contactname','contactphone','contactaddress','contactemail'];
  let inputPlaceholderArray = ['Contact Name','Contact Phone','Contact Address','Contact Email'];
  var Layer1 = document.querySelector(".contactedit");
  //<div class = contactimg></div>
  Layer1.appendChild(document.createElement("div")).setAttribute('class','contactimg');
  //<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
  document.querySelector(".contactimg").appendChild(document.createElement("img")).setAttribute('src','./img/profile.jpg');
  document.querySelector("img").setAttribute('class','profilepic');
  document.querySelector(".profilepic").setAttribute('alt','Profile picture')
  //<div class="form">
  Layer1.appendChild(document.createElement("div")).setAttribute('class','form');
  document.querySelector('.form').appendChild(document.createElement("form"));
  for(i=0; i<4;i++){
    document.querySelector('form').appendChild(document.createElement("div")).setAttribute('class','inputcontainer');
   }  
  let subelement = document.querySelectorAll('.inputcontainer'); 
  for(i=0;i<subelement.length;i++){
    subelement[i].appendChild(document.createElement("input"));
    subelement[i].appendChild(document.createElement("button")).innerText = '+';
  }
  let subinput = document.querySelectorAll('input');

  for(y=0;y<inputattribute.length;y++){
    if(inputattribute[y]=='type'){
      for(q=0;q<inputtypeArray.length;q++){subinput[q].setAttribute(inputattribute[y],inputtypeArray[q]);}
    }
    if(inputattribute[y]=='id'){
      for(q=0;q<inputtypeArray.length;q++){subinput[q].setAttribute(inputattribute[y],attributeidArray[q]);}
    }
    if(inputattribute[y]=='name'){
      for(q=0;q<inputtypeArray.length;q++){subinput[q].setAttribute(inputattribute[y],attributeidArray[q]);}
    }
    if(inputattribute[y]=='placeholder'){
      for(q=0;q<inputtypeArray.length;q++){subinput[q].setAttribute(inputattribute[y],inputPlaceholderArray[q]);}
    }
  }
  let subbutton = document.querySelectorAll('button');
  for(i=0 ;i<subbutton.length;i++){ 
    subbutton[i].setAttribute('class','extrafield');
  } 
  let buttoncalss = document.querySelectorAll('.extrafield')
  for(i=0 ;i<subbutton.length;i++){
    buttoncalss[i].setAttribute('id',buttonidArray[i]);
    buttoncalss[i].setAttribute('name',buttonidArray[i]);
  }
  document.querySelector('form').appendChild(document.createElement("div")).setAttribute('class','buttons');
  document.querySelector('.buttons').appendChild(document.createElement('button')).innerText = 'Save Contact';
  document.querySelector('.buttons').appendChild(document.createElement('button')).innerText = 'Cancel';
  var L1 = document.querySelector('.buttons');
  var L2 = L1.getElementsByTagName('button');
  L2[0].setAttribute('type','submit');
  L2[0].setAttribute('class','button save');
  L2[0].setAttribute('id','savecontact');
  L2[0].setAttribute('name','savecontact');
  L2[1].setAttribute('type','reset');
  L2[1].setAttribute('class','button cancel');
  L2[1].setAttribute('id','cancel');
  L2[1].setAttribute('name','cancel');
}