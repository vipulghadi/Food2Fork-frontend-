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





    }

}
export default recipeApi