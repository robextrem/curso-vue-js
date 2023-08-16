<script>
export default{
    props:{
        id:{
            type:Number
        }
    }
}
</script>
<template>
    <div>
        <h1>Blog</h1>
        <p v-if="id">Este es el contenido #{{id}}</p>
    </div>
</template>