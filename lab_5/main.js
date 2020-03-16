// original
content.innerHTML("<ol class='countries'>");
function random_countries() {
  for (let x = 0; x < 26; x++) {
    random = Math.floor(Math.random() * 243);
    code = countries[random].code;
    name = countries[random].name;
    if (country in countries) {
      random = Math.floor(Math.random() * 243);
      code = countries[random].code;
      name = countries[random].name;
    }
  }
  countries.foreach(
    document.querySelector(".content").appendChild("<li><b>" + code + "</b> " + name + "</li>")
  )
  document.querySelector(".content").appendChild("</ol>");
  random_countries();
}


// query selector instead of inner html
document.querySelector(".content").innerHTML="<ol class='countries'>";
function random_countries() {
  for (let x = 0; x < 26; x++) {
    random = Math.floor(Math.random() * 243);
    code = countries[random].code;
    name = countries[random].name;
  } 
countries.foreach(
  document.querySelector(".content").appendChild("<li><b>" + code + "</b> " + name + "</li>")
)
}
document.querySelector(".content").appendChild("</ol>");

//works
const content = document.querySelector(".content");
function random_countries() {
    content.innerHTML += "<ol class='countries'>"
    for (let x = 0; x<26; x++) {
        rand = Math.floor(Math.random()*243)
        content.innerHTML += "<li><b>" + countries[rand].code + "</b> " + countries[rand].name + "</li>";
    }
    content.innerHTML += "</ol>"
}

const content = document.querySelector(".content");
function random_countries() {
  content.innerHTML += "<ol>";
  for (let x = 0; x < 26; x++) {
    rand = Math.floor(Math.random() * 243);
    content.innerHTML +=
      "<li><b>" + countries[rand].code + "</b> " + countries[rand].name + "</li>";
  }
  content.innerHTML += "</ol>";
}

//new array
console.log("List of countries in the world", countries);
const content = document.querySelector(".content");
const code_arr = [];
const name_arr = [];
function random_countries() {
  for (let x = 0; x < 25; x++) {
    rand = Math.floor(Math.random() * 243);
    code_arr.push(countries[rand].code);
    name_arr.push(countries[rand].name)
  }
  content.innerHTML += "<ol>";
  for (let x = 0; x < 25; x++) {
    content.innerHTML += "<li><b>" + code_arr[x] + "</b> " + name_arr[x] + "</b> </li>";
  }
  content.innerHTML += "</ol>";
  // if statement for country can't appear twie
  // numbered list
  // EC display alphabetically
}


  //if (new_arr.length === 25) {
  //  random_countries();
  //}
  for (let x = 0; x < 25; x++) {
    const rand = Math.floor(Math.random() * (countries.length));
    if (countries[rand] in new_arr) {
      rand = Math.floor(Math.random() * (countries.length));
    }
    new_arr.push({code: countries[rand].code, name: countries[rand].name});
  }
  document.querySelector(".content").innerHTML += "<ol class='rand_list'>";
  for (let x = 0; x < new_arr.length; x++) {
    document.querySelector(".content").innerHTML += "<li><b>" + 
      new_arr[x].code + "</b> " + new_arr[x].name + "</b></li>";

              // alphabetical order
              new_arr.sort((a,b) => {
                if (a<b) 
                  return -1;
                if (a>b) 
                  return 1;
                return 0;
              })




                      /*for (let x = 0; x < 13; x++) {
          rand = Math.floor(Math.random() * countries.length);
          //if (countries[rand] in new_arr) {
          //  rand = Math.floor(Math.random() * countries.length);
          //}
          new_arr.push({code: countries[rand].code, name: countries[rand].name});
        }
        new_arr.forEach(listing);
        function listing() {
          final_list = "<ol class='rand_list'>";
          for (let x = 0; x < new_arr.length; x++) {
            final_list += "<li><b>" + new_arr[x].code + "</b> " +
              new_arr[x].name +"</b></li>";
          }
          final_list += "</ol>";
          document.querySelector(".content").innerHTML = final_list;
        }
      }*/