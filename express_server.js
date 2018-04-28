var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs")

TweetDB = {
  user_id: {
          user: {
            name: "Johann von Goethe",
            avatars: {
              small: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              regular: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              large: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            handle: "@johann49"
          },
          content: {
              text: "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          created_at: 1461113796368
  }
}

app.get("/", (req, res) => {
  var tweet = req.body.Tweet;
  res.render("index"); 
});

app.post("/tweets/", (req, res) => {
  var tweet = req.body.Tweet;
  
    TweetDB[generateRandomString()] = {"content.text": tweet}
    
    // let templateVars = {
    //   user_obj: {"id":lastGenNum,"email": email},
    //   urls: urlsForUser(lastGenNum,urlDatabase)
    // };
    res.render("index"); 




});

function generateRandomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  lastGenNum = text;
  return text;
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});








// app.post("/urls/loginPage", (req, res) => {
//   let email = req.body.email;
//   let password = req.body.password;
//   let exist = '';
//   let id = '';
//   sess = req.session;
//   tempUrlDatabase ={};
//   if ((email.length !==0) && (password.length !==0)) {
//     Object.keys(users).forEach(function(key) {
//       var hashedPassword = users[key].password;
//       if ((users[key].email === email)&&(bcrypt.compareSync(password, hashedPassword))) {
//         id = users[key].id;
//       }
//     });
//     if (id) {
//       sess.user_obj = users[id];
//       let templateVars = {
//         user_obj: {"id":id,"email": email },
//         urls: urlsForUser(id,urlDatabase)
//       };
//     res.render("urls_index",templateVars);
//     }else{
//       res.status(403).send("<h3>Sorry! your email address/password is incorrect</h3>");
//       res.render("urls_login");
//     }
//   }else{
//     res.status(400).send("<h3>Please enter your email and password correctly</h3>");
//     res.render("urls_login");
//   }
// })
