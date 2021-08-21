interface ErrorContainer
{
    //index type we can use where we don't know about the property
    // this should not be boolean [prop:string]  
    // and also we cannot use id as a type now because we are using index types here,
    [prop:string]:string|boolean|number //email:'not a valid email', userName:'please enter a username'
}

const errorBag:ErrorContainer = {
    email: 'Not a valid email',
    admin: true,
    userId:5
}