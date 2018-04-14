// pages/help/index.js
Page({

    data: {
        width: 0,
        height: 0
    },

    onLoad: function (options) {
        const res = wx.getSystemInfoSync();
        const width = res.windowWidth - 30;
        const height = width / 552 * 654;
        this.setData({
            width: width,
            height: height
        });
    }
})