let vueList = [
    {
        question:`
        1.vue核心思想
        `,
        answer:`
        只要面试问到vue，你就要把vue的核心思想找机会表达出来，比如说面试官随便问了你一个vue问题，
        你可以这样回答：我先把我对vue核心思想的理解简单表达一下..........说完之后，接着回答面试官问的问题。
        vue核心思想数据驱动和组件系统。数据驱动：当数据变化时，页面中用到数据的地方会时时更新,
        vue省去了原生js繁琐的dom操作。组件系统：vue中的页面是由多个组件构成的，
        使用组件的好处是提高复用性,降低耦合性,页面结构清晰。
        `
    },
    {
        question:`
        2.vue数据驱动原理
        `,
        answer:`
        vue.js 采用数据劫持结合发布者-订阅者模式,通过 Object.defineproperty 
        来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,
        触发响应的监听回调 (理解：Object.defineproperty主要用来监听属性的变化，
        一旦监听到变化，就会通知订阅者，让它去做修改页面数据等一系列事情，
        这样就达到了我们修改data里的数据，页面会时时变化，
        不用再去手动操作dom修改页面内容了)
        `
    },
    {
        question:`
        3.v-model数据双向绑定原理
        `,
        answer:`
        v-model数据双向绑定,即将输入框的value与data中的属性(如msg)进行绑定,
        修改输入框内容value,msg会自动更新变化;修改data中的msg,输入框内容value
        也会自动更新.共有2条线<br>
        1.修改data属性--->自动更新输入框 使用Object.defineProperty的set,
        get方法监听(劫持)属性变化,当监听到变化,去操作dom更新输入框的value值<br>
        2.修改输入框--->自动更新绑定的data属性 监听输入框改变事件,如change事件,当监听到输入框变化,去修改msg
        `
    },
    {
        question:`
        4.vue组件为啥data必须是个函数 ？
        `,
        answer:`
        <a style="color:red" href="https://www.jb51.net/article/188491.htm">
        相关博客
        </a>
        <br/>
        这是由js特性导致的，当原型对象的data属性是对象时，修改任何一个实例都会影响其他实例，
        data属性设置成函数时，每一个实例都是相互独立的不会相互影响，使用函数可以避免组件之间的数据干扰。

        `
    },
    {
        question:`
        5.简单介绍下vuex
        `,
        answer:`
        vuex是用来做全局的状态管理的,主要有5个属性<br/>
        1. state：vuex的基本数据，用来存储变量<br/>
        2. getter：相当于state的计算属性，依赖state中的数据<br/>
        3. mutation：主要用来修改state中的数据，必须是同步的<br/>
        4. action：和mutation的功能大致相同，不同之处在于==>1. Action 提交的是 mutation，而不是直接变更状态。
        2. Action 可以包含异步操作。<br/>
        5. modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters
        
        `
    },
    {
        question:`
        6.computed和watch区别
        `,
        answer:`
        计算属性computed:支持缓存，只有依赖数据发生改变，
        才会重新进行计算(多对一:一个属性由多个属性计算而来时，使用计算属性 )<br/> 
        <br/>
        watch监听:不支持缓存，数据变，直接会触发相应的操作(一对多:
        一个属性值变化影响多个属性 ,watch如何开启深度监听:deep)

        `
    },
    {
        question:`
        7.vue父组件向子组件传递数据？(父传子)
        `,
        answer:`
        在子组件的props中注册要用来传值的属性
        `
    },
    {
        question:`
        8.子组件向父组件传递数据？(子传父)
        `,
        answer:`
        子组件执行this.$emit方法去触发父组件监听的事件,
        this.$emit方法第一个参数是事件名,第二个参数是要传递的数据
        `
    },
    {
        question:`
        9.v-show和v-if指令的不同点？
        `,
        answer:`
        都可以控制元素的显示隐藏<br/>
        v-show:通过控制display属性来控制显示隐藏<br/>
        v-if:直接在dom中增加删除元素来控制显示隐藏<br/>
        使用范围:v-show适用于显示隐藏切换频繁的场景 v-if用于切换不频繁的场景
        `
    },
    {
        question:`
        10.为什么使用key(key的作用)?
        `,
        answer:`
        key可以给每个虚拟节点做一个唯一标识，
        在同级虚拟节点的Diff比对过程中，可以根据key快速的进行对比，
        来判断两个节点是否为相同节点,作用主要是为了高效的更新虚拟DOM。
        `
    },
    {
        question:`
        11.能不能用index做key?
        `,
        answer:`
        如果只是列表的展示,不对列表进行逆序添加,
        逆序删除等破坏列表顺序的操作,可以使用index作为key,否则不能,
        因为key必须是一个唯一的数字或字符串
        `
    },
    {
        question:`
        12.$nextTick的作用?
        `,
        answer:`
        当你修改了data中某个属性的值,
        然后马上获取这个属性绑定的dom元素的值，
        不能立刻获取到更新之后的值， 你需要使用$nextTick这个回调，
        让修改后的数据渲染更新到dom元素之后再获取，才能成功。
        `
    },
    {
        question:`
        13.v-if和v-for的优先级
        `,
        answer:`
        v-for的优先级高，如果v-if和v-for一起用的话，
        vue会自动提示v-if应该放到外层去。
        `
    },
    {
        question:`
        14.对vue生命周期的理解
        `,
        answer:`
        vue实例从创建到初始化数据到数据挂载到销毁等一系列的过程，称为vue的生命周期。
        主要有8个阶段对应8个钩子函数:<br/>
        beforecreate<br/>
        created   data和methods最早在created中初始化完成<br/>
        beforemount<br/>
        mounted   数据渲染到页面最早在mounted中完成<br/>
        beforeupdate<br/>
        updated<br/>
        beforedestory<br/>
        destoryed<br/>
        应用：<br/>
        数据请求一般放在mounted中,也可以放在created中<br/>
        `
    },
    {
        question:`
        15.mvvm框架是什么?
        `,
        answer:`
        mvvm指m:Model,v:View,vm:ViewModel
        vue是实现了双向数据绑定的mvvm框架，当视图改变更新模型层，
        当模型层改变更新视图层。在vue中，使用了双向绑定技术，
        就是View的变化能实时让Model发生变化，
        而Model的变化也能实时更新到View。 
        `
    },
    {
        question:`
        16.vue中 keep-alive 组件的作用
        `,
        answer:`
        主要用于保留组件状态或避免组件重新渲染,
        当组件被keep-alive包裹就会触发两个新的生命周期钩子函数:activated和deactivated
        `
    },
    {
        question:`
        17.vue-router有哪几种路由导航守卫,
        每种导航守卫有哪些常用的钩子函数,路由导航守卫的作用？
        `,
        answer:`
        路由导航守卫的作用:主要用来做权限管理,比如说在进入一个页面之前,
        我们可以通过路由守卫来判断是否需要登录才能进入该页面,
        如果需要登录就对它进行一些操作,如果不需要直接放行<br/>
        1.全局守卫:beforeEach,afterEach<br/>
        2.路由独享的守卫:beforeEnter<br/>
        3.组件内的守卫:beforeRouteEnter,beforeRouteLeave<br/>
        `
    },
    {
        question:`
        18.$route 和 $router 的区别
        `,
        answer:`
        $route是“路由信息对象”，包括path，params，hash，query，name等路由信息参数。<br/>
        $router是“路由实例”对象包括了路由的跳转方法，钩子函数等。
        `
    },
    {
        question:`
        19.vue和react的异同点
        `,
        answer:`
        相同点: <br/>
        1.都使用了虚拟dom:<br/>
        作用:提高了渲染效率,降低频繁dom操作带来的性能损耗<br/>
        2.组件化开发<br/>
        作用:提高了代码的复用性;降低了代码的 耦合度(代码之间依赖性,
        修改某一块代码不曾想其他地方的代码也变了,牵一发而动全身,造成未知的bug),
        使代码的结构更清晰<br/>
        3.响应式数据(数据驱动)<br/>
        页面变化不再需要操作dom,只需要修改数据页面就会自动变化,简化了繁琐的dom操作<br/>
        <br/>
        不同点: <br/>
        1.vue模板语法写法更加 固定,几乎所有人写的代码都差不多,都是vue封装好的指令和一些api.
        它的优势是维护优化起来会比较容易,因为模板的限制编译优化更加轻松;劣势是对于大型复杂的项目
        可能实现起来不是特别优雅.<br/>
        <br/>jsx写法则更加 灵活,我们可以更自由的使用js语言去构建我们的应用.优势是对于复杂的项目
        需求我们可以自由的编码实现,劣势是编译优化比较困难,因为大家写的代码都不一样,维护时要
        先理解才能去修改,时间成本较大.<br/>
        2.学习react需要先学习jsx语法es6,学习vue只需要会基本的js就可以,前者上手难度大一点<br/>
        3.react适合复杂的大型项目,vue2适合中小型项目
        `
    },
    {
        question:`
        20.Vue2和Vue3的区别?
        `,
        answer:`
        1.Vue3相比于Vue2渲染速度更快,打包体积更小<br/>
        <br/>
        2.Vue2响应式原理主要是使用Object.defineProperty对数据进行劫持,
        结合发布订阅模式的方式来实现的;Vue3使用Proxy来实现的,
        Proxy相比Object.defineProperty的优点是:
        1.defineProperty只能监听某个属性,而Proxy可以监听整个对象;
        2.Proxy可以监听数组变化,不用像Vue2中对数组的方法进行重新封装<br/>
        <br/>
        3.定义变量和方法有区别:Vue2定义变量在data中,
        定义方法在methods中,定义计算属性在computed中......这种分散的配置,
        导致代码可读性比较差,在项目比较大的情况下,维护起来非常困难;
        Vue3使用组合api结合hook函数,可以将逻辑功能封装成一个个hook,
        极大提高了代码的可读性与可维护性.
        `
    },
    {
        question:`
        21.路由传参的方式?
        `,
        answer:`
        query传参和params传参,params传参需要通过name匹配
        路由,并且需要在路由对象中配置要传递的参数
        `
    },
    {
        question:`
        22.this.$set(Vue.set)的使用场景?
        `,
        answer:`
        当我们给对象添加属性的时候,视图却没有更新,
        由于受js的限制，vue.js不能监听对象属性的添加和删除，
        因为在vue组件初始化的过程中，会调用getter和setter方法，
        所以该属性必须是存在在data中，视图层才会响应该数据的变化<br>
        使用Vue.set添加的属性会生成getter和setter方法,属性是响应式的,
        修改属性页面就会自动更新了.
        `
    },
    {
        question:`
        23.性能优化,提高首屏加载速度
        `,
        answer:`
        <a style="color:red" href="./imgs/fast.png">性能优化纲要</a><br/>
        1.压缩<br/>
        对代码进行压缩，我们可以减小代码的体积量<br/>
        <br/>
        2.路由懒加载<br/>
        当我们使用路由懒加载后，项目就会进行按需加载，
        其原理就是利用webpack大法的code splitting，
        当你使用路由加载的写法，webpack就会对app.js进行代码分割，
        减小app.js的体积，从而提高首屏加载速度<br/>
        <br/>
        3.使用CDN引入<br/>
        采用CDN引入，在index.html使用CDN引入，并在webpack配置。
        打包之后webpack进会从外部打包第三方引入的库,
        减小app.js的体积，从而提高首屏加载速度<br/>
        <br/>
        4.使用服务端渲染ssr<br/>
        服务端渲染的优点:1.更好的SEO;2.更快的渲染速度<br/>
        由于是服务端进行渲染，浏览器只需要渲染出服务端返回的html文件即可,
        不需要加载一大堆css,js文件,极大的提升了首屏加载速度
        `
    },
    {
        question:`
        24.vue-router有哪两种模式,它们的区别是什么?
        `,
        answer:`
        vue-router有hash和history两种模式.</br>
        它们的区别体现在3个方面:<br/>
        1.外观 : history模式的path路径不带#号，hash有#号<br/>
        2.原理 : hash模式使用onhashchange方法, history使用pushState和replaceState方法,
        导致有兼容性差异. hash模式兼容性更好一点(因为history使用的pushState方法,
        对浏览器有一定要求)<br/>
        3.history模式下,刷新页面会向服务器发送请求,如果服务器没配置相应的路由路径
        会报404错误,因此使用history需要服务端将不存在的路由路径重定向到根页面
        `
    },
    {
        question:`
        25.谈谈你对webpack的理解?
        `,
        answer:`
        webpack是一个模块打包工具,它的作用主要包括:<br/>
        1.将多个文件进行合并，减少HTTP请求数<br/>
        2.压缩,减小应用体积<br/>
        3.将浏览器识别不了的后缀为.ts,.less,.sass,.vue等文件,
        转换为浏览器能识别的js,css文件<br/>
        webpack有5个比较核心的概念:<br/>
        1.Entry<br/>
        入口,规定webpack以哪个文件为起点开始打包,
        入口一般是src文件夹下面的main.js文件
        <br/>
        2.Output<br/>
        输出,webpack打包后的文件输出到哪里去
        <br/>
        3.Loader<br/>
        Loader可以让webpack去处理那些非js文件,因为webpack自身
        只能认识js,loader的作用是加载资源
        <br/>
        4.Plugins<br/>
        插件,扩展webpack的功能,如使用插件进行压缩
        <br/>
        5.Mode<br/>
        模式主要有两种:
            开发模式:development
            生产模式:production
        `
    }
]