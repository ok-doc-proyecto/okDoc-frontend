import axios from 'axios' 


export const login = async(userData)=>{
    
    let user = ref([]);
        try{
            let response = await axios.get('api/login',userData);
            user.value = response.data
            return user.value
        }catch(err){
            throw err
        }
    }