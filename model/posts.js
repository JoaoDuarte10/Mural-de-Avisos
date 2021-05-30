module.exports = {
    posts: [
        {
            id: "dsa",
            title: "Teste do Mural",
            description: "Descrição Teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id:genereteID(), title, description});
    }

}
function genereteID() {
    return Math.random().toString(36).substring(2, 9);
}