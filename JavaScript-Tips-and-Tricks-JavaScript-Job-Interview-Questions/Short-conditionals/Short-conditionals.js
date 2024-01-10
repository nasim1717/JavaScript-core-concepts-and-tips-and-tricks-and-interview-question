// Short conditionals
const captain = "Mashrafi";

// Instead of doing this
if (captain === "Mashrafi") {
    console.log("❤️");
}

// We can use &&
captain === "Mashrafi" && console.log("❤️");

// And instead of doing this
if (captain !== "Mashrafi") {
    console.log("😡");
}

// We can use ||
captain === "Mashrafi" || console.log("😡");

// just for memory
const lang = "JavaScript1";

const result1 = lang && "JavaScript"; // left side truthy hole right side return korbe, otherwise left side return korbe

const result2 = lang || "JavaScript"; // left side falsy hole right side return korbe, otherwise left side return korbe

const result3 = lang ?? "JavaScript"; // Nullish Coalescing Operator: left side Nullish (Null or Undefined) hole right side return korbe, otherwise left side return korbe

console.log(result1); // JavaScript
console.log(result2); // JavaScript1
console.log(result3); // JavaScript1