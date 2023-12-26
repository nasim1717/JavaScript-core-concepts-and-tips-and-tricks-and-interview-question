const sentence = "Learn with Sumit is all about teaching web development skill and techniques is an efficent and parctical manner. if you are just getting started in web development, learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stac to full stack developer. Learn with Sumit also deep dives i nto advanced topics using the latest best parctices for your seasecond web developers."

const matches = sentence.match(/sumit/gi);
const occurances = matches ? matches.length : 0;
console.log(occurances);

let position = sentence.search(/sumits/i); // na pele -1 dey
 position = position>0 ? position : "Not Found";
console.log(position);