
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  task:[
    {
      summary:"写报告",
      color:"yellow"
    },
    {
      summary:"复习高数",
      color:"red"
    },
    {
      summary:"学习小程序",
      color:"green"  
    }
  ],
  EnglishWord:[
    {
      word:"execute",
      meaning:"执行"
    },
    {
      word:"insert",
      meaning:"插入"
    },
    {
      word:"related",
      meaning:"相关的"
    }
  ],
  chickenSoup:[
    {
      content:"有目标的人生才有方向，有规划的人生才更精彩。"
    },
    {
      content:"当走过了曾经隐忍的年月再回首时，我才发现，曾经觉得难以启齿的往事，都不过是沧海一粟，生命给予我的，不是那些艰难，而是成长，是学会举重若轻，是将曾经无法释怀的那些过往，统统放下。"
    },
    {
      content:"所谓的人间烟火，就是这样—个可以时而温暖时而冷漠的词语，所谓的人间，就是这样时而光明时而黑暗的时刻。"
    }
  ]
  },
  
  toTask:function(){
    wx.navigateTo({
      url: '../task/task',
    })
  },
  toSchedule:function(){
    wx.navigateTo({
      url: '../schedule/schedule',
    })
  },
  toTimeTable:function(){
    wx.navigateTo({
      url: '../plan/plan',
    })
  },
  toEnWordDetail:function(){
    wx.navigateTo({
      url: '../EnWord/EnWord',
    })
  },
  toChickenSoupDetail:function(e){
    var key = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../chickenSoup/chickenSoup?chickenSoupData='+this.data.chickenSoup[key].content,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

