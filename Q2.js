const userData = {
    firstname: 'Ram',
    email: 'test@example.com'
}

const siteURL = 'https://redquark.org/leetcode/0020-valid-parentheses/xrxrp';

//Q2:  get the last slug from 'siteURL' and put in 'userData' object in a key named 'siteURL'. (try to use sprade operator if possible)



let slugIndex = siteURL.lastIndexOf('/');
let slug = siteURL.substring(slugIndex+1);
let slug1 = siteURL.split('/').pop();
userData.slug = slug;
userData.slug1 = slug1;

const newUserData = { ...userData, slug1}; 

console.log(slug);
console.log("New User Data................");
console.log(userData);
console.log(newUserData);