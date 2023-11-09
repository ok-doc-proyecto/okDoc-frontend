import axios from 'axios' 
import {ref} from 'vue'

 const login = async(userData)=>{
    
    let userDataResponse;
        try{
            let response = await axios.post('api/login',userData);
            userDataResponse = response.data
            return userDataResponse
            
        }catch(err){
            throw err
        }
    }

export default login