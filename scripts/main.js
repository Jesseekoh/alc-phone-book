//declare variable
var contactList = [{
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

}];

var contact = {
  name: '',
  phone: '',
  mobile: '',
  address: '',
  email: '',
}

var list = $('#contact-list');

//loops through the contactList and appends each contact name to a ul
for(var i=0;i<contactList.length;i++){
  //create a list item with the contact name 
 var item = '<li>' + contactList[i].name + '</li>';
 //appends the li to list
 list.append($(item));

}