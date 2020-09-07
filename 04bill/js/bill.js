window.onload=function (){
    // JavaScript 使用 id 来寻找 canvas 元素：
    let canvas=document.getElementById('myCanvas')
    // 创建 context 对象：
    let ctx=canvas.getContext('2d')
    drawList(ctx)
    drawIndex(ctx)
    drawNumber(ctx)
    drawPay(ctx)
    drawTotal(ctx)
}

// 定义绘制表格的函数
// ctx画笔
function drawList(ctx){
    ctx.strokeStyle='black'
    ctx.beginPath()
    for (let i=0;i<5;i++){
        ctx.moveTo((300/4)*i,0)
        ctx.lineTo((300/4)*i,480)
    }
    for (let j=0;j<14;j++){
        ctx.moveTo(0,(480/13)*j)
        ctx.lineTo(300,(480/13)*j)
    }
    ctx.moveTo(0,0)
    ctx.lineTo(300/4,480/13)
    // 绘制
    ctx.stroke()
}

// 定义表格中的数据
var book_income={
    "一月":"6500",
    "二月":"7500",
    "三月":"4500",
    "四月":"2100",
    "五月":"3500",
    "六月":"6600",
    "七月":"8800",
    "八月":"7700",
    "九月":"9900",
    "十月":"2000",
    "十一月":"500",
    "十二月":"13500",
}
var book_pay={
    "一月":"4500",
    "二月":"8500",
    "三月":"9500",
    "四月":"100",
    "五月":"500",
    "六月":"600",
    "七月":"800",
    "八月":"700",
    "九月":"900",
    "十月":"3200",
    "十一月":"2500",
    "十二月":"1500",
}

// 绘制表格数据
function drawIndex(ctx){
    ctx.shadowOffsetX=1
    ctx.shadowOffsetY=1
    ctx.shadowBlur=2
    ctx.shadowColor='rgba(255,0,0,0.3)'
    ctx.font='14px serif'
    ctx.fillText('月',10,30)
    ctx.fillText('计',45,20)
    ctx.fillText('收入',99,24)
    ctx.fillText('支出',165,24)
    ctx.fillText('总计',240,24)
    let i=1
    for (let val in book_income){
        ctx.fillText(val,15,24+480/13*i++)
    }
}
// 绘制数字
function drawNumber(ctx){
    let i=1
    for (let val in book_income){
        ctx.fillText(book_income[val],100,24+480/13*i++)
    }
}
function drawPay(ctx){
    let i=1
    for (let val in book_pay){
        ctx.fillText(book_pay[val],165,24+480/13*i++)
    }
}
function drawTotal(ctx){
    let i=1
    let icnames=[]
    let pays=[]
    for (let val in book_income){
         icnames.push(book_income[val])
    }
    for (let val in book_pay){
        pays.push(book_pay[val])
    }
    console.log(icnames)
    console.log(pays)
    for (let j=0;j<icnames.length;j++){
        let num=icnames[j]-pays[j]
        console.log(num)
        if (num>0){
            ctx.fillStyle='green'
            num='(剩余)'+num
        } else {
            ctx.fillStyle='red'
            num='(透支)'+num
        }
        console.log(num)
        ctx.fillText(num,222,24+480/13*i++)
    }
}
