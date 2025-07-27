import{b as e,c as t}from"./index-DH_gci9F.js";var n=t(e());const r={title:`TypeScript Branded Types: Preventing Accidental Errors Like a Pro`,date:`2025-07-27`,slug:`typescript-branded-types`,description:`In large TypeScript codebases, mixing up values like userId, email, or currency, all just plain strings or numbers can silently lead to subtle bugs. Branded types offer a zero-runtime, type-safe solution by letting you create semantically distinct versions of primitives using TypeScript's type system. This post walks through how to define and use branded types`,tags:[`TypeScript`,`Branded-Types`,`Type-Safety`]};function i(){return(0,n.jsxs)(`article`,{children:[(0,n.jsxs)(`p`,{children:[`You ever accidentally passed an `,(0,n.jsx)(`code`,{children:`email`}),` where a`,` `,(0,n.jsx)(`code`,{children:`userID`}),` was expected because they were both just`,` `,(0,n.jsx)(`code`,{children:`string`}),`? You're not alone and that's exactly why`,` `,(0,n.jsx)(`strong`,{children:`branded types`}),` exist.`]}),(0,n.jsx)(`h3`,{children:`The Problem: `}),(0,n.jsxs)(`p`,{children:[`In TypeScript, primitives like `,(0,n.jsx)(`code`,{children:`string`}),` and`,` `,(0,n.jsx)(`code`,{children:`number`}),` are `,(0,n.jsx)(`em`,{children:`too generic`}),`:`]}),`Example:`,(0,n.jsx)(`pre`,{children:(0,n.jsx)(`code`,{className:`language-ts`,children:`function fetchUser(userID: string) { /* ... */ }

const email = "alice@example.com";
fetchUser(email); // No compile error!`})}),(0,n.jsxs)(`p`,{children:[`You wanted `,(0,n.jsx)(`code`,{children:`userID`}),`, but any string is allowed no complaints from the compiler. This can cause critical logic bugs, especially in large codebases.`]}),(0,n.jsx)(`h3`,{children:`The Solution: Branded Types`}),(0,n.jsxs)(`p`,{children:[`A branded type lets you `,(0,n.jsx)(`em`,{children:`semantically distinguish types`}),` that share the same primitive base like `,(0,n.jsx)(`code`,{children:`userID`}),`,`,` `,(0,n.jsx)(`code`,{children:`Email`}),`, or `,(0,n.jsx)(`code`,{children:`OrderID`}),`.`]}),(0,n.jsx)(`pre`,{children:(0,n.jsx)(`code`,{className:`language-ts`,children:`type Brand<T, B> = T & { __brand: B };

type userID = Brand<string, "userID">;
type Email = Brand<string, "Email">;`})}),(0,n.jsx)(`p`,{children:`Now, these aren't interchangeable anymore:`}),(0,n.jsx)(`pre`,{children:(0,n.jsx)(`code`,{className:`language-ts`,children:`function fetchUser(userID: userID) { /* ... */ }

const userID = "user-123" as userID;
const email = "alice@example.com" as Email;

fetchUser(userID); // ✅ OK
fetchUser(email);  // ❌ Type error! (Good!)`})}),(0,n.jsx)(`h3`,{children:`Use Cases`}),(0,n.jsxs)(`ul`,{children:[(0,n.jsxs)(`li`,{children:[(0,n.jsx)(`code`,{children:`UserID`}),` Prevent mixing IDs with plain strings`]}),(0,n.jsxs)(`li`,{children:[(0,n.jsx)(`code`,{children:`Email`}),` Ensure format-validated input only`]}),(0,n.jsxs)(`li`,{children:[(0,n.jsx)(`code`,{children:`Amount USD`}),` Distinguish currencies safely`]}),(0,n.jsxs)(`li`,{children:[(0,n.jsx)(`code`,{children:`HtmlSafe`}),` Escape-verified HTML only`]})]}),(0,n.jsx)(`h4`,{children:`No Runtime Cost`}),(0,n.jsx)(`p`,{children:`Branded types disappear at runtime they're pure TypeScript magic for compile-time safety only.`}),(0,n.jsx)(`pre`,{children:(0,n.jsx)(`code`,{className:`language-ts`,children:`const payload = JSON.stringify(userID); // stringified as normal`})}),(0,n.jsx)(`h4`,{children:`With Validation Functions`}),(0,n.jsx)(`p`,{children:`Wrap branding in a validator for safer usage:`}),(0,n.jsx)(`pre`,{children:(0,n.jsx)(`code`,{className:`language-ts`,children:`const user1 = "user-123";
const email = "bob@example.com";
const email1 = "alice@example.com" as Email;


function isValid(value: string): value is userID {
    if (!value.startsWith("user-")) {
        throw new Error("Invalid user ID format");
    }
    return true;
}

function fetchUser1(userID: userID) { /* ... */ }

if (isValid(user1)) {
    fetchUser1(user1); // oK
}

fetchUser1(email); // Type error! (Good!)
fetchUser1(email1); // Type error! (Good!)`})}),(0,n.jsx)(`hr`,{}),(0,n.jsx)(`h4`,{children:`But, isn't this Just Type Assertion?`}),(0,n.jsxs)(`p`,{children:[`Yes branding uses `,(0,n.jsx)(`code`,{children:`as`}),` assertions. But the power is in making the compiler `,(0,n.jsx)(`em`,{children:`remember`}),` a distinction between two otherwise-identical types. You get`,` `,(0,n.jsx)(`strong`,{children:`semantic validation at compile time`}),`, without runtime wrappers.`]}),(0,n.jsx)(`h4`,{children:`Clean Branded Type Utilities`}),(0,n.jsx)(`pre`,{children:(0,n.jsx)(`code`,{className:`language-ts`,children:`type Brand<T, B extends string> = T & { readonly __brand: B };
type Branded<T, Name extends string> = Brand<T, Name>;

type userID = Branded<string, "userID">;
type Email = Branded<string, "Email">;`})}),(0,n.jsx)(`hr`,{}),(0,n.jsx)(`h3`,{children:`Conclusion`}),(0,n.jsx)(`p`,{children:`Branded types are a lightweight way to:`}),(0,n.jsxs)(`ul`,{children:[(0,n.jsx)(`li`,{children:`Enforce semantic type boundaries`}),(0,n.jsxs)(`li`,{children:[`Prevent bugs where `,(0,n.jsx)(`code`,{children:`"string"`}),` isn't specific enough`]}),(0,n.jsx)(`li`,{children:`Improve code self documentation`}),(0,n.jsxs)(`li`,{children:[`Add `,(0,n.jsx)(`strong`,{children:`zero runtime overhead`})]})]}),(0,n.jsxs)(`p`,{children:[`Use them to express intent and lock down your domain model like a pro. In a large TypeScript codebase, they're`,` `,(0,n.jsx)(`strong`,{children:`low effort, high impact`}),`.`]}),(0,n.jsx)(`h3`,{children:`What Do You Think?`}),(0,n.jsx)(`p`,{children:`Have you used branded types in production? Or do you prefer wrapper classes or opaque types? Share your experience!`})]})}export{i as default,r as metadata};