module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',
    elements: {
        searchField: 'input[name="search_query"]',
        searchbutton:'button[name="submit_search"]'
    },
    commands: [{
        search(value) {
           
            return this
            .setValue('@searchField',value)
            .click('@searchbutton')
            
        }
   
    }]
};