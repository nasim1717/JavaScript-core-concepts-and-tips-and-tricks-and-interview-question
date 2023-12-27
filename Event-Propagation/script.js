const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

/***
 * -------------event bubling----------------
 * parent.addEventListener("click", listener);
 * form.addEventListener("click", listener);
 *button.addEventListener("click", listener);
 ----------event bubling end----------------
 */
/**
 * -----------event capturing-----------
 * parent.addEventListener("click", listener, {
    capture: true
});
form.addEventListener("click", listener, {
    capture: true
});
button.addEventListener("click", listener, {
    capture: true
});
---------------event capturing end-----------
 */

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true); //capturing ay vabeo deoa jai kintu jodi 3 no parameter a aro kicu parameter dite cai ta hole object er modhe dite hobe

button.addEventListener("click", listener);

function listener(event) {
    console.log(this.tagName);
}