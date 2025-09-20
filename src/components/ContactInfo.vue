<script setup>
import BtnItem from '../components/BtnItem.vue'
</script>

<template>
    <!-- <section class="row"> offset-1--> 
        <div class=" d-flex flex-column flex-sm-row justify-content-start align-items-start ps-5 gap-5 gap-sm-5 aa">
            <div class="d-flex flex-column justify-content-center align-items-start gap-3">
                <BtnItem :text="'Info.'" :is-infor="true"/>
                <div>Email：alroxccc@gmail.com</div>
                <div>Phone：<a href="tel:+886922432481">(+886)922432481</a></div>
                <div>Link Tree：TBC</div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-start gap-3 ">
                <BtnItem :text="'Line QR-Code'" :is-infor="true"/>
                <div class="line-wrapper">
                    <img src="../assets/LINE_QRcode.jpg">
                </div>
            </div>
        </div>
    <!-- </section> -->
</template>

<style scoped>
h3{
    color:var(--sub-color);
    font-weight:700
}
.line-wrapper{
    max-width: 150px;
}
.line-wrapper img{
    width: 100%;
}



.aa {
    
  /* animation-name: fadeIn;
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-timeline: view();
  animation-range: entry 40% entry 100%; */
  animation: fadeIn linear both;
  animation-timeline: view(block);
  animation-range: cover 0% contain 20%;
}

@keyframes fadeIn {
  from { opacity:0; }
  to { opacity: 1; }
}


</style>
