<template>
  <div>
     <img alt="Vue logo" src="../assets/logo.png">
    <h1>点击切换语言 </h1>
    <select v-model="currentId" @change="change($event)">
    	<option v-for="(item,index) in productList" :key="index" :value="item.id" v-text="item.val"></option>  
	</select> 
    <span>{{$t('menu.home')}}</span>
    <span v-text="$t('content.main')"></span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      productList:[
              {id:1,val:"中文"},
              {id:2,val:"English"},
              {id:3,val:"繁體"}
        	],
        	currentId:"1",//获取被选中的value值， 默认选中的是1
    };
  },
  mounted() {
        this.fun_lang();
  },
  methods: {
    change(event) {
           		var _this = this
             	this.currentId = event.target.value; //获取option对应的value值
              //  console.log( this.$i18n.locale); 
               if ( this.currentId == 1 ) {
                      this.lang = 'zh';
                      localStorage.setItem("locale",this.lang);
                      this.$i18n.locale = this.lang; // 关键语句/
                }else if ( this.currentId == 2 ) {
                     this.lang = 'en';
                     localStorage.setItem("locale",this.lang);
                     this.$i18n.locale = this.lang; // 关键语句
                }else{
                     this.lang = 'zc';
                     localStorage.setItem("locale",this.lang);
                     this.$i18n.locale = this.lang; // 关键语句
                }
           	},
      fun_lang(){
       const lang =  localStorage.getItem("locale");
       switch(lang){
          case 'zh':
          this.currentId = 1
          break;
          case 'en':
          this.currentId = 2
          break;
          case 'zc':
          this.currentId = 3
          break;
          }
      }
  },
};
</script>

<style lang="scss" scoped>

</style>
