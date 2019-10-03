# Angular: Custom Async Validators

Angular has a very robust library for handling forms, and especially validation of your form inputs. I previous discussed how to use the validators that come out of the box with@angular/forms as well as how to create custom validators to fit all of your glorious form needs. You can check out my previous article [here](https://medium.com/@rinciarijoc/angular-6-reactive-form-validation-3476e27c7a74)! However, If you tried to validate against an API such as checking if a username already exists you would quickly hit a wall. Luckily, if we take a look at the FormControl typings we can see that we can create an AsyncValidator to do exactly what we want!

![Type definition of FormControl](https://cdn-images-1.medium.com/max/3600/1*zPCKvy7dVC60quKbtNdpJQ.png)_Type definition of FormControl_

## Creating the basic application

We are going to create a very minimalistic form that does one thing; check if a zip code is valid. We are going to use a mix of both synchronous and asynchronous validators to accomplish our task. It is very common in the United States to check a zip code against a zip code database using an API call, because we want to capture real information from our users.

<iframe src="https://medium.com/media/8142d98a5edc557fdfdae8269462de5e" frameborder=0></iframe>

I created a basic component that has a FormGroup called _address_ with a FormControl of _zipcode_. I have added 2 synchronous validators for checking that a value exists Validators.required and to match a basic 5 digit zip code Validators.pattern .

<iframe src="https://medium.com/media/9c7ad397a16a69c310476cf97237f05a" frameborder=0></iframe>

I am using @angular/material to create a beautiful input which provides a clean way to display errors using the mat-error component. This component will be shown to the user if the required error is present on the zipcode FormControl. The button checks to see if the FormGroup is valid otherwise it will be disabled.

![Basic Form Component](https://cdn-images-1.medium.com/max/2448/1*uo1LhL6XsAqNGwgZYWpyqQ.png)_Basic Form Component_

## Async Validators

Our current implementation works pretty well and in most cases will meet all of the requirements, but what if we want to make sure that a zipcode is valid before allowing a user to submit their address information? Creating a Async Validator is super easy, but first lets create a mock API service to simulate an asynchronous call to an API.

<iframe src="https://medium.com/media/adbfdf4489872171743227428293d525" frameborder=0></iframe>

Our zip code service has a method called fakeHttp that returns an observable of a boolean with a 5 second delay to simulate a very slow response time. It essentially checks to see if the value passed in can be found in our ‘Database’ of valid zip codes. We can now create a async validator using our new service to check the value a user enters against this database.

<iframe src="https://medium.com/media/3594c9f57bbe80dfabf0bf3ab2fc5502" frameborder=0></iframe>

Our _ZipcodeValidator_ class has a static method called createValidator which takes our ZipcodeService as an argument. This method returns a AsyncValidatorFn which receives the FormControl that it is placed on, providing us access to the current value. An AsyncValidatorFn must return either a promise or an observable of type ValidationErrors . We use the RxJS map operator to check the value emitted and either return null if the zip code is valid or return a ValidationError with an error type of invalidAsync .

<iframe src="https://medium.com/media/2ae90cbb7845c534f793fb1a4ef00e88" frameborder=0></iframe>

We import our ZipcodeValidator and ZipcodeService into our component, and declare the service in the constructor. The ZipcodeValidator is added to our FormControl as the third parameter calling the _createValidator_ method, and passing it a reference to the ZipcodeService .

<iframe src="https://medium.com/media/b9385b0efcc531c361fcdf80b7cfbca9" frameborder=0></iframe>

We update our template to check for an additional error called _invalidAsync,_ so if our ZipcodeService cannot find the zip code it will provide feedback to the user. We also add a loading spinner, which looks at this property of a FormControl called _status_.

> The validation status of the control. There are four possible validation status values:
> VALID: This control has passed all validation checks.
> INVALID: This control has failed at least one validation check.
> PENDING: This control is in the midst of conducting a validation check.
> DISABLED: This control is exempt from validation checks

The _PENDING_ status comes into play when we perform asynchronous validation, which gives us the control to provide feedback to the user! In our case we will remove the button, and instead show a spinner to identify to the user that some process is occurring.

![Display a progress indicator while our form performs a validation check](https://cdn-images-1.medium.com/max/2000/1*FPeGsDwEeN0sLc0AcI7Qhw.png)_Display a progress indicator while our form performs a validation check_

![Display error message when our AsyncValidator is invalid](https://cdn-images-1.medium.com/max/2052/1*pxjcJp8u-rdUrL14UuIdFQ.png)_Display error message when our AsyncValidator is invalid_

## Summary

Creating beautiful forms for our web applications is only half of the battle. We also need to verify the information, because we don’t want to blindly send data to backend and then reject it. This can result in a poor experience for users, and result in low adoption rates. Checking our database to see if a username or email is already taken is an incredibly easy way to improve any registration flow. Please leave any feedback in the comments, and follow me on [twitter](https://twitter.com/jonrinciari)!
