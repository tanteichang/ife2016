# [任务三：三栏式布局](http://ife.baidu.com/2016/task/detail?taskId=3)

## 任务目标

- 掌握HTML/CSS布局的概念
- 掌握盒模型的概念
- 掌握position与float的概念以及在布局时的用法

## tips
- 三栏布局-圣杯布局
```HTML
<h3>使用margin负值法进行布局</h3>  
<div id = "wrap">  
  <div id = "center"></div>  
</div>  
<div id = "left_margin"></div>  
<div id = "right_margin"></div>
```
```CSS
#wrap{ width: 100%;height: 100px; background-color: #fff;float: left;}  
#wrap #center{ margin:0 210px; height: 100px;background-color: #ffe6b8; }  
#left_margin,#right_margin{ float: left;width: 200px;height: 100px;background-color: darkorange }  
#left_margin {margin-left: -100%; background-color: lightpink}  
#right_margin{margin-left: -200px;}  
```
- 三栏布局-使用自身浮动法
```HTML
<h3>使用自身浮动法定位</h3>  
<div id = "left_self">我是左边</div>  
<div id = "right_self">我是右边</div>  
<div id = "center_self">我是中间</div>
```
```CSS
#left_self,#right_self{ width: 200px;height: 200px; background-color: #ffe6b8 }  
#left_self {float: left;}  
#right_self{float: right;}  
#center_self{margin: 0 210px;height: 200px; background-color: #a0b3d6}  
```

- 三栏布局-绝对定位法
```HTML
<h3>实现三列宽度自适应布局</h3>  
<div id = "left">我是左边</div>  
<div id = "right">我是右边</div>  
<div id = "center">我是中间</div>  
```
```CSS
body{ margin: 0px;width: 100%; }  
h3{height: 100px;margin:20px 0 0;}  
#left,#right{width: 200px;height: 200px; background-color: #ffe6b8;position: absolute;top:120px;}  
#left{left:0px;}  
#right{right: 0px;}  
#center{margin:2px 210px ;background-color: #eee;height: 200px; }   
```
