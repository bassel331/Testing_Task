module.exports = {
    tags: ['dressSearchResults'],
    'dressSearchResults' : 
      function (browser) {
       
        var search_query="dress";
        var firstCapital = search_query.charAt(0).toUpperCase() + search_query.slice(1);
        var returtedElementsField=`.product-name:not([title*="${firstCapital}"])[itemprop="url"]`;

        const page = browser.page.dressSearchPage()

        page
        .navigate()
        .search(search_query)

        browser
        .elements('css selector',returtedElementsField , function(elements) {
               
            browser.assert.equal(elements.value.length, 0, 'Expected right elements to be present');
            
          });
          
           
            
          
         
          
          
          
          
       

    } 
 };