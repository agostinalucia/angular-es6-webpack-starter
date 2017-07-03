import homeHtml from './home.component.html';
import homeScss from './home.component.scss';
import Homecontroller from './home.component.controller';

let homeComponent = {
    template: homeHtml,
    controllerAs: 'home',
    controller: Homecontroller
}

export default homeComponent;