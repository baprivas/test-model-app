function Country(id) {
    'use strict';

    Object.defineProperty(this, 'id', {'get': () => id});

    let name;
    Object.defineProperty(this, 'name', {'get': () => name});


    function instance() {

    }

    if (id) instance();
}

export default Country;