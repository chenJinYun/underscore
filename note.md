### underscore框架是替代了原生的map,foreach等对集合操作的封装
    1.框架返回的是_,通过_.method()调用实现的具体的方法
    
### 集合函数
    a._.each(list,interator,[context])
        如果有原生的forEach，会用原生的代替
        可以循环数组和对象：
        数组:interator(ele,index,list)
        对象：interator(value,key list)
    
    b._.map(list,interator,[context])
        如果有原生的forEach，会用原生的代替
        返回一个新的数组
        可以循环数组和对象
        数组:interator(ele,index,list)
        对象：interator(value,key list)

    c._.reduce(list,interator,memo,[context])
        将一个 list 里的所有值归结到一个单独的数值. Memo 是归结的初始值,
        返回一个归结值
        可以循环数组和对象
        interator(memo,val,index,list)
    
    d._.reduceRight(list,iterator,memo,[context])
        reduce右结合版本
        返回一个新数组

    e._.find(list,interator,[context])
        返回符合条件的第一个数据，不会遍历整个数组

    f._.filter(list,iterator,[context])
        每一项进行查找，返回一个符合条件的集合

      _.reject(list,interator,[context])与filter相反
        返回不符合条件的集合

    g._.where(list,properties)
        properties:键值对
        遍历数组的每一个值，返回包含properties的所有key-value对象的数组

    h._.findWhere(list,properties)'
        properties:键值对
        遍历数组，并且返回第一个包含properties中key-value的对象
        没有找到的返回undefined

    k._.every(list,[iterator],[context]) iterator可选
        返回Boolean,判断数组中每一个值是否都符合条件

    l._.some(list,[iterator],[context]) iterator可选
        返回Boolean值，判断数组中是否有符合条件的值
    
    _.contains(list,value)
        判断某个值是否存在数组中

    _.max(list,[iterator],[context])  iterator可选
        返回数组中的最大值，可以传入interator自定义规则

    _.min(list,[interator],[context])
        返回数组中的最小值，可以传入interator自定义规则

    _.object(list,[values])
        把数组转换成对象

    _.indexOf(arr,val,[isSorted])
        查找元素在数组中的位置，不存在返回-1

    _.lastIndexOf(arr,val,[fromIndex])
        最后一次出现的索引位置
        不存在返回-1

### 对象函数
    _.keys(object)
        获取对象的全部属性名

    _.values(object)
        获取对象的全部属性值

    _.pairs(object)
        把对象转换为一个[key,vale]形式的数组

    _.isElement(object)
        判断对象是否是DOM元素

    _.isArray(object)
        判断对象是否是数组

    