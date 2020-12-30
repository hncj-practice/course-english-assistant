import md5 from './md5.min.js';

const appid = '20201122000623213';
const key = 'BKm815wZSeGz5cIT9aAw';

/**
 * 翻译
 * @param {string} q 
 * @param {int} type 0：英译汉，1：汉译英
 */
const trans = (q, type) => {
  let from;
  let to;
  if (type === 0) {
    from = 'en';
    to = 'zh';
  } else {
    from = 'zh';
    to = 'en';
  }

  // 随机数
  let salt = Date.now();
  let sign = md5(`${appid}${q}${salt}${key}`);

  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res) {
        if (res.data && res.data.trans_result) {
          resolve(res.data.trans_result[0].dst);
        } else {
          reject('翻译失败');
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            duration: 3000
          });
        }
      },
      fail() {
        reject('翻译失败');
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        });
      }
    });
  });
}

module.exports.trans = trans;