export default function giphyController(giphyService, $stateParams) {
    const vm = this;
    vm.id = $stateParams.id;
    vm.gif = {};

    vm.$onInit = () => {
        console.log(vm.id);
        giphyService.giphyItemDetail(vm.id).then((res) => {
            vm.gif = res.data;
            console.log(vm.gif);
        });
    }
}