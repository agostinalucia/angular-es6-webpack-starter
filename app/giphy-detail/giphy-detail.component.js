import giphyDetailHtml from './giphy-detail.component.html';
import giphyDetailScss from './giphy-detail.component.scss';
import giphyController from './giphy-detail.component.controller'

let giphyDetailComponent = {
    template: giphyDetailHtml,
    controllerAs: 'giphyDetailVm',
    controller: giphyController
}

export default giphyDetailComponent;