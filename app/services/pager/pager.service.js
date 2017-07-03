function pagerService() {

    return {
        /**
         * @name getPager
         * @param  {number} totalItems total of gifts
         * @param  {number} currentPage page in which the user is in
         * @param  {number} pageSize size of the page for pagination selected by the user
         * @return {number} totalPages number of total pages
         */
        getPager: (totalItems, currentPage, pageSize) => {
            let totalPages = Math.ceil(totalItems / pageSize);
            return totalPages;
        }
    }
}

export default pagerService;