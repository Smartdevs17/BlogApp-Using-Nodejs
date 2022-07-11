const fs = require('fs');

//Fetching all Post
const fetchPost = async() => {
    try {
        posts = await JSON.parse(fs.readFileSync("blog.txt"));
        return posts
    } catch (error) {
        return []
    }
}


//Adding Posts to doc file
const addPost = async(data) => {
    let posts = await fetchPost();
    if(data.title === undefined || data.topic === undefined || data.author === undefined){
        console.log("This fields title topic or author are required");
    }else{
        let uniquePost = await posts.filter(post => post.title === data.title);
        if(uniquePost.length ===0){
            posts.push(data)
            fs.writeFileSync("blog.txt",JSON.stringify(posts));
            console.log("New post added successfully");        
        }else{
            console.log("Does not support duplicate items")
        }
    }
   
};

//Fetching an Author Post
const readPost = async(author) => {
    let posts = await fetchPost()
    try {
        let authorPosts = await posts.filter(post => post.author === author)
        if(authorPosts.length ===0 ){
            console.log("No post found for this author");
        }else{
            console.log(authorPosts)
        }
    } catch (error) {
        console.log(error)
    }
}

//Remove an Author post by title
const removePost = async(title) => {
    let posts = await fetchPost();

    try {
        const filteredPost = await posts.filter(post => post.title !== title)
       await fs.writeFileSync("blog.txt",JSON.stringify(filteredPost));
        console.log("Successfully deleted post");
    } catch (error) {
        console.log(error);
    }
};

//Fetching all Post for doc file
const allPost = async() => {
    let posts = await fetchPost();
    try {
        await posts.map(post => console.log(post) );
        console.log("all post found");
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addPost,
    readPost,
    removePost,
    allPost
}