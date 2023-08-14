<script>
import Cabecera from './components/Header.vue'
import Cuerpo from './components/Cuerpo.vue'
import PieDePagina from './components/Footer.vue'
export default {
  components:{
    Cabecera,
    Cuerpo, 
    PieDePagina
  }
}
</script>
<template>
  <div id="container">
    <Cabecera></Cabecera>
    <!--Hacer esto no es posible, un data no se puede enviar, solo prop-->
    <!--Cuerpo descripcion="Fala mucho a clases" color="info" nombre="Marcelino" imagen="https://i.pinimg.com/originals/c9/43/e7/c943e782548b7657b1b8aedf7ca294e1.jpg"></Cuerpo-->
    <Cuerpo color="info" nombre="Marcelino" imagen="https://i.pinimg.com/originals/c9/43/e7/c943e782548b7657b1b8aedf7ca294e1.jpg"></Cuerpo>
    <Cuerpo color="success" nombre="Ana" imagen="https://video-images.vice.com/articles/5b4df32d7e5b5b000a784a86/lede/1531839341088-Screen-Shot-2018-07-17-at-103704-AM.png?crop=0.6258xw:0.8405xh;0.1811xw,0.0649xh"></Cuerpo>
    <Cuerpo color="danger" nombre="Zabdiel" imagen="https://static.wikia.nocookie.net/rugrats/images/b/b6/Chuckie.jpg/revision/latest/scale-to-width-down/480?cb=20190531192013&path-prefix=es"></Cuerpo>
    <Cuerpo color="warning" nombre="Ulises" imagen="https://pbs.twimg.com/media/Eov36n7XcAUEHjz.jpg:large"></Cuerpo>
    <p style="clear:both">
      <!--pie-de-pagina></pie-de-pagina-->
      <PieDePagina></PieDePagina>
    </p>
  </div>
</template>