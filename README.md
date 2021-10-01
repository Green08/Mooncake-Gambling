# Mooncake-Gambling
A custom about the traditional Chinese festival, Mid-Autumn Festival, prevails in the southern Fujian region of China
| The Link Your Class                        | https://bbs.csdn.net/forums/MUEE308FZ |
| :----------------------------------------- | :------------------------------------ |
| The Link of Requirement of This Assignment | https://bbs.csdn.net/topics/600914861 |
| The Aim of This Assignment                 | Bobbing software prototype            |
| MU STU ID and FZU STU ID                   | 19104308&831901320/19104979&831901313 |

## 1.PSP FORM

| Personal Software Process Stage | Estimated time (mins) | real time(mins) |
| :------------------------------ | :-------------------- | :-------------- |
| Planning                        | -                     | -               |
| Estimate                        | 24                    | 30              |
| Development                     | -                     | -               |
| Analysis                        | 30                    | 60              |
| Design Spec                     | 0                     | 30              |
| Design Review                   | 0                     | 42              |
| Coding Standard                 | 0                     | 0               |
| Design                          | 240                   | 480             |
| Coding                          | 0                     | 0               |
| Code Review                     | 0                     | 0               |
| Test                            | 0                     | 30              |
| Reporting                       | -                     | -               |
| Test Report                     | 30                    | 60              |
| Size Measurement                | 0                     | 0               |
| Postmortem&Process Improvement  | 30                    | 60              |

## 2.Related Web Sites

[App模型演示链接]: https://app.mockplus.cn/run/design/MJG4itWvxt2UV/klQAyxovD452?dt=iPhone&amp;linkID=evPMuHr3dySY4&amp;ps=1

## 3.Demand analysis

### NABCD Model

#### 1, N (Need)

我的创意解决了用户的什么需求?这个需求可以是明确的、公开的，也可能是说不清道不明的。我们首先进行了简单的用户调研，通过对少量用户的深入调研和分析，来保障产品设计是可靠的，验证产品设计是相对安全的，使自己做的东西不会偏离目标用户。

我们获得的用户需求如下：

- 节日期间，用户希望通过博饼游戏找到节日的气氛。
- 日常生活中，用户希望通过博饼游戏来消磨时间。
- 用户希望在没有道具的情况下也能获得博饼体验。
- 在真实的博饼游戏中，用户希望通过设置奖品的方式给游戏带来更多乐趣。
- 因为疫情，有的用户在线上，有的用户在线下，但他们想一起玩博饼游戏。

我们可以看到，用户最需要的是一款能够同时满足线上和线下的移动端博饼游戏，这款博饼游戏可以代替博饼工具骰子并且能设置奖品，简单易懂有趣味。

#### 2, A (Approach)

为了满足用户的这些需求，我们设计的软件提供了以下的服务：

![](https://img-community.csdnimg.cn/images/aea11a087af1418bb713662c9cb6e655.png)



##### 启动页

- 用户打开程序，程序自动获取用户微信账号和头像形成 token 储存进服务器和设置中。点击“进入游戏”将进入程序功能界面。
- 设计将博饼的碗设计成原型，和中秋圆月相对应，寓意中秋团圆幸福美满。同时六个骰子置于其上，告诉用户程序的功能是用来是博饼游戏。设计采用中国风设计，界面简洁美观大气。

![](https://img-community.csdnimg.cn/images/e3ed8eeeaba748819a2f5bd12806924a.jpg)

##### 功能界面

- 用户点击“进入游戏”按钮后，将进入程序“功能界面”，功能界面有六个模块，分别是自己可以玩的单机模式，多人娱乐的多人模式，帮助，设置和个人中心。考虑到房间都有房主，多人模式还分为创建房间和加入房间。

![](https://img-community.csdnimg.cn/images/241f0828a980405aae01ea8256c3eaca.jpg)

##### 单机模式

- 点击“单机模式”后，将进入“开始游戏”界面，界面有摇一摇选项和每次博饼的记录，点击“摇一摇”后，将有一碗罩着，点击停止将出游戏结果。每次的游戏都将记录。

![](https://img-community.csdnimg.cn/images/d044ee62055848a3a04f8736fffd3da1.jpg)

##### 创建房间

- 点击“创建房间”后，将进入“房间设置”中，选择“创建房间”的用户将成为群主，需要设置房间名称，游戏人数，奖品设置，设置完成后点击创建，程序将自动生成游戏二维码，房主可以点击“分享”，分享到QQ、微信的好友列表中邀请好友或者直接进入游戏，房主拥有结束游戏的权力。（奖品设置的奖品及数量需合理，游戏将统计每个用户获得的奖品，奖品按先后顺序先到先得，若一级奖品分发完毕将自动获得下一级奖品，奖品全部分发完毕或者房主结束游戏将自动结束游戏）

![](https://img-community.csdnimg.cn/images/f78bb54710d64978af06fbef08154e7e.jpg)

![](https://img-community.csdnimg.cn/images/2ac9b70dde284d77a262bf86f174e528.jpg)

##### 加入房间

- 用户同时可以点击“加入房间”进入，输入相应的房间号即可进入相对应的房间。

![](https://img-community.csdnimg.cn/images/c4225491aa96401e8204a0220bcfca28.png)

##### 联机模式

- 用户创建房间或加入房间后，将进入联机模式，由房主发起游戏，开始进行顺时针轮流游戏（由用户进入房间先后顺序决定位置），由顺序为1的用户界面出现“摇一摇”，用户点击摇一摇后进行游戏，点击“点击停止”后结束游戏，最后得出结果，每轮结果将放在博饼记录中，最后奖品全部分发完成或者房主点击“结束游戏”后游戏结束，进入结算界面，每个用户有自己的战绩，排行榜显示最幸运的用户排名。
- **其中，我们创造性的加入了语音功能，方便线上的用户可以实时语音，方便线上用户实时与线下用户沟通，增加线上用户游戏体验感。**

![](https://img-community.csdnimg.cn/images/568bbddacf4943c8988444d5521f75cd.jpg)

##### 个人中心

- 个人中心将显示用户的微信 UID 和头像，以及用户累计（单人模式和联机模式）的博饼情况。

![](https://img-community.csdnimg.cn/images/cc2b89560f7445a4abd43ed3b5e8fa99.jpg)

##### 帮助

- 帮助界面显示的是博饼游戏规则和关于，关于中将会有个人《信息保护指引》，《用户服务协议》和《隐私政策》。

![](https://img-community.csdnimg.cn/images/32c760ea8e5e48a0816a3ee6fcaf9d3c.jpg)

##### 设置

- 玩家可以通过设置页面设置程序的音量和音效，还有更多的设置功能还在思考中。

![](https://img-community.csdnimg.cn/images/78bef013fdc241e7bb4dc8372b27603c.jpg)

其他功能



#### 3, B(Benefit)

- 本程序计划做成微信小程序，易于用户在社交网络上分享邀请。

- 本程序突破了传统博饼游戏在时间和空间上的局限性，无论是在节日期间还是日常生活，无论是在线上还是线下，用户随时随地都能体验到博饼游戏的快感。

- 让博饼这个游戏不再成为中秋节特定的节目，让大家可以随时随地进行博饼，成为娱乐大家平时生活的一个“小游戏”。

#### 4，C(Competitors)

##### 竞品调研报告

###### 调研目标

- 这次调研，我们主选和我们同个平台的微信小程序，通过各种关键词找到三款博饼小程序，我们同时在 App Store 、Google Play 、Tap Tap  、华为手机助手等手机应用平台进行相关博饼软件的搜索下载及体验，得出了博饼相关的竞品报告。


###### 调研产品

微信小程序：一起博饼、闽南中秋博饼、中秋佳节多人博饼助手、博状元、博饼小助手、中秋博饼

App Store : 中秋博饼3D、骰子3D、骰子-酒吧、八闽状元郎、骰子摇、骰子骰子

Google Play : Dice

Tap Tap ： 中秋博饼

华为手机助手 ：无

###### 竞品数据调研

- 在所有不同平台不同博饼 App 中，使用最多，好评最多的是真有趣游戏厂商开发的中秋博饼 App ，该App拥有Tap Tap平台安卓版本和App Store 的中秋博 3D。在微信小程序的三个博饼程序中，推荐第一的是一起博饼小程序。在App Store 中，下载好评最高的还是真有趣游戏厂商开发的中秋博饼 App。


###### 竞品功能调研（包括核心竞争力、主要功能和发展趋势）

- 我们首先调研好评和使用最高的中秋博饼App,中秋博饼App没有非常简单易懂，没有任何需要点击的按钮，但软件使用非常逼真的3D模型和物理碰撞，用户进入软件后只需要点击一下屏幕，骰子被抓起，放手，骰子转动，得出答案，回合结束。软件同时可以选择投掷骰子的轻重，同时，能根据用户在屏幕上的手势来进行真实的物理碰撞，若手势过大骰子摇动时还可能离开碗，叫做抓猴。软件的核心竞争力就是真实3D效果和真实物理碰撞，能给用户极高的游戏真实体验，同时能代替博饼工具使用，但软件无法联网，不能进行线上游戏。

![](https://img-community.csdnimg.cn/images/bc68dd8397e74e66b7ae4c233de9ce15.png)

- 在微信小程序中，我们一共调研了6款小程序，其中推荐量第一的是4号小程序。4号小程序有单机模式和多人模式，但多人模式是在组队大厅进行随机的多人匹配，且单人博饼有次数限制，1是最普通的单人博饼，2除了多人博饼还有其他功能，3是套着博饼壳子的广告小程序，6是最差的，还没有UI界面，可能是某个同学还没做完的。

![](https://img-community.csdnimg.cn/images/0da09724822e41d2aba510df5286ebce.jpg)

- 在App Store 和 Google Play 中，我们注意到外网平台除了唯一做博饼的中秋博饼只有中秋博饼App，其他的都是做骰子的软件，所有的软件都是做3D效果，力求更好的真实体验。


![](https://img-community.csdnimg.cn/images/130d9be3912748509e7c1669ebdfbe8a.jpg)

###### 竞品发展趋势

- 我们注意到，所有的软件主打的是单人博饼，多人博饼只有一款微信小程序有做到，可以理解博饼这个很难获得软件利益的程序，受众少，打开多人模式不仅占用服务器资源，还容易受到DDoS攻击。但我们还是要做多人模式的服务器，虽然是用爱发电，但还是有爱的。

- 在外网的产品上更多的是希望做出个可以替代显示骰子的App,故外网的App普遍都是3D模式的而不是拘泥于博饼这一游戏，这是我们值得学习的。

#### 5， D(Delivery)

- 本产品的推广具有一定的特殊性，由于博饼活动主要集中在中秋节期间举行，因此我们需要在中秋节前筹划推广方案，并在此期间集中推广。

- 在线上平台，本产品依托微信平台，因此直接在微信上推广是最直接最精准的方式。通过形成的分享链接，可以很容易地在各大群内转发。并且我们需要在宣传期间推出抽奖，红包等形式的活动来进一步地增强传播力度。

- 在线下，我们可以通过在校园内悬挂宣传海报，招募校园大使进行地推等方式在校内进行宣传，进而通过校内同学的分享再扩散到更大的范围。

## 4.Picture of Cooperation

![](https://img-community.csdnimg.cn/images/ae42627928514f15b77e3f3af5497674.jpg)

## 5.Summary

- 郑宇晗总结：这次作业的完成时间应该比其他同学要长得多，因为我们的小程序所采用的图片都是是队友自己画的，因此花了很多时间，而我在整个环节是做原型图和写博客。这是我第一次使用UI设计软件最开始俩天看完了全部的Axure课程，看完后收益匪浅，并且开始设计原型图。通过这次作业，我感受到了美工有多么艰辛，需要不断思考、调整设计，甚至经常出现画好后发现效果不行直接回炉重造的情况。
- 陈震烁总结：通过本次软件工程的结对作业，我体会到了合作在开发中的重要性，只有两个人能相互配合，才能以最快的速度和最高的质量完成项目。同时，在我主要负责的UI部分，我从中体会到了一个软件界面的细节的繁杂，每一个按钮的位置、大小都要经过深思熟虑，还要考虑前端的可实现性。我们需要从用户的角度出发，才能探索出直观的界面设计和友好的交互方式。

