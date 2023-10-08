<script setup>
    import baseInput from './baseInput.vue'
    import {tools} from '../../global-functions/tools'
</script>

<template>
    <div class="headerDivisorRight1">
        <div class="inputDiv">
            <a class="search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" width="20" height="20">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </a>
            <div class="input-field">
                <baseInput 
                    :sendInput="true" 
                    @send-query="tools.getData"
                    placeholder="Search" 
                    class="baseInput border-none" 
                    type="text" a
                    ria-label="searchInput">
                </baseInput>
              </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .headerDivisorRight1{
    display:flex;
    justify-content:center;
    align-items:center;
    right:0;
    box-sizing:border-box;
    padding:4px;
    height:100%;
    width:75%;
}
.inputDiv{
    display:flex;
    position:relative;
    width:200px;
    height:30px;
    margin-right:20px;
    margin-left:auto;
    background-color:transparent;
    border-radius:10px;
    box-sizing: border-box;
}
.inputDiv::after{
    content:"";
    position:absolute;
    margin-left:24%;
    bottom:0;
    left:0;
    width: 65%; 
    height: 1px; 
    background:rgb(29, 37, 22);
    transition: width 0.5s, margin 0.5s;
}
.inputDiv:hover::after{
    width:90%;
    margin-left:10%;
}
.inputDiv:focus-within::after{
    width:90%;
    margin-left:10%;
}
.search{    
    display:flex;
    justify-content: center;
    align-items:center;
    position:relative;
    margin:auto 0 auto auto;
    height:75%;
    align-items: center;
    width:30px;
    color:rgb(0, 0, 0); 
    cursor:pointer;
}


.search:hover{
    /*color:rgba(255, 255, 255, 0.66);*/
    color:rgba(255, 255, 255, 0.7);
}


.input-field{
    display:inline-block;
    position:relative;
    margin:auto auto auto 3px !important;
    width:70% !important;
    height:70%;
    
}


.input-field:focus-within::after{
    width:100%;
    margin:0;
}


.input-field input[type=text]:focus{
    border-right:0;
    border-bottom: none;
    box-shadow: none!important;
}
.input-field input[type=text]:focus .input-field::after{
    width:100%;
    margin:0;
}

.baseInput{
    width:100% !important;
    height:100% !important;
    box-sizing: border-box;
    background-color: transparent;
    border:none !important;
    border-style: none !important;

}

.baseInput::placeholder{
    color:rgba(0, 0, 0, 0.8)
}
</style>


