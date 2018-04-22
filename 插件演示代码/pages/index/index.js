// pages/index.js
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

Page({

    /**
     * 页面的初始数据
     */
    data: {
        year: new Date().getFullYear(),      // 年份
        month: new Date().getMonth() + 1,    // 月份
        day: new Date().getDate(),
        str: MONTHS[new Date().getMonth()],  // 月份字符串

        demo1_days_style: [],
        demo2_days_style: [],
        demo4_days_style: [],
        demo5_days_style: [],
        demo6_days_style: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const days_count = new Date(this.data.year, this.data.month, 0).getDate();
        let demo1_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            if (parseInt(Math.random() * 100) > 50) {
                demo1_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#8497ee'
                });
            } else {
                demo1_days_style.push({
                    month: 'current', day: i, color: 'white'
                });
            }
        }
        this.setData({
            demo1_days_style
        });

        let demo2_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            if (i == 12) {
                demo2_days_style.push({
                    month: 'current', day: i, color: '#314580', background: '#ffed09'
                });
            } else if (i == 16) {
                demo2_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#30558c'
                });
            } else if (i == 21) {
                demo2_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#3c5281'
                });
            } else {
                demo2_days_style.push({
                    month: 'current', day: i, color: 'white'
                });
            }
        }
        this.setData({
            demo2_days_style
        });

        let demo4_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            if (i == 3) {
                demo4_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#46c4f3'
                });
            } else if (i == 7) {
                demo4_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#ffb72b'
                });
            } else if (i == 12 || i == 23 || i == 24) {
                demo4_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#865fc1'
                });
            } else if (i == 21 || i == 22) {
                demo4_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#eb4986'
                });
            } else {
                demo4_days_style.push({
                    month: 'current', day: i, color: 'white'
                });
            }
        }
        this.setData({
            demo4_days_style
        });

        let demo5_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            const date = new Date(this.data.year, this.data.month - 1, i);
            if (date.getDay() == 0) {
                demo5_days_style.push({
                    month: 'current', day: i, color: '#f488cd'
                });
            } else {
                demo5_days_style.push({
                    month: 'current', day: i, color: '#a18ada'
                });
            }
        }
        demo5_days_style.push({ month: 'current', day: 12, color: 'white', background: '#b49eeb' });
        demo5_days_style.push({ month: 'current', day: 17, color: 'white', background: '#f5a8f0' });
        demo5_days_style.push({ month: 'current', day: 20, color: 'white', background: '#aad4f5' });
        demo5_days_style.push({ month: 'current', day: 25, color: 'white', background: '#84e7d0' });

        this.setData({
            demo5_days_style
        });

        let demo6_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            const date = new Date(this.data.year, this.data.month - 1, i);
            if (i == 12) {
                demo6_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#b49eeb'
                });
            } else if (i == 17) {
                demo6_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#f5a8f0'
                });
            } else if (i == 21) {
                demo6_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#aad4f5'
                });
            } else if (i == 25) {
                demo6_days_style.push({
                    month: 'current', day: i, color: 'white', background: '#84e7d0'
                });
            } else {
                demo6_days_style.push({
                    month: 'current', day: i, color: 'black'
                });
            }
        }

        this.setData({
            demo6_days_style
        });
    },
})