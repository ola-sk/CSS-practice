# Frontend Mentor - Newsletter sign-up form with success message | Solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

<!-- TOC -->
* [Frontend Mentor - Newsletter sign-up form with success message | Solution](#frontend-mentor---newsletter-sign-up-form-with-success-message--solution)
  * [Table of contents](#table-of-contents)
  * [Overview](#overview)
    * [The challenge](#the-challenge)
    * [Screenshot](#screenshot)
    * [Built with](#built-with)
    * [🟢 LIVE  Preview](#-live--preview)
    * [Links](#links)
  * [My process](#my-process)
    * [Preparation](#preparation)
    * [Positioning and styling the Subscription Form  📐✏️](#positioning-and-styling-the-subscription-form-)
      * [For both _desktop_ 🖥️ and _mobile_ 📱:](#for-both-desktop--and-mobile-)
      * [For _desktop_ 🖥️](#for-desktop-)
      * [Positioning and Styling the confirmation message](#positioning-and-styling-the-confirmation-message)
      * [Asynchronous form submission 🔄](#asynchronous-form-submission-)
    * [Challenges](#challenges)
      * [keypress events 👇🏻](#keypress-events-)
      * [pressing the Enter key submit the form w/o validation](#pressing-the-enter-key-submit-the-form-wo-validation)
    * [What I learned](#what-i-learned)
      * [🧡 HTML5 native form validation methods](#-html5-native-form-validation-methods)
      * [🧡 Semantic HTML](#-semantic-html)
      * [🧡 HTML Forms](#-html-forms)
      * [💛 Review of JavaScript: Handling DOM](#-review-of-javascript-handling-dom)
      * [💙 CSS Specificity](#-css-specificity)
      * [💙 CSS fixed positioning](#-css-fixed-positioning)
      * [💙 Flexbox properties: flex _shorthand property_ for:](#-flexbox-properties-flex-shorthand-property-for)
      * [💜 More on email validation and email strategy (beyond the scope)](#-more-on-email-validation-and-email-strategy-beyond-the-scope)
        * [Double opt-in ✅✒️](#double-opt-in-)
        * [What can be done before even sending the email to validate the address exists? 📮❓](#what-can-be-done-before-even-sending-the-email-to-validate-the-address-exists-)
          * [Method of e-mail validation one should NOT rely upon](#method-of-e-mail-validation-one-should-not-rely-upon)
        * [What if users try to use temporary email address and abandon it afterwards?](#what-if-users-try-to-use-temporary-email-address-and-abandon-it-afterwards)
        * [Term definitions](#term-definitions)
    * [📖 Useful resources](#-useful-resources)
  * [👩🏻‍💻 Author](#-author)
<!-- TOC -->

## Overview

### The challenge

Users should be able to:

- ✅ Add their email and submit the form
- ✅ See a success message with their email after successfully submitting the form
- ✅ See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Built with

- Semantic HTML5 markup
- Pure CSS (incl. Flexbox & custom variables)
- JavaScript
- Vercel (hosting & deployment)

- Git VCS

### 🟢 LIVE  Preview
- [newsletter-signup-rose-iota.vercel.app](https://newsletter-signup-rose-iota.vercel.app/)
- [newsletter-signup-ola-sks-projects.vercel.app](https://newsletter-signup-ola-sks-projects.vercel.app/)

### Links

- Solution URL: [github.com/ola-sk/CSS-practice](https://github.com/ola-sk/CSS-practice/tree/main/newsletter-sign-up-with-success-message)
- [Solution's page on Frontend Mentor](https://www.frontendmentor.io/solutions/responsive-signup-form-with-input-validation-and-response-simulation-5tNUz9MxIb)


## My process

### Preparation
- I started by reading about native HTML ways of validating form data. 
> Native HTML forms of verification are more performant, therefore preferred over handling the validation with JavaScript. JS on the other hand offers more adjustability.

- Once I knew what may do the job I set up semantic HTML structure learning more about it along the way from the [HTML specification](https://html.spec.whatwg.org/multipage/sections.html).
- I code the form with basic native HTML validation ⚠️✔️ ❗. 
- I link the spreadsheet and javascript files in the index.html. 
- I **reset the styles on all HTML elements** for uniform experience across browsers (each of the browser e.g. apply their own padding and margin, which makes final product render differently on each of them).

### Positioning and styling the Subscription Form  📐✏️
#### For both _desktop_ 🖥️ and _mobile_ 📱:
- I divide page into two parts: `<main>` stretching across the top 92% of the viewport height and the `<footer>` accommodating its size for its content and padding:
```CSS
main {
  min-height: 92svh;
}
.attribution { /* (footer) */
  font-size: 0.76rem;
  padding: 0.8rem;
  /*other styling*/
}

```
- Center `<article>` within `<main>` vertically and horizontally.
- Place the content within the `<article>` card: Flexbox is well suited here as there needs to be content distributed across column or row. Therefore, I use it to arrange the content of the form to the left, and the illustration to the right, within the `<article>` for desktop.
- The `<article>` as a Flexbox is immensely useful when coding mobile version as I simply change the `flex-direction` from `row` to `column-reverse` and have the illustration display at the top of the `<article>` element, effectively - on top of the page, while the second section: the form itself is right below it.
- I give the `<article>` maximum width of `760px`, which I estimate to be a reasonable value for desktop-size viewports so that it never gets too big for larger screens, and it dynamically adjusts its size for smaller viewports.
- The `<form>` along with related `<header>`, paragraph `<p>` and an unordered list `<ul>` is contained within the `<div class="newsletter-form">`.
- Set up font sizes and paddings/margins; style inputs and buttons.
- Add the top and bottom padding for the section `<div class="newsletter-form">` to establish its minimum height. The section with that vertical padding will then be able to establish the minimum height of the `<article>` element.
- The illustration is contained within a section, which ensures that the image covers its entire area and hides the overflow of the image. It also adds the border-radius.
```CSS
article {
    display: flex;
    max-width: 760px;
    @media only screen and (max-width: 700px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        gap: 0;
    }
    @media only screen and (min-width: 701px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;

        margin: 0.6rem 0.2rem;
        padding: 1.3rem 1.3rem 1.3rem 2.9rem;
        border-radius: 1.8rem;
    }
}
```
#### For _desktop_ 🖥️

- As shown in the above snippet ⬆️ I set the article sections (the form and the illustration sections)  apart from each other and a minimum `gap` between them.

- By default, the flex container `<article>` takes the minimal amount of height to accommodate the content ↕️, and since there are two elements lined up in horizontal configuration, they are going to be the only ones influencing the height.
- Desktop version of the illustration has the right aspect ratio to guide the height of the `<article>` in case it is bigger than the form section together with padding. For it to be slightly higher I set the illustration itself to cover, I limit its container's width to 47% and let it take its height based on its content - at the minimum the illustration's height when it covers the entire container, while maintaining its aspect ratio (because of the cover). I do it by setting
```CSS
article > div.decorative-illustration {
  @media only screen and (min-width: 701px) {
    min-height: 100%;
    max-width: 47%;
    flex-grow: 1;
    flex-shrink: 1.7;
    align-self: stretch;

    border-radius: 1rem;
  }
  overflow: hidden;
}
article > div.decorative-illustration img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
❕ Applying a `min-height` to the `div.decorative-illustration` container allows it to dynamically adjust its height based on the containing box's (`<article>`) highest element. This ensures that if the highest element, such as the form section, exceeds the illustration's height, the illustration will adjust its height to fit within the container.
This adjustment occurs when the form section surpasses the height of the illustration within the container, constrained by its width (the `max-width: 47%` on the illustration container). By setting the containing box's height to 100%, it would be determined by its content. However, if set to at least the minimum of 100% of the content's height (`min-height` property), it ensures that if another flex element within the Flexbox `<article>` attains a larger height, the container expands to accommodate and match the size of its container (`<article>` in this case).

**_That is how both attributes: `align-self: stretch` and `min-height` work together!_** ⬇️
![](./Screenshot%20illustration%20with%20min-height%20100%25.png)
This is very useful when the Flex container `<article>` gets squeezed (in this case when the viewport is between 760px and 700px, below which the mobile version gets triggered).

Not using `min-height` but setting the `height: 100%` instead, would result in the illustration's container to adjust to **100% of the height of its content: the `<img>`**, which tries to keep its aspect ratio (due to `object-fit: cover;`, while being constrained by the `max-width: 47%;`:⬇️
![](./Screenshot%20illustration%20with%20height%20100%25.png)

And this is how it is expected to look in standard circumstances (enough viewport width >760px and the form section not exceeding the height of the illustration):⬇️
![](./Screenshot%20illustration%20with%20min-height%20100%25%20illustration%20higher%20than%20the%20form%20section.png)
#### Positioning and Styling the confirmation message
I want the confirmation message to show up on top of the form and hide when it is dismissed. So I set up an overlay layer, within which I will place the card with the message. 
```CSS
aside.confirmation-message {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    @media only screen and (max-width: 700px) {
        background-color: var(--form-background);
    }
    @media only screen and (min-width: 701px) {
        background: hsl(235, 18%, 26%);
    }

}
aside.confirmation-message div {
    padding: 0.5rem calc(25% - 60px) 2rem;
    background: var(--form-background);
    @media only screen and (max-width: 700px) {
        width: auto;
        display: flex;
        flex-direction: column;
        gap: 4vh;
        min-height: 100vh;
    }
    @media only screen and (min-width: 701px) {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-width: 475px;
        padding: 2.5rem 3rem;
        border-radius: 1.8rem;
    }
}
```
You can see I used position fixed on the overlay, made it took entire viewport and styled the confirmation messages withing it: flexbox for mobile as it just needs to make the content arranged from top to bottom and center with the position relative (using the positioned ancestor) for desktop!
#### Asynchronous form submission 🔄

The next task is to make the confirmation message ✔️📲 to show up upon successful submission of the form. 
The default way of submitting the form using `form.submit()` sends the request to the server at URL specified at the `action` attribute using method like "GET" (default) or "POST" as specified at the form's `method` attribute. The form then refreshes or a response page that comes back from the server is loaded. 

Instead, we want to load the confirmation which is already present at the front-end w/o the page reload. So we could asynchronously receive a response code from the server informing about status of processing and load the message respectively. FetchAPI would be used to send form data serialised with the `FormData` object, like this:
```ecmascript 6
const form = document.querySelector('article form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Create a new FormData object from the form element
    const formData = new FormData(form);

    try {
        const response = await fetch('/backend-API-url', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Bad response. Process might have not been successfull');
        }

        // Response successful, show confirmation message
        const responseData = await response.json();
        console.log(responseData);
        showConfirmationMessage(responseData.user_email);
        email.value = "";
    } catch (error) {
        // Handle the 'bad response' error that occurs during the fetch:
        // display an error box for the user and ask to fill the form again.
        email.value = "";
    }
});
```

In my code I only simulate sending the form data to an API to demonstrate the interactions.

### Challenges
I dealt with the problem of the checkmark icons getting smaller on narrower viewport as I resize the window: each checkmark is a `::before` pseudo-element of `<li>` item, each `<li>` is made a flexbox and so the default `flex-shrink` value for a flex item is `1`, therefore it shrinks when the viewport gets smaller. Setting that value to `0` was the solution.

#### keypress events 👇🏻
I have added the "on keypress" event on the 
1. Form submission button and 
2. the dismiss button on the _Subscription Confirmation_ message. 

But after the form gets submitted the focus remains to be on the submit button, while I want it to transition onto the `dismissButton`. I have found myself not knowing why form after form gets submitted allowing empty entries on email field despite having HTML5 native validation in place! 

First I fix the button focus problem: after submitting the form if the focus keeps being on the submit button while there is an overlay on top with a confirmation message and I just press enter and expect it to dismiss that confirmation message, because I have added an on keypress event listener on this confirmation message dismiss button and I know it should autofocus, buuuuut nooo! So the problem is focus just stays where it was - enabling display on an element having the `autofocus` attribute does not make it autofocus. In fact setting autofocus on initially invisible element is a waste. I changed it so that it autofocuses on the email input. 

The solution to that is to set the focus on the dismiss button in JS upon loading the confirmation message, as so: 
```javascript
.then(data => {
    showConfirmationMessage(data.user_email);
    dismissButton.focus();
    email.value = "";
    [...]
}
```
#### pressing the Enter key submit the form w/o validation

The problem here was that the HTML form validation only gets triggered on click of Submit input (the Submit button). The keypress on 'Enter' would trigger an event listener that would trigger custom asynchronous logic of form submission, but that flow would surpass the HTML form validation totally. The solution is to integrate the validation trigger within -> at the beginning of the form submission flow:

```javascript
function formSubmission(e) {
  if (!form.checkValidity()) {
    // !!! Prevent default form submission if form is invalid
    e.preventDefault();
    // Display validation error messages
    form.reportValidity();
  } else {
    const email = form.querySelector('input[type="email"]#subscribers-email');
    const submitButton = form.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    submitButton.classList.add('inactive-btn');
    simulateServerResponse(email.value)
            .then(response => { [...]
```
`formSubmission()` function is triggered on press of a button or a key, and it triggers the `checkValidity()` on a Form. It can also be called on individual `input` elements selected in JS.
```javascript
if (!form.checkValidity()) {
        // !!! Prevent default form submission if form is invalid
        e.preventDefault();
        // Display validation error messages
        form.reportValidity();
    } else {
        const email = form.querySelector('input[type="email"]#subscribers-email');
        const submitButton = form.querySelector('input[type="submit"]');
        submitButton.disabled = true;
        submitButton.classList.add('inactive-btn');
        simulateServerResponse(email.value)
            .then(response => {
```

### What I learned
#### 🧡 HTML5 native form validation methods
- `required` keyword on an input marked `type="email"` gives only basic validation (min. 1 char. + '@' + min. 1 char.).
- Regex rules used in HTML5 `pattern` attribute.
- `:valid` or `:invalid` pseudo-selectors are available to style valid and/or invalid input. In my case on user trying to submit the form with the 
#### 🧡 Semantic HTML
- Reviewed the [HTML specification](https://html.spec.whatwg.org/multipage/sections.html) which treats about context of usage of HTML semantic elements.
- Studied the `<article>` - HTML5 semantic tag - in which context to use it. 

- Learned about the usage of the `<address>` tag in HTML. 
> The `<address>`  element represents the contact information for its nearest `<article>` or `<body>` element ancestor. Included within an element it specifies contact details for the whole of that element. Typically, an `<address>` element can be placed inside the `<footer>` element.

- Metadata for an `<article>` like a publication date belongs in a `<time>` element.

#### 🧡 HTML Forms
- use `method="POST"` on a form in order to avoid sending the form data in the address URL while submitting the form. This method is safer for protecting sensitive data.
- [Grouping form elements with `<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

#### 💛 Review of JavaScript: Handling DOM
- For scripts that manipulate the DOM, defer JS load until DOM gets loaded with `<script [...] defer>`.
- Attaching event listeners; using `preventDefault()` to prevent the browser from handling the even in its default way.
- Retrieving user's input from the form into JS script.
- Dynamically changing text content of elements with `.innerText` (newer) or `.textContent`.

#### 💙 CSS Specificity
The `aside.confirmation-message.visible` selector is much more specific than just `.visible`. In my case, I styled the `.visible` selector in my CSS, expecting it to make my element visible whenever the `visible` class is triggered on an element. I placed these styles later in the stylesheet, assuming that styles declared lower in the document would override those declared earlier on the same elements. However, I forgot that this rule only applies for styles of the same specificity. Styles with higher specificity always take precedence. This is why triggering the class `visible` on an element did not take effect for me. The visibility-triggering styles were not applied because their selector had lower specificity than those that originally made the element non-visible. 
#### 💙 CSS fixed positioning
#### 💙 Flexbox properties: [flex _shorthand property_](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) for:
  - [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
  - [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
  - [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

#### 💜 More on email validation and email strategy (beyond the scope)
##### Double opt-in ✅✒️
It is one of the best methods of verifying the user is interested in subscribing or registering for a service. **After the user declares his email address, the backend service sends an email with a code and/or link to verify user's email address. This both verifies the email has been received and that the user has access to it.** It does not prevent users from using temporary email addresses.

##### What can be done before even sending the email to validate the address exists? 📮❓
✔️ Check the existence of a domain 🌐 and pinging the MX servers specified in its MX (Mail Exchange) records before sending an email. 

Verifying these elements helps prevent sending emails to non-existent or mistyped domains, which can negatively impact deliverability and sender reputation.

⚠️ However, it's important to note that while checking the domain's existence and MX records can help with basic validation, it may not catch all possible errors or typos in email addresses. For instance, it won't necessarily detect typographical errors within the domain itself (e.g., "gmial.com" instead of "gmail.com"). Additionally, suggesting a similar domain name based on user input could be complex and might not always yield accurate suggestions.

Furthermore, the implementation of such mechanisms needs to consider privacy and security concerns, as it involves handling user data (email addresses) and potentially querying external services to validate domains, which could raise privacy or data protection issues.

✔️ One could put another field that does not use autofill in the form and ask user to repeat the email address he typed. This minimizes the risk of typos in the email, which also affects sender's reputation.

✔️ Protection from bots using CAPTCHA, CloudFlare's Turnstile<sup>[1](https://developers.cloudflare.com/turnstile/)</sup>, invisible extra field <sup>[2](https://help.elasticemail.com/en/articles/2419115-how-to-prevent-bots-from-spamming-your-sign-up-forms#add-an-unseen-extra-field-or-honey-pot)</sup>

✔️ Single Sign-On
###### Method of e-mail validation one should NOT rely upon
❌ The `SMTP VRFY` request was historically used to verify whether an email address exists on a given mail server. For domains, these servers are typically specified under the MX (Mail Exchange) record. However, due to concerns regarding information security, this method is no longer reliable. Nowadays, when an `SMTP VRFY` request is made, it often returns either a code 250 (indicating that the address is valid) for every request, or a code 252 (indicating that the server explicitly does not disclose such information or does not know if the address exists). As a result, relying on `SMTP VRFY` for address verification is not recommended and deemed unreliable method of email address verification<sup>[2](https://stackoverflow.com/questions/565504/how-to-check-if-an-email-address-exists-without-sending-an-email)</sup>.
##### What if users try to use temporary email address and abandon it afterwards?
To prevent users from using temporary email addresses, we can blacklist domains that are known for providing users with temporary email addresses. If effective this could save some sender's reputation. Moreover, if that filtering turns out to be ineffective, we can try to prevent locked out and abandoned accounts by adding an account recovery mechanism, e.g. requiring a verified phone number to be added as a recovery method or using single sign-on yield more valuable audience.
##### Term definitions
- Bouncing, rejecting, dropping email messages <sup>[3](https://en.wikipedia.org/wiki/Bounce_message), [4](https://www.saleshandy.com/blog/email-bounce-back/), [5](https://mailchimp.com/help/about-bounces/)</sup>.
### 📖 Useful resources
- [HTML5 client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#different_types_of_client-side_validation)
- [HTML5 email form validation with regex pattern match](https://mailtrap.io/blog/html5-email-validation-tutorial/)
- [HTML specification](https://html.spec.whatwg.org/multipage/sections.html) - HTML standard treating about semantic Sections of HTML document, when to use them
- [flex *shorthand property* | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

- [object-fit | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [max-content | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content)
- 
## 👩🏻‍💻 Author

- LinkedIn - [ola.sokolek](https://www.linkedin.com/in/olasokolek/)
- Website - [olasok.dev](https://olasok.dev)
- Frontend Mentor - [@ola-sk](https://www.frontendmentor.io/profile/ola-sk)
- Github - [@ola-sk](https://github.com/ola-sk)
