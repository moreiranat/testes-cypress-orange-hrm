const CadastroElements = {
    inputUsername: 'input[name="username"]',
    inputPassword: '#app input[name="password"]',
    buttonLogin: '#app button[type="submit"]',
    menuAdmin:':nth-child(1) > .oxd-main-menu-item',
    buttonAddUser: 'button[type="button"]',
    //selectUserRole: '.oxd-select-dropdown > :nth-child(2)',
    inputUsernameRegister: '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input',
    inputPasswordRegister: '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input',
    inputConfirmPasswordRegister: '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input',
    buttonSave: '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space',
};
module.exports = CadastroElements;