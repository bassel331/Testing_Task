module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',
    elements: {
        contactUs: '#contact-link',
        subjectHeadingField: '#uniform-id_contact',
       // costumerService: '[value="2"]',
        emailAddressField: 'input[name="from"]',
        orderReffernceField:'input[name="id_order"]',
        messageField:'textarea[name="message"]',
        attachFileField:'input[type=file]',
        submitField:'button[name="submitMessage"]',
        file:'deliveryBad.txt',
        formSuccess: 'p[class="alert alert-success"]',
        formError: 'div[class="alert alert-danger"]'
    },
    commands: [{
        setSubjectHeading(value) {
            return this
                .click('@subjectHeadingField')
                .click(`[value=${value}]`);
        },        
       chooseEmail(value) {
            return this
                .setValue('@emailAddressField',`${value}`);
        },
        setOrderReference(value) {
            return this
                .setValue('@orderReffernceField',`${value}`);
        },
        setMessage(value) {
            return this
                .setValue('@messageField',`${value}`);
        },
        attachFile(value) {
            return this
            .setValue('@attachFileField', require('path').resolve(`${value}`));
        },
        submit() {
            return this
                .click('@submitField');
        }
    }]
};