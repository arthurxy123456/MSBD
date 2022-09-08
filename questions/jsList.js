let jsList = [
    {
        question:`
        1.数据类型有哪些(共8个)?
        `,
        answer:`
        Boolean,Null,Undefined,Number,Bigint,String,Symbol,Object
        `
    },
    {
        question:`
        2.什么是作用域?作用域链的作用?
        `,
        answer:`
        作用域:变量或者函数的执行范围<br/>作用域链:使用一个变量时,先从当前作用域寻找,如果找到了直接使用;如果没找到去外层作用域寻找,如果还没找到
        继续去外层作用域寻找,直到找到全局作用域,还没找到的话变量undefined
        `
    },
    {
        question:`
        3.基本数据类型和引用数据类型的存储方式?
        `,
        answer:`
        基本数据类型(值类型):存储在栈<br/>
        引用数据类型:变量名存储在栈中,值存储在堆中
        `
    },
    {
        question:`
        4.怎么实现继承?
        `,
        answer:`
        ES6之前:使用call方法借用构造函数继承属性,使用原型继承方法<br/>
        ES6:使用extends关键字继承
        `
    },
    {
        question:`
        5.闭包是什么?作用?
        `,
        answer:`
        闭包形成的条件:1.函数嵌套2.内部函数可以获取外部函数的数据 内部函数我们称为闭包<br/>
        作用:延长变量的生命周期 缓存数据<br/>
        缺点:内存(变量)不释放 如何解决:给闭包设置为null
        `
    },
    {
        question:`
        6.深拷贝和浅拷贝是什么?怎么实现深和浅拷贝?
        `,
        answer:`
        拷贝是指新建一个对象复制原来对象的属性和值,浅拷贝:修改新对象的属性原来对象的属性也会变化;深拷贝:修改新
        对象的属性原来的对象属性不会变化<br/>
        <br/>
        实现浅拷贝的方法:<br/>
        1.Object.assign()<br/>
        2.es6使用扩展运算符...对象浅拷贝{...person}<br/>
        3.数组浅拷贝方法:concat<br/>
        <br/>
        实现深拷贝的方法:<br/>
        1.for循环递归可以实现深拷贝<br/>
        2.使用JSON.parse()和JSON.stringify()实现深拷贝<br/>
        3.使用第三方库loadash可以实现深拷贝<br/>
        `
    },
    {
        question:`
        7.0promise是什么?promise作用?await async是什么?作用呢?
        `,
        answer:`
        promise是异步编程的一种解决方案,在js中,异步编程主要有三种方式:
        异步回调函数,promise,async/await,在es6之前js异步编程用的是异步的回调函数,回调函数实现异步存在一个问题,当嵌套过多时会产生 "回调地狱",
        代码非常难读懂,为了解决"回调地狱"问题,es6推出了promise,promise使用链式编程(链式调用)彻底解决了回调函数嵌套过深的问题,
        但是promise代码仍然不够直观,多次异步操作不能够像同步代码那样垂直，顺序书写。
        第二次以及多次的异步操作需要放到then后的回调函数内进行操作,为了解决这个问题,js异步编程的终极解决方案async/await在es7版本诞生了,
        它使用垂直同步书写代码的方式,实现了异步的功能,代码直观易懂!(背下来,js面试究极重点!)<br/>
        async foo(){<br/>
        let a = await foo1();<br/>
        let b = await foo2();<br/>
        let c = await foo3();<br/>
        } 
        `
    },
    {
        question:`
        7.1谈谈promise的状态以及状态如何变化
        `,
        answer:`
        promise有三种状态:准备状态(pending),成功状态(resolved),
        失败状态(rejected)</br>
        状态变化只有两种情况:</br>
        1.从准备状态变为成功状态;</br>
        2.从准备状态变为失败状态</br>
        promise状态改变就会一直保持这个状态,不能从成功状态变失败状态,
        也不能从失败变成功,状态也是不可逆的,即也不能从成功状态变回准备
        状态或从失败状态变回准备状态.
        `
    },
    {
        question:`
        7.2说说promise常用的api(方法)?
        `,
        answer:`
        1.resolve:返回一个成功状态的promise对象</br>
        2.reject:返回一个失败状态的promise对象</br>
        3.Promise.all([promise1,promise2,promise3,...]):
        all方法可以传入多个promise对象,所有promise对象都是
        成功状态,才会返回一个成功状态的数组,一旦有任何一个promise对象
        是失败状态,就会直接返回一个失败状态的promise对象.</br>
        4.Promise.race([promise1,promise2,promise3,...]):
        race方法可以传入多个promise对象,与all不同的是,race会返回一个
        promise对象,该对象的状态由第一个成功或失败的promise对象的状态决定,
        即第一个执行完的promise是成功状态那么返回的promise就是成功状态,
        否则就是失败状态.</br>
        </br>
        all方法的使用场景:</br>
        如果想让多个接口请求完成再去做一些其他操作,可以将这些接口请求作为参数
        传到Promise.all()方法中即可</br>
        `
    },
    {
        question:`
        8.说说事件循环机制(event loop)?
        `,
        answer:`
        js引擎是单线程的,同一时间只能执行一个任务,同步任务在主线程中进行,
        异步任务放到任务队列中,所有同步任务执行完才会去读取执行异步任务队列中的任务.
        异步任务又分为宏任务和微任务,微任务的优先级高于宏任务,
        常见的宏任务有dom事件回调函数,ajax回调函数,定时器回调函数,
        常见的微任务主要是promise中then的成功和失败回调.(背下来,js面试究极重点!)
        `
    },
    {
        question:`
        9.原型的作用?说说原型链?
        `,
        answer:`
        原型本质就是一个对象,构造函数有一个属性prototype指向原型对象,
        构造函数的实例对象都有一个属性__proto__也指向原型对象,
        因为所有实例的原型相同,所以可以利用原型对象让实例 共享属性和方法.<br>
        <br>
        原型链:每个对象都有__proto__属性，当我们访问一个对象的属性或方法时，如果对象本身有这个属性则直接使用，如果这个对象内部不存在这个属性或方法，那么他就会去原型对象__proto__里找这个属性，这个原型对象__proto__又会有自己的原型对象__proto__，于是就这样 一直找下去,直到找到Object.property.__proto__,如果还没找到返回null 
        `
    },
    
    {
        question:`
        10.开发项目时,你们是如何从后端(服务端)获取数据的?
        `,
        answer:`
        使用http协议,主要使用了get和post请求方式从服务端获取数据.
        `
    },
    {
        question:`
        11.get请求和post请求有什么区别?
        `,
        answer:`
        1.get请求可以缓存,post不可以;<br/>
        2.get请求的url有长度限制,post没有.
        `
    },
    {
        question:`
        12.从服务端(后端)获取的数据是什么格式的?
        `,
        answer:`
        JSON(遇到问请求数据的格式这一块一定是JSON)
        `
    },
    {
        question:`
        13.你们发送get和post请求是使用什么库实现的?有做二次封装吗?
        `,
        answer:`
        我们使用axios去发送请求.对axios有做封装,
        主要是利用js的异步解决方案async/await结合promise去封装axios的请求,
        获取到请求数据后,根据后端给的状态码去判断接口是否请求成功,
        比如说,前端和后端协商好状态码状态,1表示成功,0表示失败,
        那么当状态码是1时我们就去执行成功的操作,状态码是0时,就将后端给的错误信息用弹窗弹出来给用户提示.
        `
    },
    {
        question:`
        14.ajax是什么?
        `,
        answer:`
        ajax是一种网页局部刷新的技术.请求数据的时候如果不用ajax会刷新整个页面,
        用户体验比较差,而使用ajax则可以实现页面的局部刷新,提升了用户体验.
        `
    },
    
    {
        question:`
        15.箭头函数和普通函数的区别?
        `,
        answer:`
        1.this指向不同 普通函数this指向直接调用它们的对象;箭头函数
        本身没有this,它的this和外层作用域的this指向相同<br />
        2.箭头函数都是匿名函数,普通函数可匿名可具名<br />
        3.箭头函数不能用于构造函数
        `
    },
    {
        question:`
        16.this指向问题?
        `,
        answer:`
        一般的函数中:<br/>
        this指向那个直接调用它的对象<br/>
          1.构造函数中this指向实例对象<br/>
          2.原型对象方法中this指向实例对象<br/>
          3.回调函数中this指向window<br/>
          4.普通的函数中this指向window<br/>
        <br/>
        箭头函数中:<br/>
        箭头函数本身没有this,它的this和外层作用域的this指向相同
        `
    },
    {
        question:`
        17.数组常用方法有哪些?
        `,
        answer:`
        push:在数组末尾添加一个元素<br/>
        pop:删除数组最后一个元素<br/>
        unshift:在数组头部添加一个元素<br/>
        shift:删除数组头部的第一个元素<br/>
        splice:可以用来删除指定位置的元素
        `
    },
    {
        question:`
        18.es6有哪些新的功能?
        `,
        answer:`
        let const 变量结构赋值 模板字符串 扩展运算符
        promise class 箭头函数
        `
    },
    {
        question:`
        19.let const var的区别?
        `,
        answer:`
        let和var的区别:<br/>
          1.let不存在变量提升<br/>
          2.let不允许重复定义<br/>
          3.let定义的变量只能在块级作用域中使用<br/>
          <br/>
        let和const的异同:<br/>
          const和let很多特性一样,不存在变量提升,不允许重复定义,
          定义的变量只能在块级作用域中使用<br/>
          但是const定义的是只读的常量,一般不允许改变.
        `
    },
    {
        question:`
        20.set和map的区别?
        `,
        answer:`
        set类似数组但是它没有重复的元素<br/>
        map类似对象但是它的键不局限于字符串,可以用各种
        类型的值(包括对象)做key
        `
    },
    {
        question:`
         21.什么是跨域,如何解决跨域问题?
        `,
        answer:`
        一个域名请求另一个域名的资源时,协议,域名,端口任何一个
        不同都会形成跨域,跨域的原因是浏览器的同源策略<br>
        <br>
        解决跨域的方法:<br/>
        1.jsonp,原理是script标签不受同源策略限制<br/>
        2.服务端使用cors<br/>
        3. 在前端的工程化项目(webpack)中,
        我们可以通过配置devserver的proxy来解决跨域访问的问题。
        他的原理是在本地开启一个服务器向数据服务器发送请求，
        因为服务器和服务器之间是没有跨域<br/>
        4.但是因为webpack的devserver只在开发环境下有效，
        当项目发布上线之后仍然会有跨域问题，为了解决项目上线的跨域问题，
        我们配置服务器的反向代理（Apache读作阿帕奇）来实现跨域请求
        `
    },
    {
        question:`
        22.从输入一个 URL 地址到浏览器完成渲染的整个过程?
        `,
        answer:`
        1.输入url首先会进行dns域名解析<br/>
        2.建立tcp连接,发起tcp三次握手<br/>
        3.发送http请求<br/>
        4.服务器处理请求,并返回响应结果<br/>
        5.关闭tcp连接<br/>
        6.浏览器解析并渲染页面
        `
    },
    {
        question:`
        23.sessionStorage，localStorage以及cookies区别?
        `,
        answer:`
        sessionStorage会话存储,浏览器关闭,存储的数据就会消失<br/>
        localStorage本地存储,数据永久保存在本地,关闭浏览器也不会消失<br/>
        cookies:如果不设置过期时间,浏览器关闭,数据就会消失;如果设置了
        过期时间,数据会在过期后才会消失
        `
    },
    
    {
        question:`
         24.图片懒加载的作用，怎样实现图片懒加载?
        `,
        answer:`
        懒加载的作用:减少http请求数,提高用户体验<br/>
        实现原理:img元素的src属性使用一个小的图片占位,当图片滑动到可视区域,
        将src修改为需要显示的图片
        `
    },
    
    {
        question:`
         25.判断数据类型的方法?
        `,
        answer:`
        1.typeof<br/>
        可以判断js的基本数据类型,无法判断对象的具体类型<br>
        <br/>
        2.constructor<br/>
        返回所有js变量的构造函数(除null,undefined类型)<br/>
        <br/>
        3.Object.prototype.toString.call<br/>
        可以判断具体的对象类型,但是无法判断自定义对象类型<br/>
        <br>
        4.instanceof<br>
        判断构造函数的 prototype 属性是否出现在某个实例对象的原型链上,
        能判断对象具体类型,也可以用于自定义对象类型的判断
        `
    },
    {
        question:`26.什么是节流和防抖?作用是什么?`,
        answer:`
        防抖和节流都是用来控制某个函数在一定时间内触发的次数,
        两者都是为了减少触发频率,以便提高性能.<br/>
        防抖:<br/>
        某一高频事件不断被触发时,仅在最后一次真正执行事件处理代码
        防抖就类似回城，打断就得重新回<br/>
        节流:<br/>
        某一高频事件被触发时,确保在n秒内只执行一次
        节流就类似有冷却时间的技能,使用一次技能后,需要等
        冷却时间到了才能用
        `
    },
    {
        question:`27.如何改变this指向?call,apply,bind的区别是什么?`,
        answer:`使用call,apply,bind可以改变this指向.
        <br />
        call和apply都会改变this指向,并且都会立即执行函数,
        但是他们的传参方式不一样,apply传一个数组,call的实参需要一个个
        的去传,用逗号隔开:<br/>
          fn.call(this,参数1,参数2,参数3,...)<br/>
          fn.apply(this,[参数1,参数2,参数3,...])<br />
        bind和call,apply一样也可以改变this指向,但是bind会拷贝一份
        原来的函数,并不会立即执行.
        `
    },
    {
        question:`28.说出数组去重的几种方法?`,
        answer:`
        1.使用set,利用set不允许出现重复元素的特点去重:
        let ary = new Set(array)<br/>
        2.使用filter结合indexOf去重:
        let ary = array.filter((item,index)=>{
            return array.indexOf(item) == index;
        })<br/>
        indexOf方法可返回某个指定的字符串在字符串中首次出现的位置索引,
        如果首次出现位置的索引等于该字符串在数组中的索引,那么说明该字符串
        在数组中唯一.<br/>
        `
    },
    {
        question:`29.同源策略`,
        answer:`
        同源策略可防止 JavaScript 发起跨域请求。
        源被定义为 URI、主机名和端口号的组合。
        此策略可防止页面上的恶意脚本通过该页面的文档对象模型，访问另一个网页上的敏感数据<br/>
        同源策略： 协议、主机、端口必须完全一致
        `
    },
    {
        question:`30.target和currentTarget区别`,
        answer:`
        event.target：返回触发事件的元素<br/>
        event.currentTarget：返回绑定事件的元素
        `
    },
    {
        question:`31.prototype和__proto__的关系是什么`,
        answer:`
        1.函数有一个prototype属性，这个属性表示函数的原型<br/>
        这个属性中有三部分信息：构造函数   所有实例公共的属性和方法   __proto__<br/>
        2.对象有一个__proto__属性，他指向函数的原型<br/>
        区别：<br/>
        a._proto_是隐式原型，prototype是显示原型<br/>
        b.prototype：每一个函数创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象<br/>
        c._proto_ ：javascript中任意的对象都有一个内置属性，在ES5之前没有标准的方法访问这个内置属性，但是大多数浏览器都支持通过_proto_来访问。
        `
    },
    {
        question:`32.变量提升`,
        answer:`
        用var声明的变化会被自动提升。let和const不会使变量提升。<br/>
        用var声明的变量会被提升到当前作用域的最前面，只会提升变量的声明，不会提升变量的复制。<br/>
        如果有函数的声明和变量的声明同名，则函数的提升会在变量的提升之前。
        `
    },
    {
        question:`33.new一个对象经历了什么`,
        answer:`
        function Test(){}<br/>
        const test = new Test()<br/>
        1.创建一个新对象：const obj = {}<br/>
        2.设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象<br/>
        **obj.constructor = Test<br/>
        **obj.__proto__ = Test.prototype<br/>
        3.使用新对象调用函数，函数中的this被指向新实例对象 Test.call(obj)<br/>
        4.将初始化完毕的新对象地址，保存到等号左边的变量中
        `
    },
    {
        question:`34.bind、call、apply的区别`,
        answer:`
        bind、call、apply可以改变被调用函数中的this指向。<br/>
        call和apply其实是一样的，区别就在call需要一个个传参，而apply可以入参一个数组。<br/>
        call和apply都是在调用时触发指定的方法，同时改变指定方法中的this指向。而bind是返回一个已经修改this指向后的新函数，如果要触发该方法，我们需要手动调用。
        `
    },
    {
        question:`35.JS的数据类型有哪些？typeof运算符的执行结果都有哪些数据类型？`,
        answer:`
        数据类型主要包括两部分：<br/>
        1.基本数据类型： Undefined、Null、Boolean、Number和String<br/>
        2.引用数据类型： Array 、Object、Function、Date <br/>
        typeof运算符的结果类型：number,string，boolean,object,function,undefined
        `
    },
    {
        question:`36.怎么判断一个变量arr的话是否为数组（此题用typeof不行）？`,
        answer:`
        1.通过instanceof来判断<br/>
        **instanceof : 作用判断某一个变量是否是指定类型的变量，返回结果是true  false<br/>
        2.通过构造函数来判断是否是数组 <br/>
        3.通过原型的toString()方法阿来判断
        `
    },
    {
        question:`37.你如何优化自己的代码？`,
        answer:`
        代码重用 (封装)<br/>
        避免全局变量（模块化 mvc..）<br/>
        拆分函数避免函数过于臃肿：单一职责原则<br/>
        适当的注释，尤其是一些复杂的业务逻辑或者是计算逻辑，都应该写出这个业务逻辑的具体过程<br/>
        内存管理，尤其是闭包中的变量释放
        `
    },
    {
        question:`38.在 Javascript 中什么是伪数组？如何将伪数组转化为标准数组？`,
        answer:`
        伪数组（类数组）：有数组的部分特性，比如length、下标索引等，但是无法像数组一样调用数组的方法。<br/>
        典型伪数组有：函数的argument参数、getElementsByTagName、document.childNodes返回的dom集合、jquery对象等等。<br/>
        虽然伪数组不可以直接调用真正数组的方法，但是我们可以使用 Array.prototype.slice.call(fakeArray)来间接调用真正数组的方法。
        `
    },
    {
        question:`39.Cookie和Session是什么，两者的区别和关系？`,
        answer:`
        Cookie和Session是服务器开发中会话管理的数据存储技术<br/>
        区别：<br/>
        1. cookie 大小只有4k , seesion 大小有5M<br/>
        2. session保存在服务器，客户端不知道其中的信息；cookie保存在客户端，服务器能够知道其中的信息<br/>
        3. session中保存的是对象，cookie中保存的是字符串<br/>
        4. session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到。而cookie中如果设置 了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的。<br/>
        5. session默认需要借助cookie才能正常工作。一个客户端的cookie只能拿到服务器中对应的session数据。客户端没有cookie是拿不到session数据的。<br/>
        6. session在用户会话结束后就会关闭了，但cookie因为保存在客户端，设定的期限内保存
        `
    },
    {
        question:`40.举出闭包实际场景运用的例子`,
        answer:`
        1. 防抖节流<br/>
        2. 使用闭包可以在 JavaScript 中模拟块级作用域<br/>
        3. 闭包可以用于在对象中创建私有变量
        `
    },
    {
        question:`41.事件委托，事件代理`,
        answer:`
        事件委托利用了事件冒泡，将子元素自己的事件交给父亲来处理。(子元素自己不绑定事件也不处理事件，委托给父元素来处理)
        `
    },
    {
        question:`42.事件绑定的方式`,
        answer:`
        1.嵌入dom<br/>
        **< button onclick="func()">按钮</ button ><br/>
        2.直接绑定<br/>
        **btn.onclick = function(){}<br/>
        3.事件监听<br/>
        btn.addEventListener('click',function(){})<br/>
        element.attachEvent(etype, eventName)
        `
    },
    {
        question:`43.事件冒泡`,
        answer:`
        父元素和子元素上面的话都添加的有click（不仅仅是click事件，只要保证是同一个事件即可）。
        子元素的click事件触发的时候，会导致该click事件冒泡到它的父元素上面，为了阻止父元素的事件触发，我们一般需要给子元素的事件里写上阻止事件冒泡的方法
        `
    },
]