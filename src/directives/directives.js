
//公共指令
const directives = new Object();

directives.install = function (Vue) {
    Vue.directive('alert',(el,binding)=>{
        el.onclick = function () {  
            console.log(binding.value);
        }
    })
}

export {directives}