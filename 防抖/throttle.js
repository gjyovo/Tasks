// 节流：如果持续触发事件，每隔一段时间，只执行一次事件
/*
// 方式一：（第一次触发，最后不会被调用触发函数）
function throttle(func,wait){
    let context,args;
    let old = 0;   // 之前的事件戳设为0
    return function(){
        context = this;
        args = arguments;
        // 获取当前的时间戳(1970.1.1零点零分零秒到某时刻的毫秒数)
        let now = new Date().valueOf();
        if(now - old > wait){
            // 立即执行
            func.apply(context,args);
            old = now;
        }
    }
}
// 方式二：（第一次不会触发，最后一次会触发）
function throttle(func,wait){
    let context,args,timeout;
    return function(){
        context = this;
        args = arguments;
        if(!timeout){
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context,args);
            },wait);
        }
    }
}   
     */
//方式三：（双剑合璧）即顾头又顾尾
function throttle(func,wait){
    let context,args,timeout;
    let old = 0; // 时间戳
    return function(){
        context = this;
        args = arguments;

        let now = new Date().valueOf();
        if(now - old > wait){
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            func.apply(context,args);
            old = now;
        }
        if(!timeout){
            timeout = setTimeout(() => {
                old = new Date().valueOf();
                timeout = null;
                func.apply(context,args);
            },wait);
        }
    }
}
let count = 0;
let container = document.querySelector('#container');
let btn = document.querySelector('#btn');
        function doSomeThing(e) {
            // event指向问题
            console.log(e);
            // 改变执行函数内部this指向
            console.log(this);

            container.innerHTML = count++;
            return '想要的结果'
        }
        let doSome = debounce(doSomeThing,3000);
        btn.onclick = function(){
            doSome.cancel()
        }
container.onmousemove = throttle(doSomeThing,2000);