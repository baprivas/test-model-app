function Collection() {
    'use strict';

    let items = [];
    Object.defineProperty(this, 'items', {
        'get': () => {

        }
    });

    this.load = () => {
        console.log('making load');
    };

    this.load();

}

export default Collection;