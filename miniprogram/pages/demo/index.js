// pages/demo/index.js
const plugin = requirePlugin("calendar");
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
        demo2_days_style: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const days_count = new Date(this.data.year, this.data.month, 0).getDate();
        let demo1_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            if (i <= 9 && i != 7) {
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
    },    
})