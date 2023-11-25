import axios from 'axios';

export default class userOperations{
    async registerUser(email, password, name){
        try{
            const result = await axios.post(
                "http://localhost:8000/api/signup/",
                    {
                        email: email,
                        password: password,
                        name: name,
                    },
                );
            return result.status
    }   catch (error) {
            console.error(error)
            return error;
        }
    }
    async loginUser(email, password){
        try{
            const result = await axios.post(
                "http://localhost:8000/token/",
                {
                    email: email,
                    password: password
                }
            )
            console.log(result) 
            return result;
        }   catch (error){
            console.error(error)
            return error;
        }
    }
}