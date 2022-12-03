const userData = {
    firstname: 'Ram',
    email: 'test@example.com'
}
const siteURL = 'https://redquark.org/leetcode/0020-valid-parentheses/xrxrp';
var slugIndex = siteURL.lastIndexOf('/');
slug = siteURL.substring(slugIndex+1);

userData.slug = slug;
const newUserData = { ...userData }; 

console.log(slug);
console.log("New User Data................");
console.log(newUserData);