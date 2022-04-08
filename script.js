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
  let contactView = document.querySelector(".contactinfo");
  globalThis.clone_view = contactView.cloneNode(true);
  while (contactView.firstChild) {
    contactView.removeChild(contactView.firstChild)
  }
}

//View function 2
function renderView(contactList) {
  let contactInfo = document.querySelector(".contactinfo");
  clone_view.querySelector(".contactname").firstChild.data = contactList.name;
  clone_view.querySelector(".contactemail").innerText = "email: " + contactList.email;
  clone_view.querySelector(".contactphone").innerText = "cell: " + contactList.phone;
  clone_view.querySelector(".contactaddress").innerText = "address: " + contactList.address;
  
  contactInfo.appendChild(clone_view);
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