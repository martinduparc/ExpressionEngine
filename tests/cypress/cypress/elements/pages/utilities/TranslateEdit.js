import ControlPanel from '../ControlPanel'

class TranslateEdit extends ControlPanel {
  constructor() {
    super()
    this.urlMatcher = /utilities\/translate\/\w+\/edit/

    this.elements({

      'heading': 'div.w-12 form h1',

      'items': 'form fieldset',

      'submit_button': 'form .tab-bar__right-buttons .form-btns input[type="submit"]'
    })
  }

  load() {
    this.open_dev_menu()
    cy.get('body > .dropdown').find('a:contains("Utilities")').click()
    this.get('wrap').find('a:contains("English")').click()
    this.get('wrap').find('ul.toolbar li.edit a').first().click() // The addons_lang.php edit link
  }

}
export default TranslateEdit;