function newItem(){
// create list element and append input to it.
  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(inputValue);
// function for adding an item to the list.
  if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(li);
   }
// function for striking out an item from the list.
   function crossOut() {
     li.toggleClass('strike');
   }

   li.on('click', crossOut);
// Adding crossout button and having it disappear
  X = 'X';
  xButton = $('<crossOutButton>X</crossOutButton>');
  li.append(xButton);
  xButton.on('click', deleteListItem);

  function deleteListItem(){
    li.addClass('delete');
  }
// Make function sortable.
   $('#list').sortable();

}
