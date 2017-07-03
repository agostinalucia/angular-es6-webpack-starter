import template from './home.component.html';
import myApp from './../app.module';

describe('Home component', () => {

    describe('Template', () => {
        it('has pageSizeSelected in template', () => {
            expect(template).to.match(/{{\s?home\.pageSizeSelected\s?}}/g);
        });

        it('has Last in template', () => {
            expect(template).to.match(/\s?Last\s?/g);
        });
    });
});