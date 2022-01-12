/// <reference types="cypress"/>

import Chance from 'chance';
const chance = new Chance();

describe('Frontend', () =>
{
    const groupName = chance.word({length: 9});
    const newGroupName = chance.word({length:8});
    const userName = chance.name();
    const pass = 'strongPassword123'

    beforeEach(() =>
    {
        cy.visit('http://localhost:4200');
    })

    it('has posts', () => 
    {
        cy.contains('My first video');
    })

    it('blocks protected routes', () => 
    {
        cy.get('#sidebarToggle').click();
        cy.contains('Group').click();

        cy.contains('Login')
    })

    it('signs up a new user', () =>
    {
        cy.get('#sidebarToggle').click();
        cy.contains('Log in').click();

        cy.url().should('include', 'login');
        cy.get('#register').click();
        cy.url().should('include', 'register');

        cy.get('input[name=username]').type(userName);
        cy.get('input[name=password]').type(pass);
        cy.get('button[type=submit]').contains('Register').click();
        
        cy.wait(2000);

        cy.get('h2').contains('Login');
    })

    it('creates and edits a group', () => 
    {
        cy.login(userName, pass);
        
        cy.get('#sidebarToggle').click();
        cy.contains('Create Group').click();

        cy.get('input[type=text]').type(groupName);
        cy.get('button[type=submit]').contains('Create group').click();

        cy.wait(3000);

        cy.contains(groupName);

        cy.contains('Settings').click();
        cy.wait(400);

        cy.get('input[type=text]').type(newGroupName);
        cy.get('button[type=submit]').contains('Change group name').click();
        cy.wait(3000);

        cy.contains(newGroupName);

        cy.logout();
    
        cy.wait(2000);
    
        cy.url().should('include', 'login');
    })
})