Page({

    data: {
        year: new Date().getFullYear(),      // 年份
        month: new Date().getMonth() + 1,    // 月份
        day: new Date().getDate(),           // 日期

        header: true,                        // 日历标题
        lunar: true,                         // 显示农历
        more: true,                          // 显示非当前月日期                
        week_title: true,                    // 显示周标题
        next: true,                          // 显示下个月
        prev: true,                          // 显示上个月

        cs: 30,                              // 单元格大小
        title_type: 'en',                    // 周标题类型
        titleType: ['英文单字母', '英语简写', '中文简写'],
        title_index: 0,

        style: [],
        activeType: 'rounded', // 日期背景效果
        days_addon: []

    },

    onLoad: function () {
        const today = new Date();
        const last_date = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const days_count = last_date.getDate();
        let array = [];
        for (let i = 0; i < days_count; i++) {
            if (i % 5 == 0) {
                array.push('测试');
            } else {
                array.push('');
            }
        }
        this.setData({
            days_addon: array
        });
    },

    addYear: function () {
        this.setData({
            year: this.data.year + 1
        });
    },

    subYear: function () {
        this.setData({
            year: this.data.year - 1
        });
    },

    addMonth: function () {
        if (this.data.month == 12) {
            this.setData({
                month: 1,
                year: this.data.year + 1
            });
        }
        else {
            this.setData({
                month: this.data.month + 1
            });
        }
    },

    subMonth: function () {
        if (this.data.month == 1) {
            this.setData({
                month: 12,
                year: this.data.year - 1
            });
        } else {
            this.setData({
                month: this.data.month - 1
            });
        }
    },

    switchMore: function () {
        this.setData({
            more: !this.data.more
        });
    },

    switchHeader: function () {
        this.setData({
            header: !this.data.header
        });
    },

    switchLunar: function () {
        if (this.data.lunar) {
            this.setData({
                lunar: !this.data.lunar,
                cs: 30
            });
        } else {
            this.setData({
                lunar: !this.data.lunar,
                cs: 50
            });
        }
    },

    switchNext: function () {
        this.setData({
            next: !this.data.next
        });
    },

    switchPrev: function () {
        this.setData({
            prev: !this.data.prev
        });
    },


    switchStyle: function () {
        if (this.data.style.length > 0) {
            this.setData({
                style: []
            });
        } else {
            this.setData({
                style: [
                    { month: 'current', day: 3, color: 'white', background: '#58cc69' },
                    { month: 'current', day: 12, color: 'white', background: '#728eff' },
                    { month: 'current', day: 13, color: 'white', background: '#728eff' },
                    { month: 'current', day: 14, color: 'white', background: '#728eff' },
                    { month: 'current', day: 15, color: 'white', background: '#728eff' },
                    { month: 'current', day: 16, color: 'white', background: '#728eff' },
                    { month: 'current', day: 26, color: 'white', background: '#ff72a6' },
                    { month: 'current', day: 27, color: 'white', background: '#ff72a6' },
                    { month: 'current', day: 28, color: 'white', background: '#ff72a6' }]
            });
        }
    },

    changeTitle: function (event) {
        const index = event.detail.value;
        switch (index) {
            case '0':
                this.setData({
                    title_index: index,
                    title_type: 'en'
                });
                break;
            case '1':
                this.setData({
                    title_index: index,
                    title_type: 'full-en'
                });
                break;
            case '2':
                this.setData({
                    title_index: index,
                    title_type: 'cn'
                });
                break;
            case '3':
                this.setData({
                    title_index: index,
                    title_type: 'custom'
                });
                break;
        }

    },

    switchTitle: function () {
        this.setData({
            week_title: !this.data.week_title
        });
    },

    changeCellSize: function (event) {
        this.setData({
            cs: event.detail.value
        });
    },

    changeActiveType: function (event) {
        this.setData({
            activeType: event.detail.value
        });
    },

    /**
     * 点击下个月
     */
    nextMonth: function (event) {
        const currentYear = event.detail.currentYear;
        const currentMonth = event.detail.currentMonth;
        const prevMonth = event.detail.prevMonth;
        const prevYear = event.detail.prevYear;
        wx.showModal({
            title: '点击下个月事件',
            content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月\n之前年份：' + prevYear + '年\n之前月份：' + prevMonth + '月'
        });
    },

    /**
     * 点击上个月
     */
    prevMonth: function (event) {
        console.log(event);
        const currentYear = event.detail.currentYear;
        const currentMonth = event.detail.currentMonth;
        const prevMonth = event.detail.prevMonth;
        const prevYear = event.detail.prevYear;
        wx.showModal({
            title: '点击上个月事件',
            content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月\n之前年份：' + prevYear + '年\n之前月份：' + prevMonth + '月'
        });
    },

    /**
     * 日期变更事件
     */
    dateChange: function (event) {
        const currentYear = event.detail.currentYear;
        const currentMonth = event.detail.currentMonth;
        const prevMonth = event.detail.prevMonth;
        const prevYear = event.detail.prevYear;
        wx.showModal({
            title: '日期选择器事件',
            content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月\n之前年份：' + prevYear + '年\n之前月份：' + prevMonth + '月'
        });
    },

    dayClick: function (event) {
        const year = event.detail.year;
        const month = event.detail.month;
        const day = event.detail.day;
        const color = event.detail.color;
        const lunarMonth = event.detail.lunarMonth;
        const lunarDay = event.detail.lunarDay;
        const background = event.detail.background;
        wx.showModal({
            title: '日期点击事件',
            content: '点击的日期为：' + year + '年' + month + '月' + day + '日\n农历：' + lunarMonth + lunarDay
        });
    }

})