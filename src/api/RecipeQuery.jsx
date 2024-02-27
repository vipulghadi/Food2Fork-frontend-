import { Form } from "react-router-dom"

const BASE_URL = 'http://127.0.0.1:5000/'

const recipeApi = {
    getIngredients: async() => {
        try {
            const resp = await fetch(BASE_URL + 'api/get-suggestions', { method: "GET" })
            const data = resp.json()
            return data

        } catch (error) {
            console.log("error");
            console.log(error);
            return error
        }





    },

    getRecipe: async(query) => {
        const form = new FormData()
        form.append('query', query)
        try {
            const resp = await fetch(BASE_URL + '/get-result', {
                method: "POST",
                body: form
            })
            const data = resp.json()
            return data

        } catch (error) {
            console.log("error");
            console.log(error);
            return error
        }
    }

}
export default recipeApi