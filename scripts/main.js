//declare variable
var contactList = [
  {
    name: 'jesse',
    phone: '090987',
    mobile: '090988',
    address: 'schjd',
    email: 'dalj',

  },{
    name: 'john',
    phone: 'fj',
    mobile: 'fcg',
    address: '',
    email: '',

  },{
    name: 'jane',
    phone: 'f',
    mobile: 'fdf',
    address: '',
    email: '',

  }
];

var contact = {
  name: '',
  phone: '',
  mobile: '',
  address: '',
  email: '',
}

var list = $('#contact-list');

function showContacts(){
  //loops through the contactList and appends each contact name to a ul
  for(var i=0;i<contactList.length;i++){
    //create a list  item with the contact name 
   var item = '<div class="info">' + '<li>' + contactList[i].name + '</li>' + '<span class="test"></span>' + '</div>';
   //appends the li to list
   list.append($(item));

  }
  
}
showContacts();

var saveButton = $('#submit')
console.log(saveButton);

saveButton.on('click',function(){
  console.log('clicked')
  contact.name = $('#name').val();
  contact.phone = $('#phone').val();
  contact.mobile = $('#mobile').val();
  contact.address = $('#address').val();
  contact.email = $('#email').val();
  console.log(contact)
  console.log(contactList);
  contactList.push(contact);
  console.log('new list is: ',contactList)
  list.empty();
  $('#name').val('');
  $('#phone').val('');
  $('#mobile').val('');
  $('#address').val('');
  $('#email').val('');
  showContacts();
})


