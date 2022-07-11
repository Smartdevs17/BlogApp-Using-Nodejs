const yargs = require('yargs');
const {addPost,readPost, removePost, allPost} = require("./blog");

const topic = yargs.argv.topic;
const title = yargs.argv.title;
const author = yargs.argv.author;
const desc = yargs.argv.desc;
const command = yargs.argv._[0];


switch (command) {
    case "add":
        console.log("adding post...");
        data = {
            topic,title,author,desc
        }
        addPost(data)
        break;
    case "read":
        console.log("getting a post...");
        readPost(author)
        break;
    case "remove":
        console.log("deleting post...");
        removePost(title);
        break;
        
    case "list":
        console.log("fetching all posts...");
        allPost()
        break;
    default:
        break;
};

