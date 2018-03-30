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

//select #contact-list and assign it to var list
var list = $('#contact-list');


function showContacts(){
  //loops through the contactList and appends each contact name to a ul
  for(var i=0;i<contactList.length;i++){
    //create a list  item with the contact name 
   var item = $('<div class="info" id="' + i + '">' + '<li>' + contactList[i].name + '</li>' + '<span class="test"></span>' + '</div>');
  //add eventListener on item
  item.on('click',function(){
   var id = $(this).attr('id');
    displayDetails(id)
   })
   //appends the li to list
   list.append(item);

  }
  
}
showContacts();

var saveButton = $('#submit')
console.log(saveButton);

saveButton.on('click',function(){
  //checks if the name field is empty
  if($('#name').val() === ''){
    return alert('Please enter a name')
  }
  var contact = {
    name: '',
    phone: '',
    mobile: '',
    address: '',
    email: '',
  }

  //getting the information from the form fields and assigning them to contact properties
  contact.name = $('#name').val();
  contact.phone = $('#phone').val();
  contact.mobile = $('#mobile').val();
  contact.address = $('#address').val();
  contact.email = $('#email').val();

  //add the current information in contact to contactList
  contactList.push(contact);

  //empties contactList
  list.empty();
 //empties the form
  $('#name').val('');
  $('#phone').val('');
  $('#mobile').val('');
  $('#address').val('');
  $('#email').val('');
  showContacts();
})

function displayDetails(contactId){

  console.log('i got id',contactId);
  //getting the value of the index of contactList and assigning it to details
  var details = contactList[contactId];
  console.log(details);

  //assigning details properties to the contact details field
  $('#contactName').text('Name: ' + details.name);
  $('#contactPhone').text('Phone: ' + details.phone);
  $('#contactMobile').text('Mobile: ' + details.mobile);
  $('#contactEmail').text('Email: ' + details.email);
  $('#contactAddress').text('Address: ' + details.address); 

  //putting the index value of each contact into the edit an delete buttons
  $('#edit').attr('data-index',contactId)
  $('#delete').attr('data-index',contactId)
  $('.options').css('display','flex');
}