module.exports = {
bitterTemplate: [
'<article>',
    '<h2 class= "user"> <%=user%> </h2>',

    "<div class = 'bitters-container'>",
        '<p class = "bitter-message" > <%= postBitter %> </p>',

    "</div>",
    "<div class = 'button-container'>",
    '<button type="button" class = "deleteBtn" name="deleteBtn">DELETE BITTER</button>',
    '<button type="button" class = "editBtn" name="editBtn">EDIT BITTER</button>',
    "</div>",
'</article>',
].join(""),

addBitter: [
  '<div class = "add-Bitter-container">',
  // '<form class = "">',
  '<input class = "user-input" type="text" placeholder="Enter Bitter ID" value="">',
  '<input class = "post-input" type="text" placeholder="Enter Bitter" value="">',
  '<button class = "addPost-button" value ="Submit">SUBMIT</button>',
  // '</form>',
  '</div>'
].join(""),

editPost: [
  '<div class = "editBitter-container">',
  // '<form class = "">',
  '<input class = "user-edit" type="text" placeholder="Enter Bitter ID" value="<%=user%>">',
  '<input class = "post-edit" type="text" placeholder="Enter Edited Bitter" value="<%=postMessage%>">',
  '<button class = "editPost-button" value ="Submit">SUBMIT</button>',
  // '</form>',
  '</div>'
].join("")
};
