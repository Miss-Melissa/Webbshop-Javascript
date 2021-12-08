class ImageAPI {
    constructor() {
        this.headers = new Headers();
        this.headers.append('Authorization', 'Bearer 5c0124b7203598cbe24fc0bda9d9c4ea250273de');
    }
    async getImage(id) {
        if(!id) return;
        id = id.includes("imgur") ? id.split("com/")[1] : id;
        return await fetch('https://api.imgur.com/3/account/wie21sGrupp4/image/' + id, {
            method: 'GET',
            headers: this.headers
        }).then(response => response.json())
        .catch(err => alert(`Could not recive image, error: ${err}`));
    }
}

export default ImageAPI;