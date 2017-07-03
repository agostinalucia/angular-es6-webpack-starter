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

        it('has Empty message in template', () => {
            expect(template).to.match(/\s?Select something for getting started on your search!\s?/g);
        });

        it('has First in template', () => {
            expect(template).to.match(/\s?First\s?/g);
        });
    });
});