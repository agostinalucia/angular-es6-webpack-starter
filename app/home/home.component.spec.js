import template from './home.component.html';
import controller from './home.component.controller';
import myApp from './../app.module';

describe('Home component', () => {
    describe('Template', () => {
        it('has pageSizeSelected in template', () => {
            expect(template).to.match(/{{\s?home\.pageSizeSelected\s?}}/g);
        });

        it('has Last in template', () => {
            expect(template).to.match(/\s?Last\s?/g);
        });

        it('has Empty message in template', () => {
            expect(template).to.match(/\s?Select something for getting started on your search!\s?/g);
        });

        it('has First in template', () => {
            expect(template).to.match(/\s?First\s?/g);
        });
    });

    describe('Controller', () => {
        let componentController = controller;

        it('should be created successfully', () => {
            expect(componentController).to.not.equal('undefined');
        });
        it('has a item property', () => {
            expect(componentController.item).to.not.equal('undefined');
        });

        it('has a goToPreviousPage property', () => {
            expect(componentController.goToPreviousPage).to.not.equal('undefined');
        });

        it('has a goToNextPage property', () => {
            expect(componentController.goToPreviousPage).to.not.equal('undefined');
        });
    });
});