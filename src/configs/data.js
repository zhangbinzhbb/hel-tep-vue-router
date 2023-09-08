
/**
 * 多个模块，每个模块对应信息name、版本号及组件合集信息
 */
export const res = {
  data: [
    {
      name: 'moduleA', // 应用名称
      url: '', // 自定义文件服务地址
      data: [
        {
          versions: 'v1.0.0', // 版本号，
          describe: 'xxx', // 发布版本描述信息
          submitter: 'zhangbb', // 版本提交者
          submitTime: '2023-09-06 11:00:00', // 提交时间
          branchBuild: 'master', // 构建分支
          isOnlineVersion: false, // 是否为线上版本, 默认最新版本
          isGrayscaleVersion: false, // 是否为灰度版本
          componentList: [ // 组件集合
            {
              'type': 'dialog', // 对话框组件
              'icon': 'icon-Dialog',
              'options': {
                'defaultValue': {},
                'visible': false,
                'customClass': '',
                'title': 'Dialog Title',
                'width': '',
                'top': '15vh',
                'center': false,
                'cancelText': 'Cancel',
                'showClose': true,
                'okText': 'Confirm',
                'showCancel': true,
                'showOk': true
              }
            }
          ]
        },
        {
          versions: 'v2.0.0',
          describe: 'xxx',
          submitter: 'zhangbb',
          submitTime: '2023-09-06 11:00:00',
          branchBuild: 'master',
          isOnlineVersion: true,
          isGrayscaleVersion: false,
          componentList: []
        }
      ]
    }
  ]
}

import { preFetchLib } from 'hel-micro'

const processList = []
const data = [
  {
    name: 'moduleA', // 应用名称
    url: '', // 自定义文件服务地址
    data: [
      {
        versions: 'v1.0.0', // 版本号，
        describe: 'xxx', // 发布版本描述信息
        submitter: 'zhangbb', // 版本提交者
        submitTime: '2023-09-06 11:00:00', // 提交时间
        branchBuild: 'master', // 构建分支
        isOnlineVersion: false, // 是否为线上版本, 默认最新版本
        isGrayscaleVersion: false // 是否为灰度版本

      },
      {
        versions: 'v2.0.0',
        describe: 'xxx',
        submitter: 'zhangbb',
        submitTime: '2023-09-06 11:00:00',
        branchBuild: 'master',
        isOnlineVersion: true,
        isGrayscaleVersion: false
      }
    ]
  }
]

// const wake = (url, name) => {
//   return new Promise((resolve, reject) => {
//     preFetchLib(name, {
//       async getSubAppAndItsVersionFn() {
//         // 自定义元数据获取请求
//         const res = await fetch(url)
//         const meta = await res.json()
//         return meta
//       }
//     })
//   })
// }

// for (let index = 0; index < data.length; index++) {
//   processList.push(wake(data[index].url, data[index].name))
// }
