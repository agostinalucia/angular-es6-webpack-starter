export default function Homecontroller(giphyService, pagerService, $state) {
    const vm = this;

    // default variables
    vm.item = '';
    vm.gifs = [];
    vm.isOpen = false;
    vm.pageSizeSelected = 25;
    vm.curentPage = 0;
    vm.colors = ['#e646b6', '#93f', '#5c0734', 'white'];


    /**
     * @name valueChange
     * @param  {string} item value of selected checkbox
     * @param  {number} pageSize size of the page for pagination selected by the user
     * @return {void}
     */
    vm.valueChange = (item, pageSize) => {
        if (item) {
            vm.item = item;
            vm.pageSizeSelected = pageSize;
            vm.goToFirstPage(vm.item, vm.pageSizeSelected);
            vm.getGifts(vm.item, vm.pageSizeSelected, vm.curentPage);
        } else {
            console.log('please select a value');
        }
    };

    /**
     * @name goToPreviousPage
     * @return {void}
     */
    vm.goToPreviousPage = () => {
        if (vm.curentPage <= 1) {
            vm.goToFirstPage(vm.item, vm.pageSizeSelected);
        } else {
            vm.curentPage = vm.curentPage - vm.pageSizeSelected;
            vm.getGifts(vm.item, vm.pageSizeSelected, vm.curentPage);
        }
    }

    /**
     * @name goToNextPage
     * @return {void}
     */
    vm.goToNextPage = () => {
        if (vm.nextPage >= vm.totalPages) {
            vm.goToLastPage(vm.item, vm.pageSizeSelected);
        } else {
            vm.curentPage = vm.curentPage + vm.pageSizeSelected;
            vm.getGifts(vm.item, vm.pageSizeSelected, vm.curentPage);
        }
    }

    /**
     * @name goToLastPage
     * @return {void}
     */
    vm.goToLastPage = () => {
        vm.getGifts(vm.item, vm.pageSizeSelected, vm.totalPages)
    }

    /**
     * @name goToFirstPage
     * @param  {string} item value of selected checkbox
     * @param  {number} pageSize size of the page for pagination selected by the user
     * @return {void}
     */
    vm.goToFirstPage = (item, pageSize) => {
        vm.getGifts(item, pageSize, vm.curentPage);
    }

    /**
     * @name getGifts
     * @param  {string} item value of selected checkbox
     * @param  {number} pageSize size of the page for pagination selected by the user
     * @param  {number} currentPage page in which the user is in
     * @return {void}
     */
    vm.getGifts = (item, pageSize, currentPage) => {
        giphyService.giphyItems(item, pageSize, currentPage).then((res) => {
            vm.totalPages = res.pagination.total_count;
            vm.totalPages = pagerService.getPager(vm.totalPages, currentPage, pageSize);
            vm.gifs = res.data;
            vm.getRandomColors(vm.gifs);
        });
    }

    /**
     * @name getRandomColors
     * @param  {array} array collection of gifts
     * @return {void}
     */
    vm.getRandomColors = (array) => {
        angular.forEach(array, function(value) {
            value.background = vm.colors[Math.floor(Math.random() * vm.colors.length)];
        });
    }

    vm.goToDetail = (id) => {
        $state.go('giphy.detail', { id: id });
    }
}