export const API_RM={
    URL:"https://rickandmortyapi.com/api/character",

    CHARACTERS: function(){
        return`${this.URL}`
    },

    CHARACTERS_BY_ID: function(id){
        return`${this.URL}/character/${id}`
    }
}