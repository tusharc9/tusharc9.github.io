var users = [
    '<a href="Arcanum Unbounded.epub" download> Bla </a>',
    'Naruto',
    'Ichigo',
    'Flash',
    'Batman',
    'Sherlock Holmes',
    'Khaleesi',
    'Steve Fox'
  ];
  
  ul = document.getElementById("users-list");
  
  var render_lists = function(lists){
    var li = "";
    for(index in lists){
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  
  render_lists(users);
  
  // lets filters it
  input = document.getElementById('filter_users');
  
  var filterUsers = function(event){
    keyword = input.value.toLowerCase();
    filtered_users = users.filter(function(user){
          user = user.toLowerCase();
         return user.indexOf(keyword) > -1; 
    });
    
    render_lists(filtered_users);
  }
  
  input.addEventListener('keyup', filterUsers);
  
  