
module.exports = {
    tags: ['myStore'],
    'All inputs test' : 
      function (browser) {
       const page = browser.page.formFillingPage();
       const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';

        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel28@gmail.com")
            .setOrderReference("210")
            .setMessage("bad delivery!")
            .attachFile('deliveryBad.txt')
            .submit();

           
         
            browser.expect.element(formSuccess).to.be.visible.before(3000);

    } ,

    'Typing very long message' : 
      function (browser) {
       const page = browser.page.formFillingPage();
       const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';


        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel28@gmail.com")
            .setOrderReference("210")
            .setMessage("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
            .attachFile('deliveryBad.txt')
            .submit();

           
         
            browser.expect.element(formError).to.be.visible.before(3000);

    } ,
    'Typing very long order refernce' : 
      function (browser) {
       const page = browser.page.formFillingPage();
       const  formSuccess= 'p[class="alert alert-success"]';
       const  formError= 'div[class="alert alert-danger"]';

        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel28@gmail.com")
            .setOrderReference("211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110")
            .setMessage("delivery is bad")
            .attachFile('deliveryBad.txt')
            .submit();

           
         
            browser.expect.element(formError).to.be.visible.before(3000);

    } ,

    'Attaching File is required' : 
      function (browser) {
        const page = browser.page.formFillingPage();
        const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';
       
        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel28@gmail.com")
            .setOrderReference("210")
            .setMessage("bad delivery!")
            .submit();
         
            browser.expect.element(formError).to.be.visible.before(3000);

    } ,
    'checkEmailValidation using invalid Email address' : 
      function (browser) {
       const page = browser.page.formFillingPage();
      const emailField = 'input[name="from"]';

        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel.@gmail.com")
            .setOrderReference("210")
            .setMessage("bad delivery!")
            .attachFile('deliveryBad.txt');
            browser.getValue(emailField, function(result) {
                const enteredEmail = result.value;
                const emailRegex = /^(?![^@]*\.\.)(?!.*\.@)(?!.*@\.)[^\s@]+@[^\s@]+\.[^\s@]+$/;
                ;
;
                const isEmailValid = emailRegex.test(enteredEmail);
                this.assert.ok(isEmailValid, `Entered email "${enteredEmail}" has a valid format`);
              });  
            

    } ,


    'Typing Email is required' : 
      function (browser) {
        const page = browser.page.formFillingPage();
        const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';
   
         page.navigate()
             .clickContactUS()
             .setSubjectHeading(2)
             .setOrderReference("210")
             .setMessage("bad delivery!")
             .attachFile('deliveryBad.txt')
             .submit();

            
          
             browser.expect.element(formError).to.be.visible.before(3000);

    } ,

    'Typing Message is required' : 
      function (browser) {
        const page = browser.page.formFillingPage();
        const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';
       
        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel28@gmail.com")
            .setOrderReference("21099")
            .attachFile('deliveryBad.txt')
            .submit();
         
            browser.expect.element(formError).to.be.visible.before(3000);


    } ,
    'Typing Order Reference is required' : 
      function (browser) {
        const page = browser.page.formFillingPage();
        const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';
        page.navigate()
            .clickContactUS()
            .setSubjectHeading(2)
            .chooseEmail("bassel28@gmail.com")
            .setMessage("bad delivery!")
            .attachFile('deliveryBad.txt')
            .submit();
         
            browser.expect.element(formError).to.be.visible.before(3000);

    } ,
    'Tying Subject Heading is required' : 
      function (browser) {
        const page = browser.page.formFillingPage();
        const  formSuccess= 'p[class="alert alert-success"]';
        const  formError= 'div[class="alert alert-danger"]';
        
         page.navigate()
             .clickContactUS()
             .chooseEmail("bassel28@gmail.com")
             .setOrderReference("210")
             .setMessage("bad delivery!")
             .attachFile('deliveryBad.txt')
             .submit();   
          
            browser.expect.element(formError).to.be.visible.before(3000);
 
     } 
 };

