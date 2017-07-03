function giphyService($http, $q) {

    return {
        /**
         * @name giphyItems
         * @param  {string} item value selected in checkbox by user
         * @param  {number} pageSize size of the page selected by user
         * @param  {number} pageStart current page in which the user is in
         * @return {promise} promise that contains call to API results
         */
        giphyItems: (item, pageSize, pageStart) => {
            return $q((resolve, reject) => {
                $http({
                        method: 'GET',
                        url: `https://api.giphy.com/v1/gifs/search?` +
                            `api_key=8de24567553a491c862a07a0c377ca9f&q=
                      ${item}&limit=${pageSize}&offset=${pageStart}&rating=G&lang=en`
                    }).then((res) => {
                        const result = res.data;
                        resolve(result);
                    })
                    .catch(reject);
            });
        },
        giphyItemDetail: (id) => {
            return $q((resolve, reject) => {
                $http({
                        method: 'GET',
                        url: `https://api.giphy.com/v1/gifs/${id}
                            ?api_key=8de24567553a491c862a07a0c377ca9f`
                    }).then((res) => {
                        const result = res.data;
                        resolve(result);
                    })
                    .catch(reject);
            });
        }
    }
}

export default giphyService;