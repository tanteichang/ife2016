# [任务四：定位和居中问题](http://ife.baidu.com/2016/task/detail?taskId=4)

## 任务目的

- 实践HTML/CSS布局方式
- 深入了解position等CSS属性

## tip
- 水平垂直居中 元素有固定宽高
```CSS
.partent {
  position: relative;
}
.child {
  width: 200px;
  height: 100px;

  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -100px;
}
```
- 水平垂直居中 元素没有固定宽高
```CSS
.partent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);;
}
```
- 水平垂直居中 flex 大法好!
```CSS
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
-
[Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/#center-horizontally)
