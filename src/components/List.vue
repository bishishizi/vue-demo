<template>
    <div class="list">
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    name : 'list',
    data (){
        return{
            msg : '美丽的中国语'
        }
    }
}
</script>
<style lang="scss" scoped>
.list{
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
    background-size: contain;
    background-clip:content-box ;
    animation: masked-animation 4s linear infinite;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%; 
    -webkit-animation: masked-animation 4s linear infinite;
    font-size: 35px;
}
@keyframes masked-animation {
    0% {
        background-position: 0  0;
    }
    100% {
        background-position: -100%  0;
    }
}
</style>

