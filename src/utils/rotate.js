/*
 * @Author: fzb
 * @Date: 2020-11-17 11:11:39
 * @LastEditors: fzb
 * @LastEditTime: 2020-11-30 17:18:33
 * @Description: 点击旋转插件
 */
export class Carousel {
    constructor(containerwidth, containerHeight) {
        this.settings =
            {
                imgs: [],
                imgWidth: 50, // 图片宽
                imgHeight: 50, // 图片高
                time: 0,
                rate: 0.1, // 转动速度
                containerId: "container", // 包含图片容器id
                containerWidth: containerwidth, // 包含图片容器宽
                containerHeight: containerHeight, // 包含图片容器高
                targetIndex: 0
            };
        this.setplay = null;
    }
    each(fn) {
        for (var index = 0; index < this.settings.imgs.length; index++) { fn.call(this.settings.imgs[index], index); }
    }
    init() {
        const _this = this;
        this.settings.imgs = document.querySelectorAll(".img");
        this.each(function(i) {
            this.style.position = "absolute";
        });
        const that = _this.settings;
        that.count = _this.settings.imgs.length; // 显示的个数
        that.time += that.rate * 40 / 1000;
        _this.each(function(index) { // 算法BaiDu所得
            // 初始化位置
            this.style.left = (Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * (that.containerWidth - that.imgWidth) / 2 + "px";
            this.style.top = (Math.sin(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * (that.containerHeight - that.imgHeight) / 2 + "px";
            // 控制远近大小
            // this.style.width = (Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * that.imgWidth / 2 + that.imgWidth / 2 + "px";
            // this.style.height = (Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * that.imgHeight / 2 + that.imgHeight / 2 + "px";

            this.style.zIndex = Math.floor((Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * 10);
        });
    }
    play() {
        this.moveStep();
    }
    moveStep() {
        const _this = this;
        this.setplay = requestAnimationFrame((x) => {
            const that = _this.settings;
            that.count = _this.settings.imgs.length; // 显示的个数
            that.time += that.rate * 40 / 1000;
            _this.each(function(index) { // 算法BaiDu所得
                // 控制旋转
                this.style.left = (Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * (that.containerWidth - that.imgWidth) / 2 + "px";
                this.style.top = (Math.sin(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * (that.containerHeight - that.imgHeight) / 2 + "px";
                // 控制远近大小
                // this.style.width = (Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * that.imgWidth / 2 + that.imgWidth / 2 + "px";
                // this.style.height = (Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * that.imgHeight / 2 + that.imgHeight / 2 + "px";

                this.style.zIndex = Math.floor((Math.cos(2 * Math.PI * that.time + 2 * Math.PI / that.count * index) + 1) * 10);
            });
            if (parseFloat(_this.settings.imgs[_this.settings.targetIndex].style.left.slice(0, -2)) < 1 && parseFloat(_this.settings.imgs[_this.settings.targetIndex].style.top.slice(0, -2)) < (_this.settings.containerHeight / 2 - _this.settings.imgHeight / 2 + 0.5)) {
                return;
            } else {
                this.moveStep();
            }
        });
    }
    changeTarget(index) {
        this.settings.targetIndex = index;
        this.moveStep();
    }
}