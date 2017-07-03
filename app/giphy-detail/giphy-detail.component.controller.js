export default function giphyController(giphyService, $stateParams) {
    const vm = this;
    vm.id = $stateParams.id;
    vm.gif = {};

    vm.$onInit = () => {
        giphyService.giphyItemDetail(vm.id).then((res) => {
            vm.gif = res.data;
        });
    }
}