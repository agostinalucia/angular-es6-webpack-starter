import template from './giphy-detail.component.html';
import controller from './giphy-detail.component.controller';
import myApp from './../app.module';

describe('Giphy component', () => {
    describe('Template', () => {
        it('has source in template', () => {
            expect(template).to.match(/{{\s?giphyDetailVm\.gif.source\s?}}/g);
        });

        it('has date in template', () => {
            expect(template).to.match(/{{\s?giphyDetailVm\.gif.import_datetime\s?}}/g);
        });

        it('has description placeholder in template', () => {
            expect(template).to.match(/\s?Description: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...\s?/g);
        });
    });

    describe('Controller', () => {
        let componentController = controller;

        it('should be created successfully', () => {
            expect(componentController).to.not.equal('undefined');
        });

        it('has a gif property', () => {
            expect(componentController.gif).to.not.equal('undefined');
        });
    });
});