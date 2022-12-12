const userData = {
    firstname: 'Ram',
    email: 'test@example.com'
}
const siteURL = 'https://redquark.org/leetcode/0020-valid-parentheses/xrxrp';

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