# Angular 6 Reactive Form Validation

Creating beautiful forms in angular 6 is a simple task thanks to the reactive forms module. This module out of box contains 4 basic validators required, minLength, maxLength and pattern. These are a great starting place, but they will soon fall short of meeting the acceptance criteria on that open issue.

Luckily creating custom form validators for reactive forms in angular 6 is an incredibly simple task, because they are simply functions. You can create validators inline when you defined your validator or they can be made re-usable and defined in a separate file. I always opt for re-usable code so I will show you how!

## Creating an Email Validator

To start things off I will show you a validator that is likely to come up at some point if you deal with users signing up, or having to enter their email. We want to make sure that a user is signing up with a real email because how else would they receive our monthly newsletter!

```bash
    $ ng new custom-validators
    $ cd ./custom-validators
    $ mkdir validators
    $ touch ./validators/email.validator.ts
```

Let’s start off by creating an angular project by utilizing the angular-cli. Inside of our new project create a new directory called validators. This is where we will store all of the validators we will want to use in our project. Our first validator will be for determining if a field has a valid email. We can create a file called email.validator.ts open that file in your favorite editor.

```ts
    import { 
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators } from '@angular/forms';
```

The first thing we will want to do is bring in a few imports from @angular/forms. These are not used directly for making a validator but mostly for practicing strong typing. I will give you some brief background information on each of the imports.

## ValidatorFn
> A function that receives a control and synchronously returns a map of validation errors if present, otherwise null.

Our validator must conform to the ValidatorFn interface. This is essentially the blueprints for how we will be constructing our validators. This interface is defined as taking a parameter of the type AbstractControl and will return either NULL or of type ValidationErrors .

## AbstractControl
> It provides some of the shared behavior that all controls and groups of controls have, like running validators, calculating status, and resetting state. It also defines the properties that are shared between all sub-classes, like value, valid, and dirty. It shouldn't be instantiated directly.

The parameter to our validator must take a single parameter of type AbstractControl. When we define a reactive form in angular we often use a FormGroup which contains FormControl which has a base class of AbstractControl . Our validator receives the FormControl that we placed our validator on.

## ValidationErrors
> Defines the map of errors returned from failed validation checks.

When our validator fails we need to return an object back from our validator so we can provide the user with information so they can fix their mistake. This is done by returning something as simple as `{‘email’: true}` or as specific as `{‘email’: ‘An email must contain a @’}`.

## Validators
> A validator is a function that processes a [FormControl](https://angular.io/api/forms/FormControl) or collection of controls and returns an error map or null. A null map means that validation has passed.

This is exactly what we will be making!
```js

    export const email: *ValidatorFn* = (*control*: *AbstractControl*): *ValidationErrors* => {
       return null;

    };
```

This is the basic structure of our email validator which conforms to the typeValidatorFn by taking an AbstractControl and has a return type of ValidatorErrors . By default we set a return of null which means that our FormControl is valid. Let’s go ahead and add some checks around our validator.

```js
    export const email = (control) => {

    if (Validators.required(control) !== null &&        Validators.required(control) !== undefined
    ) {
        return null;
    }

    return null;

    }
```

I added this little check at the start of our validator that essentially is utilizing a built in Validator provided to us by @Angular/Forms for free. This will short circuit our email validator from performing checks if the field is empty.

## How to validate an email?

We are almost have our validator working! The last step is actually doing the email check, but how do we actually do that? We can use a handy regular expression!

```js
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
```
This is a pretty well known regular expression and is roughly 99% accurate, which is good enough for my use cases. So let’s go ahead and finish up our email validator.

```js
    export const email: *ValidatorFn* = (*control*: *AbstractControl*): *ValidationErrors* => {

    if (
    Validators.required(control) !== null && Validators.required(control) !== undefined) {
      return null;
    }

    return emailRegex.test(control.value) ? null : { 'email': true };
    };
```

After our check to see if our control is empty or not we use our regular expression that we defined before to test if the value of the control is a valid email address. If it is valid we return null (remember null means that no error occurred and it is valid!) otherwise we return our object so we can show the user why the field is invalid.

## Using our Email Validator

Now that we successfully created our validator it is time to implement it!

```ts
    import { email } from '../../validators/email.validator.ts'; 

    const userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('', email)
    })
```
It is as simple as that! We are able to pass our validator as a second parameter when we instantiate a FormControl . Our email field will now be invalid if the users input does not pass our custom email validator.

## Conclusion

There is rarely any fun involved when creating forms, but the angular team provides all of the tools needed to create beautiful, intelligent and highly functional forms. Email validation is only one small example that you might come across needing. Please leave feedback I would love to read your thoughts and comments!