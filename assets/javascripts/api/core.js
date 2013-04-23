KISSY.add('demo/api/core',function(S){

	return     {
        "anme":"core",
        "desc":"核心模块集",
        "subcats":[
            {
                "name":"loader",
                "slug":"http://docs.kissyui.com/docs/html/api/seed/loader/index.html",
                "entries":[{
                    "name":"add()",
                    "desc":"添加模块",
                    "slug":"http://docs.kissyui.com/docs/html/api/seed/loader/add.html"
                },{
                    "name":"config()",
                    "desc":"设置或获取 KISSY 配置参数",
                    "slug":"http://docs.kissyui.com/docs/html/api/seed/loader/config.html"
                },{
                    "name":"getScript()",
                    "desc":"动态加载目标地址的资源文件",
                    "slug":"http://docs.kissyui.com/docs/html/api/seed/loader/getScript.html"
                },{
                    "name":"use()",
                    "desc":"使用模块",
                    "slug":"http://docs.kissyui.com/docs/html/api/seed/loader/use.html"
                }]
            },
            {
                "name":"lang",
                "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/index.html",
                "subcats":[{
                    "name":"array",
                    "entries":[{
                        "name":"each()",
                        "desc":"遍历数组中的每一项, 执行指定方法",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/each.html"
                    },{
                        "name":"indexOf()",
                        "desc":"返回元素 elem 在数组 arr 中的序号",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/indexOf.html"
                    },{
                        "name":"lastIndexOf()",
                        "desc":"返回元素 elem 在数组 arr 中最后出现的序号",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/lastIndexOf.html"
                    },{
                        "name":"unique()",
                        "desc":"返回一个新数组, 仅包含 arr 去重后的值",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/unique.html"
                    },{
                        "name":"inArray()",
                        "desc":"判断元素 elem 是否在数组 arr 中",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/inArray.html"
                    },{
                        "name":"filter()",
                        "desc":"遍历数组, 过滤出符合条件的数组项",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/filter.html"
                    },{
                        "name":"map()",
                        "desc":"创建一个新数组, 数组结果是在对每个原数组元素调用指定函数的返回值",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/map.html"
                    },{
                        "name":"reduce()",
                        "desc":"从左向右对每个数组元素调用给定函数，并把返回值累积起来",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/reduce.html"
                    },{
                        "name":"every()",
                        "desc":""
                    },{
                        "name":"some()",
                        "desc":""
                    },{
                        "name":"makeArray()",
                        "desc":"将对象 o 转换为数组",
                        "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/makeArray.html"
                    }]
                },
                    {
                        "name":"escape",
                        "entries":[{
                            "name":"urlEncode()"
                        },{
                            "name":"urlDecode()"
                        },{
                            "name":"fromUnicode()",
                            "desc":"将 str 中 unicode 转义的字符替换成真实字符",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/fromUnicode.html"
                        },{
                            "name":"escapeHTML()",
                            "desc":"将字符串经过 html 转义得到适合在页面中显示的内容",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/escapeHTML.html"
                        },{
                            "name":"escapeRegExp()",
                            "desc":""
                        },{
                            "name":"unEscapeHTML()",
                            "desc":"将字符串中的 html 实体字符替换成对应字符",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/unEscapeHTML.html"
                        },{
                            "name":"param()",
                            "desc":"将对象 o 转换为参数字符串",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/param.html"
                        },{
                            "name":"unparam()",
                            "desc":"将参数字符串 str 还原为对象",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/unparam.html"
                        }]
                    },
                    {
                        "name":"function",
                        "entries":[{
                            "name":"noop()",
                            "desc":""
                        },{
                            "name":"bind()",
                            "desc":"创建一个新函数，该函数可以在固定的上下文以及传递部分固定参数放在用户参数前面给原函数并执行",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/bind.html"
                        },{
                            "name":"rbind()",
                            "desc":""
                        },{
                            "name":"later()",
                            "desc":"延迟执行指定函数 fn",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/later.html"
                        },{
                            "name":"throttle()",
                            "desc":"ms 时间内只执行 fn 一次, 即使这段时间内 fn 被调用多次",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/throttle.html"
                        },{
                            "name":"buffer()",
                            "desc":"将 fn 缓存一段时间后, 再被调用执行",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/buffer.html"
                        }]
                    },
                    {
                        "name":"object",
                        "entries":[{
                            "name":"stamp()",
                            "desc":""
                        },{
                            "name":"keys()",
                            "desc":"将对象的所有属性名作为数组返回",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/keys.html"
                        },{
                            "name":"mix()",
                            "desc":"将 supplier 对象的成员复制到 receiver 对象上",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/mix.html"
                        },{
                            "name":"merge()",
                            "desc":"将多个对象的成员合并到一个新对象上",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/merge.html"
                        },{
                            "name":"augment()",
                            "desc":"将 s1,s2.... 的 prototype 属性的成员复制到 r.prototype 上",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/augment.html"
                        },{
                            "name":"extend()",
                            "desc":"让函数对象 r 继承函数对象 s",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/extend.html"
                        },{
                            "name":"namespace()",
                            "desc":"根据参数创建命名空间对象",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/namespace.html"
                        }]
                    },
                    {
                        "name":"string",
                        "entries":[{
                            "name":"trim()",
                            "desc":"去除字符串两端的空白字符",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/trim.html"
                        },{
                            "name":"substitute()",
                            "desc":"将字符串中的占位符替换为对应的键值",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/substitute.html"
                        },{
                            "name":"ucfirst()",
                            "desc":"首字母大写"
                        },{
                            "name":"startsWith()",
                            "desc":"判断 str 是否以 prefix 开头",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/startsWith.html"
                        },{
                            "name":"endsWith()",
                            "desc":"判断 str 是否以 suffix 结尾"
                        }]
                    },
                    {
                        "name":"type",
                        "entries":[{
                            "name":"isBoolean()",
                            "desc":"判断是否布尔值",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isBoolean.html"
                        },{
                            "name":"isNumber()",
                            "desc":"判断是否有效数值",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isNumber.html"
                        },{
                            "name":"isString()",
                            "desc":"判断是否字符串",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isString.html"
                        },{
                            "name":"isFunction()",
                            "desc":"判断是否函数",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isFunction.html"
                        },{
                            "name":"isArray()",
                            "desc":"判断是否数组",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isArray.html"
                        },{
                            "name":"isDate()",
                            "desc":"判断是否日期",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isDate.html"
                        },{
                            "name":"isRegExp()",
                            "desc":"判断是否正则表达式",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isRegExp.html"
                        },{
                            "name":"isObject()",
                            "desc":"判断是否为对象",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isObject.html"
                        },{
                            "name":"isNull()",
                            "desc":"判断是否 null",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isNull.html"
                        },{
                            "name":"isUndefined()",
                            "desc":"判断是否 undefined",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isUndefined.html"
                        },{
                            "name":"isEmptyObject()",
                            "desc":"判断是否空对象(没有任何可遍历的属性)",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isEmptyObject.html"
                        },{
                            "name":"isPlainObject()",
                            "desc":"判断是否是普通对象",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isPlainObject.html"
                        },{
                            "name":"type()",
                            "desc":""
                        }]
                    },
                    {
                        "name":"lang",
                        "entries":[{
                            "name":"equals()",
                            "desc":""
                        },{
                            "name":"clone()",
                            "desc":"创建一个 普通对象 或数组的深拷贝, 并且返回",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/clone.html"
                        },{
                            "name":"now()",
                            "desc":"返回 new Date().getTime()",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/now.html"
                        },{
                            "name":"isWindow()",
                            "desc":"判断参数是否为浏览器 window",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/isWindow.html"
                        },{
                            "name":"parseXML()",
                            "desc":"将字符串转化为 xml 文档",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/parseXML.html"
                        },{
                            "name":"globalEval()",
                            "desc":"在全局作用域下执行代码字符串, 避免 eval 的作用域链",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/globalEval.html"
                        },{
                            "name":"ready()",
                            "desc":"DOM 加载完毕时执行",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/ready.html"
                        },{
                            "name":"available()",
                            "desc":"当需要比 KISSY.ready() 反应更快的探测到某个元素可用时使用",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/available.html"
                        },{
                            "name":"log()",
                            "desc":"输出调试信息",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/log.html"
                        },{
                            "name":"error()",
                            "desc":"抛出错误异常",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/error.html"
                        },{
                            "name":"guid()",
                            "desc":"返回全局唯一 id",
                            "slug":"http://docs.kissyui.com/docs/html/api/seed/kissy/guid.html"
                        }]
                    }]
            },
            {
                "name":"ajax",
                "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/index.html",
                "subcats":[{
                    "name":"类",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/#module",
                    "entries":[{
                        "name":"IO",
                        "desc":"",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/#module-io"
                    }]
                },{
                    "name":"方法",
                    "entries":[{
                        "name":"setupConfig()",
                        "desc":"为所有的 ajax 请求设定默认配置",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/setupConfig.html"
                    },{
                        "name":"get()",
                        "desc":"发送 http get 请求",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/get.html"
                    },{
                        "name":"post()",
                        "desc":"发送 http post 请求",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/post.html"
                    },{
                        "name":"getJSON()",
                        "decs":"发送 http get 请求，无视请求响应的 Content-type，将返回信息解析为 json 作为第一个参数调用 callback 回调.",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/getJSON.html"
                    },{
                        "name":"jsonp()",
                        "desc":"发送 jsonp 请求",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/jsonp.html"
                    },{
                        "name":"upload()",
                        "desc":"",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/upload.html"
                    },{
                        "name":"serialize()",
                        "desc":"序列化一系列表单元素为可提交的字符串",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/serialize.html"
                    }]
                },{
                    "name":"事件",
                    "entries":[{
                        "name":"start()",
                        "desc":"当配置初始化后，获取传输对象前触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/index.html#io.io.Events.start"
                    },{
                        "name":"send()",
                        "desc":"请求发送前触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/index.html#io.io.Events.send"
                    },{
                        "name":"success()",
                        "desc":"服务器返回成功后触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/index.html#io.io.Events.success"
                    },{
                        "name":"error()",
                        "desc":"服务器返回失败后触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/index.html#io.io.Events.error"
                    },{
                        "name":"complete()",
                        "desc":"服务器返回（无论成功或失败）后触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/ajax/index.html#io.io.Events.complete"
                    }]
                }]
            },
            {
                "name":"anim",
                "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html",
                "subcats":[{
                    "name":"方法",
                    "entries":[{
                        "name":"isRunning()",
                        "desc":"判断当前动画对象是否在执行动画过程",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.prototype.isRunning"
                    },{
                        "name":"isPaused()",
                        "desc":"判断当前动画对象是否被暂停",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.prototype.isPaused"
                    },{
                        "name":"run()",
                        "desc":"开始当前动画实例的动画",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.prototype.run"
                    },{
                        "name":"stop()",
                        "desc":"结束当前动画实例的动画",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.prototype.stop"
                    },{
                        "name":"pause()",
                        "desc":"暂停当前动画实例的动画",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.prototype.pause"
                    },{
                        "name":"resume()",
                        "desc":"继续当前动画实例的动画",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.prototype.resume"
                    }]
                },
//                {
//                    "name":"静态方法",
//                    "entries":[{
//                        "name":"Anim.isRunning()",
//                        "desc":"用于判断 elem 上是否有动画对象在执行",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.isRunning"
//                    },{
//                        "name":"Anim.isPaused()",
//                        "desc":" 用于判断 elem 上是否有动画对象在暂停",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.isPaused"
//                    },{
//                        "name":"Anim.stop()",
//                        "desc":"停止某元素上的动画",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.stop"
//                    },{
//                        "name":"Anim.pause()",
//                        "desc":"暂停某元素上的动画",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.pause"
//                    },{
//                        "name":"Anim.resume()",
//                        "desc":"继续某元素上的动画",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.resume"
//                    }]
//                },
                {
                    "name":"事件",
                    "entries":[{
                        "name":"complete()",
                        "desc":"动画结束后, 触发该事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/anim/index.html#anim.Anim.Events.complete"
                    }]
                }],
                "entries":[]
            },
            {
                "name":"base",
                "slug":"http://docs.kissyui.com/docs/html/api/core/base/index.html",
                "subcats":[{
                    "name":"Attribute",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html",
                    "subcats":[{
                        "name":"方法",
                        "entries":[{
                            "name":"addAttr()",
                            "desc":"给宿主对象增加一个属性",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.addAttr"
                        },{
                            "name":"addAttrs()",
                            "desc":"批量添加属性",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.addAttrs"
                        },{
                            "name":"hasAttr()",
                            "desc":"判断是否有名为 name 的属性",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.hasAttr"
                        },{
                            "name":"removeAttr()",
                            "desc":"删除名为 name 的属性",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.removeAttr"
                        },{
                            "name":"get()",
                            "desc":"获取属性 name 的值",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.get"
                        },{
                            "name":"getAttrVals()",
                            "desc":"获取目前实例的所有属性键值对集合",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.getAttrVals"
                        },{
                            "name":"set()",
                            "desc":"设置属性 name 的值为 value",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.set"
                        },{
                            "name":"reset()",
                            "desc":"重置属性 name 为初始值",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.prototype.reset"
                        }]
                    },{
                        "name":"事件",
                        "entries":[{
                            "name":"beforeAttrNameChange()",
                            "desc":"名为attrName的属性, 在改变它的值之前触发该事件",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.Events.beforeAttrNameChange"
                        },{
                            "name":"afterAttrNameChange()",
                            "desc":"名为attrName的属性, 在改变它的值之后触发该事件",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#base.Attribute.Events.afterAttrNameChange"
                        },{
                            "name":"Change()",
                            "desc":"每调用 set() 一次后就触发一次该事件",
                            "slug":"http://docs.kissyui.com/docs/html/api/core/base/attribute.html#Attribute.Events.*Change"
                        }]
                    }]
                },{
                    "name":"Base",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/base/base.html",
                    "entries":[{
                        "name":"Base()",
                        "desc":"如果你想让类默认就支持 attribute 功能, 请直接继承 Base",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/base/base.html"
                    }]
                }]
            },
            {
                "name":"cookie",
                "slug":"http://docs.kissyui.com/docs/html/api/core/cookie/index.html",
                "subcats":[{
                    "name":"方法",
                    "entries":[{
                        "name":"get()",
                        "desc":"获取cookie值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/cookie/index.html"
                    },{
                        "name":"remove(设)",
                        "desc":"置空cookie值，并立刻过期",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/cookie/index.html"
                    },{
                        "name":"set()",
                        "desc":"置cookie值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/cookie/index.html"
                    }]
                }]
            },
            {
                "name":"dom",
                "slug":"http://docs.kissyui.com/docs/html/api/core/dom/index.html",
                "entries":[{
                    "name":"selector",
                    "desc":"选择器",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/dom/selector.html"
                }],
                "subcats":[{
                    "name":"节点获取过滤",
                    "slug":"",
                    "entries":[{
                        "name":"query()",
                        "desc":"获取符合选择器的所有元素返回dom结点数组",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/query.html"
                    },{
                        "name":"get()",
                        "desc":"获取符合选择器的第一个dom元素",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/get.html"
                    },{
                        "name":"filter()",
                        "decs":"获取符合选择器以及过滤参数的所有元素",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/filter.html"
                    },{
                        "name":"test()",
                        "desc":"判断根据选择器获取的所有元素是否都符合过滤条件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/test.html"
                    },{
                        "name":"index()",
                        "decs":"获取元素位置",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/dom-index.html"
                    },{
                        "name":"contains()",
                        "desc":"判断某一容器(container)是否包含另一(contained)节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/contents.html"
                    },{
                        "name":"unselectable()",
                        "decs":"使符合选择器的所有元素都不可以作为选择区域的开始",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/unselectable.html"
                    },{
                        "name":"contents()",
                        "desc":"获取符合选择器的所有子节点（包括文字节点）",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/contents.html"
                    }]
                },{
                    "name":"css",
                    "entries":[{
                        "name":"css()",
                        "desc":"获取/设置符合选择器的第一个元素的样式值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/css.html"
                    },{
                        "name":"style()",
                        "desc":"获取/设置符合选择器的第一个元素 style 属性中指定声明的值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/style.html"
                    },{
                        "name":"addStyleSheet()",
                        "desc":"将 cssText 字符串作为内联样式表内容添加到文档中",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/addStyleSheet.html"
                    },{
                        "name":"width()",
                        "desc":"获取/设置符合选择器的第一个元素的宽度值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/width.html"
                    },{
                        "name":"height()",
                        "desc":"获取/设置符合选择器的第一个元素的高度值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/height.html"
                    },{
                        "name":"innerWidth()",
                        "desc":"获取符合选择器的第一个元素的宽度值, 注意: 该值包含 padding",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/innerWidth.html"
                    },{
                        "name":"innerHeight()",
                        "desc":"获取符合选择器的第一个元素的高度值, 注意: 该值包含 padding",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/innerHeight.html"
                    },{
                        "name":"outerWidth()",
                        "decs":"获取符合选择器的第一个元素的宽度值, 注意: 该值除了包含元素本身宽度和 padding 外, 还包含 border或margin",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/outerWidth.html"
                    },{
                        "name":"outerHeight()",
                        "desc":"获取符合选择器的第一个元素的高度值, 注意: 该值除了包含元素本身宽度和 padding 外, 还包含 border或margin",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/outerHeight.html"
                    },{
                        "name":"offset()",
                        "desc":"获取/设置符合选择器的第一个元素相对页面文档左上角的偏移值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/offset.html"
                    },{
                        "name":"scrollTop()",
                        "decs":"获取/设置窗口或元素的 scrollTop 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/scrollTop.html"
                    },{
                        "name":"scrollLeft()",
                        "desc":"获取/设置窗口或元素的 scrollLeft 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/scrollLeft.html"
                    },{
                        "name":"scrollIntoView()",
                        "desc":"使当前选择器匹配的第一个元素出现在指定容器可视区域内",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/scrollIntoView.html"
                    },{
                        "name":"docHeight()",
                        "desc":"获取页面文档 document 的总高度",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/docHeight.html"
                    },{
                        "name":"docWidth()",
                        "desc":"获取页面文档 document 的总宽度",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/docWidth.html"
                    },{
                        "name":"viewportHeight()",
                        "desc":"获取当前可视区域的高度值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/viewportHeight.html"
                    },{
                        "name":"viewportWidth()",
                        "desc":"获取当前可视区域的宽度值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/viewportWidth.html"
                    },{
                        "name":"show()",
                        "desc":"显示符合选择器的所有元素",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/show.html"
                    },{
                        "name":"hide()",
                        "desc":"隐藏符合选择器的所有元素",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/hide.html"
                    },{
                        "name":"toggle()",
                        "desc":"将符合选择器的所有元素切换显示/隐藏两个状态",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/toggle.html"
                    }]
                },{
                    "name":"属性相关",
                    "entries":[{
                        "name":"val()",
                        "desc":"获取/设置符合选择器的第一个元素所的 value 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/val.html"
                    },{
                        "name":"text()",
                        "decs":"获取/设置符合选择器的第一个元素所包含的文本值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/text.html"
                    },{
                        "name":"hasClass()",
                        "desc":"判断符合选择器的所有元素中是否有某个元素含有特定 class",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/hasClass.html"
                    },{
                        "name":"addClass()",
                        "desc":"给符合选择器的所有元素添加指定 class",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/addClass.html"
                    },{
                        "name":"removeClass()",
                        "desc":"给符合选择器的所有元素移除指定 class",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/removeClass.html"
                    },{
                        "name":"replaceClass()",
                        "desc":"将符合选择器的所有元素的老 class 替换为新 class",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/replaceClass.html"
                    },{
                        "name":"toggleClass()",
                        "decs":"操作符合选择器的所有元素, 如果存在值为 value 的 class, 则移除掉, 反之添加",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/toggleClass.html"
                    },{
                        "name":"removeAttr()",
                        "desc":"移除符合选择器的所有元素的指定属性",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/removeAttr.html"
                    },{
                        "name":"attr()",
                        "desc":"获取/设置符合选择器的第一个元素的属性值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/attr.html"
                    },{
                        "name":"hasAttr()",
                        "desc":"判断符合选择器的所有元素中是否有某个元素含有特定属性",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/hasAttr.html"
                    },{
                        "name":"prop()",
                        "desc":"获取/设置符合选择器的第一个元素的对应 property 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/prop.html"
                    },{
                        "name":"hasProp()",
                        "desc":"判断符合选择器的第一个元素是否含有特定 property 属性",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/hasProp.html"
                    },{
                        "name":"data()",
                        "desc":"获取/设置符合选择器的第一个元素的扩展属性(expando)",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/data.html"
                    },{
                        "name":"removeData()",
                        "desc":"将符合选择器的所有元素的对应扩展属性( expando )删除",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/removeData.html"
                    },{
                        "name":"hasData()",
                        "desc":"判断是否符合选择器的所有元素中的一个存在对应的扩展属性( expando )值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/hasData.html"
                    },{
                        "name":"nodeName()",
                        "desc":"获取符合选择器的第一个元素的小写 nodeName 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/nodeName.html"
                    }]
                },{
                    "name":"树形遍历",
                    "entries":[{
                        "name":"parent()",
                        "desc":"获取符合选择器的第一个元素的祖先元素",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/parent.html"
                    },{
                        "name":"next()",
                        "desc":"获取符合选择器的第一个元素的下一个同级节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/next.html"
                    },{
                        "name":"prev()",
                        "desc":"获取符合选择器的第一个元素的上一个同级节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/prev.html"
                    },{
                        "name":"first()",
                        "desc":"获取符合选择器的第一个元素的第一个子节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/first.html"
                    },{
                        "name":"last()",
                        "desc":"获取符合选择器的第一个元素的最后一个子节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/last.html"
                    },{
                        "name":"siblings()",
                        "desc":"获取符合选择器的第一个元素的相应同级节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/siblings.html"
                    },{
                        "name":"children()",
                        "decs":"获取符合选择器的所有非文字节点的子节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/children.html"
                    }]
                },{
                    "name":"节点操作",
                    "entries":[{
                        "name":"create()",
                        "desc":"创建 dom 节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/create.html"
                    },{
                        "name":"clone()",
                        "desc":"获取符合选择器的第一个元素的克隆元素",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/clone.html"
                    },{
                        "name":"html()",
                        "desc":"获取/设置符合选择器的第一个元素的 innerHTML",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/html.html"
                    },{
                        "name":"outerHTML()",
                        "decs":"获取符合选择器的第一个元素的 outerHTML",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/outerHTML.html"
                    },{
                        "name":"remove()",
                        "desc":"将符合选择器的所有元素从 DOM 中移除",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/remove.html"
                    },{
                        "name":"empty()",
                        "desc":"清除节点的所有子孙节点以及子孙节点上的事件和 data() 信息",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/empty.html"
                    },{
                        "name":"insertBefore()",
                        "desc":"将 newNode 插入到 refNode 之前",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/insertBefore.html"
                    },{
                        "name":"insertAfter()",
                        "decs":"将 newNode 插入到 refNode 之后",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/insertAfter.html"
                    },{
                        "name":"append()",
                        "desc":"将 node 追加到 parent 子节点最后",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/append.html"
                    },{
                        "name":"prepend()",
                        "desc":"将 node 追加到 parent 子节点最前",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/prepend.html"
                    },{
                        "name":"replaceWith()",
                        "desc":"将 node 节点（数组）替换为新的节点（数组） newNode",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/replaceWith.html"
                    },{
                        "name":"wrap()",
                        "desc":"用 wrapperNode 分别包装符合 selector 的节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/wrap.html"
                    },{
                        "name":"wrapAll()",
                        "desc":"用 wrapperNode 包装所有符合 selector 的节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/wrapAll.html"
                    },{
                        "name":"unwrap()",
                        "desc":"移除符合 selector 的节点的父节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/unwrap.html"
                    },{
                        "name":"wrapInner()",
                        "desc":"用 wrapperNode 分别包装符合 selector 的节点的子节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/dom/wrapInner.html"
                    }]
                }]
            },
            {
                "name":"event",
                "slug":"http://docs.kissyui.com/docs/html/api/core/event/index.html",
                "subcats":[{
                    "name":"Methods",
                    "entries":[{
                        "name":"on()",
                        "desc":"为符合匹配的 dom 节点的相应事件添加事件处理器",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/on.html"
                    },{
                        "name":"add()",
                        "desc":"on的别名",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/on.html"
                    },{
                        "name":"delegate()",
                        "desc":"为符合匹配的 dom 节点的相应事件添加事件处理器, 并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/delegate.html"
                    },{
                        "name":"detach()",
                        "desc":"从符合匹配的 dom 节点中移去相应事件的事件处理器",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/detach.html"
                    },{
                        "name":"remove()",
                        "desc":"detach的别名",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/detach.html"
                    },{
                        "name":"undelegate()",
                        "decs":"为符合匹配的 dom 节点的相应事件去除事件处理器",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/undelegate.html"
                    },{
                        "name":"fire()",
                        "desc":"执行符合匹配的 dom 节点的相应事件的事件处理器（并冒泡）和默认行为",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/fire.html"
                    },{
                        "name":"fireHandler()",
                        "desc":"执行符合匹配的 dom 节点的相应事件的事件处理器",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/fireHandler.html"
                    },{
                        "name":"Target",
                        "desc":"序列化一系列表单元素为可提交的字符串",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/event-target.html"
                    },{
                        "name":"Object",
                        "desc":"为所有的 ajax 请求设定默认配置",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/event-object.html"
                    }]
                },{
                    "name":"DOM节点的特殊事件",
                    "entries":[{
                        "name":"focusin",
                        "desc":"",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/focusin.html"
                    },{
                        "name":"focusout",
                        "desc":"",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/focusout.html"
                    },{
                        "name":"hashchange",
                        "desc":"浏览器的 hash 值发生变化时会触发此事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/hashchange.html"
                    },{
                        "name":"valuechange",
                        "desc":"监控 input/textarea 的值变化，当值发生变化时在绑定元素上触发该事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/valuechange.html"
                    },{
                        "name":"mouseenter",
                        "desc":"",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/mouseenter.html"
                    },{
                        "name":"mouseleave",
                        "desc":"",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/mouseleave.html"
                    },{
                        "name":"mousewheel",
                        "desc":"滚轮事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/mousewheel.html"
                    }]
                },{
                    "name":"移动设备的特殊事件",
                    "entries":[{
                        "name":"doubleTap",
                        "desc":"触屏上的双击事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/double-tap.html"
                    },{
                        "name":"singleTap",
                        "desc":"触屏上的单击事件，和双击互斥",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/single-tap.html"
                    },{
                        "name":"tap",
                        "desc":"触屏上的单击事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/tap.html"
                    },{
                        "name":"tapHold",
                        "desc":"触屏上的长按事件",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/tap-hold.html"
                    },{
                        "name":"swipe",
                        "desc":"触屏上当快速划过某个元素时触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/swipe.html"
                    },{
                        "name":"rotateStart",
                        "desc":"触屏上开始用双指旋转某个 dom 元素时出现",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/rotate-start.html"
                    },{
                        "name":"rotate",
                        "desc":"触屏上用双指旋转某个 dom 元素时出现",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/rotate.html"
                    },{
                        "name":"rotateEnd",
                        "desc":"触屏上用双指旋转某个 dom 元素结束时触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/rotate-end.html"
                    },{
                        "name":"pinchStart",
                        "desc":"触屏上开始用双指调整某个 dom 元素大小时出现",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/pinch-start.html"
                    },{
                        "name":"pinch",
                        "desc":"触屏上用双指调整某个 dom 元素大小时出现",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/pinch.html"
                    },{
                        "name":"pinchEnd",
                        "desc":"触屏上用双指调整某个 dom 元素大小后触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/pinch-end.html"
                    },{
                        "name":"shake",
                        "desc":"当用户摇动设备后触发",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/event/shake.html"
                    }]
                }]
            },
            {
                "name":"json",
                "slug":"http://docs.kissyui.com/docs/html/api/core/json/index.html",
                "entries":[{
                    "name":"parse()",
                    "desc":"将字符串解析为json对象，解析器",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/json/index.html"
                },{
                    "name":"stringify()",
                    "desc":"将json对象或者数组转化为字符串，序列化器",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/json/index.html"
                }]
            },
            {
                "name":"node",
                "slug":"http://docs.kissyui.com/docs/html/api/core/node/index.html",
                "subcats":[
//                    {
//                    "name":"静态方法",
//                    "entries":[{
//                        "name":"all()",
//                        "desc":"根据选择器字符串得到节点列表",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/all.html"
//                    },{
//                        "name":"one()",
//                        "desc":"如果参数为选择字符串, 找不到则返回 null, 其他情况下等同于 NodeList.all( args... ).item(0)",
//                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/one.html"
//                    }]
//                },
                    {
                    "name":"获取节点",
                    "entries":[{
                        "name":"all()",
                        "desc":"得到当前节点列表内符合选择器字符串的子孙节点列表",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/instance_all.html"
                    },{
                        "name":"one()",
                        "desc":"等同于 this.all( selector ) .item(0)",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/instance_one.html"
                    },{
                        "name":"getDOMNodes()",
                        "desc":"得到该 NodeList 对象包含的原生节点数组",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/getDOMNodes.html"
                    },{
                        "name":"getDOMNode()",
                        "decs":"得到该 NodeList 对象包含的第一个原生节点",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/getDOMNode.html"
                    },{
                        "name":"end()",
                        "desc":"得到上一次 NodeList.prototype.one() / NodeList.prototype.all() 操作前的 NodeList 对象",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/end.html"
                    },{
                        "name":"equals()",
                        "desc":"比较当前节点列表和 others 代表的节点列表是否完全相同",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/equals.html"
                    },{
                        "name":"add()",
                        "desc":"返回包含合并选择器字符串匹配的元素和当前节点列表元素的新 NodeList 对象",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/add.html"
                    },{
                        "name":"item()",
                        "desc":"获取包含当前节点列表 index 位置处的单个原生节点的新 NodeList 对象",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/item.html"
                    },{
                        "name":"slice()",
                        "desc":"获取包含当前节点列表选定范围内原生节点的新 NodeList 对象",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/slice.html"
                    }]
                },{
                    "name":"css",
                    "entries":[{
                        "name":"scrollTop()",
                        "desc":"获取/设置当前节点列表第一个节点的滚动条的垂直位置",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/scrollTop.html"
                    },{
                        "name":"scrollLeft()",
                        "decs":"获取/设置当前节点列表第一个节点的滚动条的横向位",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/scrollLeft.html"
                    },{
                        "name":"height()",
                        "desc":"获取/设置当前节点列表第一个节点的计算高度",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/height.html"
                    },{
                        "name":"width()",
                        "desc":"获取/设置当前节点列表第一个节点的计算宽度",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/width.html"
                    },{
                        "name":"addStyleSheet()",
                        "desc":"序列化一系列表单元素为可提交的字符串",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/addStyleSheet.html"
                    }]
                },{
                    "name":"节点操作",
                    "entries":[{
                        "name":"append()",
                        "desc":"将参数内容插入到当前节点列表中的每个元素的末尾",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/append.html"
                    },{
                        "name":"appendTo()",
                        "desc":"将当前节点列表中的每个元素插入到容器列表的每个元素的最后一个子节点后面",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/appendTo.html"
                    },{
                        "name":"prepend()",
                        "desc":"将参数内容插入到当前节点列表中的每个元素的开头",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/prepend.html"
                    },{
                        "name":"prependTo()",
                        "decs":"将当前节点列表中的每个元素插入到容器列表的每个元素的开头",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/prependTo.html"
                    },{
                        "name":"insertBefore()",
                        "desc":"将当前列表中的每个元素插入到目标元素之前",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/insertBefore.html"
                    },{
                        "name":"before()",
                        "desc":"将参数内容插入到当前列表中每个元素之前",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/before.html"
                    },{
                        "name":"after()",
                        "desc":"将参数内容插入到当前列表中每个元素之后",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/after.html"
                    },{
                        "name":"insertAfter()",
                        "desc":"将当前列表中的每个元素插入到目标元素之后",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/insertAfter.html"
                    }]
                },{
                    "name":"动画",
                    "entries":[{
                        "name":"animate()",
                        "desc":"在当前节点列表上开始动画",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/animate.html"
                    },{
                        "name":"stop()",
                        "desc":"停止当前节点列表的动画, end, clearQueue, queueName, 涵义同 anim.Anim.stop()",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/stop.html"
                    },{
                        "name":"pause()",
                        "decs":"暂停当前节点列表的动画, queueName, 涵义同 anim.Anim.pause()",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/pause.html"
                    },{
                        "name":"resume()",
                        "desc":"继续当前节点列表的动画, queueName, 涵义同 anim.Anim.resume()",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/resume.html"
                    },{
                        "name":"isRunning()",
                        "desc":"判断当前 NodeList 对象是否在动画中, NodeList 中只要有一个 Node 在动画, 就会返回 truthy 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/isRunning.html"
                    },{
                        "name":"isPaused()",
                        "desc":"判断当前 NodeList 对象被暂停动画, NodeList 中只要有一个 Node 被暂停, 就会返回 truthy 值",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/isPaused.html"
                    },{
                        "name":"show()",
                        "desc":"当前节点列表元素以动画效果显示",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/show.html"
                    },{
                        "name":"hide()",
                        "desc":"当前节点列表元素以动画效果隐藏",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/hide.html"
                    },{
                        "name":"toggle()",
                        "desc":"当前节点列表元素为显示时动画效果隐藏, 否则动画效果显示",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/toggle.html"
                    },{
                        "name":"fadeIn()",
                        "decs":"当前节点列表元素以渐隐效果显示",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/fadeIn.html"
                    },{
                        "name":"fadeOut()",
                        "desc":"当前节点列表元素以渐隐效果隐藏",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/fadeOut.html"
                    },{
                        "name":"fadeToggle()",
                        "desc":"当前节点列表元素为显示时, 切换显示或隐藏, 且动画效果为渐隐. 参数同 toggle()",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/fadeToggle.html"
                    },{
                        "name":"slideDown()",
                        "desc":"当前节点列表元素从上到下滑动显示",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/slideDown.html"
                    },{
                        "name":"slideUp()",
                        "desc":"当前节点列表元素从下到上隐藏",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/slideUp.html"
                    },{
                        "name":"slideToggle()",
                        "desc":"当前节点列表元素为显示时, 切换显示或隐藏, 且动画效果为滑动展开折叠. 参数同 toggle()",
                        "slug":"http://docs.kissyui.com/docs/html/api/core/node/slideToggle.html"
                    }]
                }]
            },
            {
                "name":"ua",
                "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html",
                "entries":[{
                    "name":"trident",
                    "desc":"trident的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"webkit",
                    "desc":"webkit的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"gecko",
                    "desc":"gecko的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"presto",
                    "decs":"presto的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"chrome",
                    "desc":"chrome的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"safari",
                    "desc":"safari的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"firefox",
                    "desc":"firefox的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"ie",
                    "desc":"ie的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"opera",
                    "desc":"opera的版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"mobile",
                    "desc":"mobile的标识符",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"core",
                    "decs":"core的标识符",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"shell",
                    "desc":"shell的标识符",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"os",
                    "desc":"操作系统标识符",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"ipad",
                    "desc":"ipad ios 版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"iphone",
                    "desc":"iphone ios 版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"ipod",
                    "desc":"ipod ios 版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"ios",
                    "desc":"ios版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                },{
                    "name":"android",
                    "decs":"android 版本号",
                    "slug":"http://docs.kissyui.com/docs/html/api/core/ua/index.html"
                }]
            }]
    };
});