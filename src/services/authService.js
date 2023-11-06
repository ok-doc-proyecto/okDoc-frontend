import axios from 'axios' 
import {ref} from  'vue'
import users from '../global-functions/userObjectsErase'


export const login = async(userData)=>{

    let user = ref([]);
    try{
       let response = await axios.get('api/login',userData);
       user.value = response.data
       return user.value
    } catch(err){
      throw err
    }
}

export const userValidation = (userData)=>{
    const parseData = JSON.parse(userData)
    console.log(parseData.user)
    console.log(parseData.password)
    const userIndex = users.findIndex(user => user.user === parseData.user)
    const userInfo = users[userIndex]
    let response = {}

    if (userIndex !== -1){
        if (parseData.password === userInfo.password){
            response = {
                valid:true,
                data: userInfo,
                message:'Success'
            }
            return(response)
        } else{
            response = {
                valid:false,
                message:'User or password not found'
            }
            return(response)
        }
        
    } else {
        response = {
            valid:false,
            message:'Wrong login information'
        }
        return(response)
    }
}



//export default login