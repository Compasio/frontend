import 'cypress-file-upload';

describe('Testes da Página de Cadastro de Voluntário', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/criarVoluntario');
    });

    it('deve exibir a página corretamente', () => {
        cy.contains('Crie sua conta!').should('be.visible');
        cy.get('input[name="nome"]').should('exist');
        cy.get('input[name="data_nascimento"]').should('exist');
        cy.get('input[name="cpf"]').should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('input[name="senha"]').should('exist');
        cy.get('input[name="senha_confirmacao"]').should('exist');
        cy.get('input[name="foto"]').should('exist');
    });

    it('deve não direcionar para a segunda etapa se o formulário for enviado com campos obrigatórios vazios', () => {
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/criarVoluntario');
    });


    it('deve não direcionar para a segunda etapa se a senha e a confirmação da senha não corresponderem', () => {
        cy.get('input[name="nome"]').type('Teste');
        cy.get('input[name="data_nascimento"]').type('2000-01-01');
        cy.get('input[name="cpf"]').type('12345678901');
        cy.get('input[name="email"]').type('teste@example.com');
        cy.get('input[name="senha"]').type('Senha1!');
        cy.get('input[name="senha_confirmacao"]').type('Senha2!');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/criarVoluntario');
    });


    it('deve não direcionar para a segunda etapa se a idade não estiver entre 18 e 65 anos', () => {
        cy.get('input[name="nome"]').type('Teste');
        cy.get('input[name="data_nascimento"]').type('2010-01-01');
        cy.get('input[name="cpf"]').type('12345678901');
        cy.get('input[name="email"]').type('teste@example.com');
        cy.get('input[name="senha"]').type('Senha1!');
        cy.get('input[name="senha_confirmacao"]').type('Senha1!');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/criarVoluntario');
    });


it('deve não redirecionar ao enviar um CPF inválido', () => {
    cy.get('input[name="nome"]').type('Teste');
    cy.get('input[name="data_nascimento"]').type('1990-01-01');
    cy.get('input[name="cpf"]').type('123456789'); 
    cy.get('input[name="email"]').type('teste@example.com');
    cy.get('input[name="senha"]').type('Senha1!');
    cy.get('input[name="senha_confirmacao"]').type('Senha1!');
    cy.get('input[type="file"]').attachFile('defaultImg.png'); 
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/criarVoluntario');
});

it('deve não redirecionar ao enviar um e-mail inválido', () => {
    cy.get('input[name="nome"]').type('Teste');
    cy.get('input[name="data_nascimento"]').type('1990-01-01');
    cy.get('input[name="cpf"]').type('12345678901'); 
    cy.get('input[name="email"]').type('teste@invalid'); 
    cy.get('input[name="senha"]').type('Senha1!');
    cy.get('input[name="senha_confirmacao"]').type('Senha1!');
    cy.get('input[type="file"]').attachFile('defaultImg.png'); 
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/criarVoluntario');
});

});
