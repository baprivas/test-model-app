function User(id) {
    'use strict';

    let name;
    Object.defineProperty(this, 'name', {'get': () => name});

    let country;
    Object.defineProperty(this, 'country', {'get': () => country});

    Object.defineProperty(this, 'id', {'get': () => id});

    this.getters = () => {

        return {
            'name': name,
            'country': country,
            'id': id
        }

    }

    this.save = () => {
    };
    this.delete = () => {
    };

    function instance() {

    }

    if (id) instance();
}

export default User;