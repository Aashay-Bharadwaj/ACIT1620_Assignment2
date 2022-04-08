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
  let createContact = document.querySelector(".contactedit");
  globalThis.clone = createContact.cloneNode(true);
  createContact.parentNode.removeChild(createContact);
}

//Create function 2
function renderCreate() {
  let main = document.querySelector(".main")
  main.appendChild(clone)
}