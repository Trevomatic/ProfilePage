$(document).ready(function(){

  $('.link').on('click', function(e){
    e.preventDefault();
    target = $(this).attr('data');
    $(target).animatescroll({padding:40});
  });


    var description = "Full-Stack Web Developer",
        name = 'Trevor Hall',
        button = "<a class='btn btn-primary btn-lg'>LEARN MORE ABOUT ME</a>";
        nameDiv = document.getElementById('name'),
        descDiv = document.getElementById('desc'),
        buttonDiv = document.getElementById('button'),
        character_counter = 0,
        nameInterval = setInterval(updateName, 300),
        descInterval = 0;
        nameDiv.innerHTML = '&nbsp;';
        descDiv.innerHTML = '&nbsp;';
        buttonDiv.innerHTML = '&nbsp;';

    function updateName()
    {
      if(character_counter < name.length) {
        if(name[character_counter] == ' ') {
          nameDiv.innerHTML = nameDiv.innerHTML+'&nbsp;';
        }
        else {
          nameDiv.innerHTML = nameDiv.innerHTML+name[character_counter];
        }
      }
      character_counter++;
      if(character_counter == name.length + 3){  
        clearInterval(nameInterval);
        descInterval = setInterval(updateDesc, 300);
        character_counter = 0;
      }
    }

    function updateDesc()
    {
      if(character_counter < description.length) {
        if(description[character_counter] == ' ') {
          descDiv.innerHTML = descDiv.innerHTML+'&nbsp;';
        }
        else {
          descDiv.innerHTML = descDiv.innerHTML+description[character_counter];
        }
      }
      character_counter++;
      if(character_counter == description.length + 5){  
        clearInterval(descInterval);
        buttonDiv.innerHTML = button;
      }
    }

    


});