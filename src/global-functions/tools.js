export const tools ={

    containsElement:(dictionary,query)=>{
        
        const elementIndex = dictionary.findIndex(item => item.name === query);
        return elementIndex
    },
    getData: (inputValue) =>{
        let userQuery = inputValue
        console.log('You have writen ' + userQuery)
        }

  }

