 //防抖函数
 function debounce(func,wait,immediate) {
    let timeout,result;
    let debounced = function() {
        //改变执行函数内部this的调用
        let context = this;
        let args = arguments;
        clearTimeout(timeout)
        if(immediate){
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            },wait);
            //立即执行
            if(callNow) result = func.apply(context,args)
        }else{
            //不会立即执行
            timeout = setTimeout(function(){
                func.apply(context,args);   //通过apply方法设置正确的this和参数，使函数可以接受不同值，更加灵活
            },wait);
        }
        return result;
    }
    //设置一个取消方法，似的按下button后防抖函数被取消，即事件在设定时间后不会被调用
    debounced.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
 }
 
let count = 0;
let container = document.querySelector('#container');
let btn = document.querySelector('#btn');
        function doSomeThing(e) {
            //event指向问题
            console.log(e);
            //改变执行函数内部this指向
            console.log(this);

            container.innerHTML = count++;
            return '想要的结果'
        }
        let doSome = debounce(doSomeThing,300);
        btn.onclick = function(){
            doSome.cancel()
        }
//鼠标经过时调用doSomeThing，添加debounce防抖：响应事件在300ms后才执行，如果在这段时间内再次调用，则重新计算执行时间
container.onmousemove = doSome;