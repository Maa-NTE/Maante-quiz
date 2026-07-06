const SOURCES = {
  introduction: 'https://maante.org/zh_cn/introduction.html',
  realtime: 'https://maante.org/zh_cn/introduction/RealTime.html',
  navi: 'https://maante.org/zh_cn/introduction/NaviWebSocket.html',
  claimRewards: 'https://maante.org/zh_cn/introduction/ClaimRewards.html',
  withdrawMoney: 'https://maante.org/zh_cn/introduction/WithdrawMoney.html',
  makeCoffee: 'https://maante.org/zh_cn/introduction/MakeCoffee.html',
  fish: 'https://maante.org/zh_cn/introduction/Fish.html',
  pinkPaw: 'https://maante.org/zh_cn/introduction/PinkPawHeist.html',
  rhythm: 'https://maante.org/zh_cn/introduction/Rhythm.html',
  fountain: 'https://maante.org/zh_cn/introduction/FountainCheckin.html',
  soundDodge: 'https://maante.org/zh_cn/introduction/SoundDodge.html',
  autoFScroll: 'https://maante.org/zh_cn/introduction/AutoFScroll.html',
  autoPiano: 'https://maante.org/zh_cn/introduction/AutoPiano.html',
  troubleshooting: 'https://maante.org/zh_cn/问题排查.html',
  devIndex: 'https://maante.org/zh_cn/develop/',
  gettingStarted: 'https://maante.org/zh_cn/develop/getting-started.html',
  pipelineGuide: 'https://maante.org/zh_cn/develop/pipeline-guide.html',
  sceneManager: 'https://maante.org/zh_cn/develop/scene-manager.html',
  inScene: 'https://maante.org/zh_cn/develop/in-scene.html',
  customAction: 'https://maante.org/zh_cn/develop/custom-action.html',
  localRoute: 'https://maante.org/zh_cn/develop/local-route-navigation.html',
  codingStandards: 'https://maante.org/zh_cn/develop/coding-standards.html',
  prGuidelines: 'https://maante.org/zh_cn/develop/pull-request-guidelines.html',
  dmca: 'https://maante.org/zh_cn/develop/dmca-abuse-template.html',
  commonButtons: 'https://maante.org/zh_cn/develop/common-buttons.html',
  nodeTesting: 'https://maante.org/zh_cn/develop/node-testing.html',
};

const QUESTIONS = [];

function pickWrong(correct, pool, count = 3) {
  return [...new Set(pool)].filter((item) => item !== correct).slice(0, count);
}

function addQuestion(category, sourceKey, question, correct, wrongOptions, explanation) {
  if (!Array.isArray(wrongOptions) || wrongOptions.length !== 3) {
    throw new Error(`Question requires exactly 3 wrong options: ${question}`);
  }
  QUESTIONS.push({
    category,
    question,
    options: [correct, ...wrongOptions],
    answer: 0,
    explanation,
    source: SOURCES[sourceKey],
  });
}

const FEATURE_NAMES = [
  '实时辅助',
  '在线地图实时定位&寻路',
  '领取奖励',
  '领取一咖舍收益',
  '自动做咖啡',
  '钓鱼任务',
  '粉爪大劫案',
  '超强音',
  '喷泉打卡',
  '音频闪避与反击',
  '粉爪快速拾取',
  '自动弹琴',
];

[
  ['自动剧情', '实时辅助'],
  ['自动传送', '实时辅助'],
  ['NCC 实时定位', '在线地图实时定位&寻路'],
  ['在线地图方向广播', '在线地图实时定位&寻路'],
  ['在线地图路径点寻路', '在线地图实时定位&寻路'],
  ['领取活跃度奖励', '领取奖励'],
  ['领取环期赏令奖励', '领取奖励'],
  ['自动领取收益', '领取一咖舍收益'],
  ['自动补货', '领取一咖舍收益'],
  ['循环制作咖啡', '自动做咖啡'],
  ['循环次数 / 无限循环', '钓鱼任务'],
  ['每次钓鱼数量', '钓鱼任务'],
  ['自动卖鱼 / 自动买鱼饵', '钓鱼任务'],
  ['自动刷取副本', '粉爪大劫案'],
  ['地图方案选择', '粉爪大劫案'],
  ['自动跑图、战斗、撤离', '粉爪大劫案'],
  ['自动选曲演奏', '超强音'],
  ['自动连打', '超强音'],
  ['可调节帧率', '超强音'],
  ['自动打卡签到', '喷泉打卡'],
  ['音效触发自动闪避', '音频闪避与反击'],
  ['自动反击', '音频闪避与反击'],
  ['按住 F 极速拾取', '粉爪快速拾取'],
  ['读取 MIDI 谱子自动演奏', '自动弹琴'],
].forEach(([ability, feature]) => {
  addQuestion(
    '功能文档 / 功能总览',
    'introduction',
    `功能介绍中，「${ability}」属于哪项功能？`,
    feature,
    pickWrong(feature, FEATURE_NAMES),
    `功能介绍总览把「${ability}」列在「${feature}」功能下。`,
  );
});

[
  ['功能文档 / 实时辅助', 'realtime', '实时辅助功能的运行方式是什么？', '会无限次循环运行', ['只运行一次后退出', '只在 PR 中运行', '只用于离线导出日志'], '实时辅助简介说明该功能会无限次循环运行。'],
  ['功能文档 / 实时辅助', 'realtime', '实时辅助文档要求使用哪类控制器？', '前台控制器', ['后台控制器', '浏览器控制器', '无需控制器'], '实时辅助简介明确写到需要使用前台控制器。'],
  ['功能文档 / 实时辅助', 'realtime', '自动传送在什么界面状态下会自动点击“传送”？', '处于地图界面并选中传送点时', ['处于背包界面时', '处于 GitHub PR 页面时', '处于游戏登录器时'], '自动传送说明处于地图界面时，选中传送点会自动点击“传送”。'],
  ['功能文档 / 实时辅助', 'realtime', '实时辅助当前支持的传送点之一是哪一个？', '维特海默塔', ['都市大亨菜单', '喷泉打卡按钮', '环期赏令第二页'], '实时辅助文档列出的传送点包括“维特海默塔”和“ReroRero电话亭”。'],
  ['功能文档 / 实时辅助', 'realtime', '关闭“自动剧情”总开关时，会同时关闭哪项功能？', '自动勾选“今日不再提示”', ['自动买鱼饵', '自动补货', '自动选曲'], '自动剧情配置说明关闭时会同时关闭“自动勾选今日不再提示”。'],
  ['功能文档 / 实时辅助', 'realtime', '实时辅助“检测间隔”的单位是什么？', '毫秒', ['秒', '帧', '像素'], '检测间隔说明每轮检测之间等待的时间单位为毫秒。'],

  ['功能文档 / 在线地图', 'navi', 'online_map_navigation custom action 在同一个截图循环中执行哪些内容？', 'NCC 定位、方向预测和路径寻路', ['只执行 MIDI 播放', '只提交 GitHub PR', '只处理 DMCA 表单'], 'Navi 文档说明该 action 会在同一截图循环中执行 NCC 定位、方向预测和路径寻路。'],
  ['功能文档 / 在线地图', 'navi', '在线地图实时定位与路径寻路为什么共用一个组合 action？', 'Maa 同时只能运行一个 action', ['WebView2 只能打开一个页面', 'GitHub 只允许一个 Issue', 'MIDI 只能有一个轨道'], 'Navi 文档说明 Maa 同时只能运行一个 action，因此共用组合 action。'],
  ['功能文档 / 在线地图', 'navi', 'OnlineMapNavigation 的 Pipeline 入口位于哪里？', 'assets/resource/base/pipeline/OnlineMapNavigation.json', ['assets/resource/tasks/Fish.json', 'agent/custom/action/Common/utils.py', 'docs/zh_cn/问题排查.md'], 'Navi 文档说明入口位于 assets/resource/base/pipeline/OnlineMapNavigation.json。'],
  ['功能文档 / 在线地图', 'navi', 'OnlineMapNavigation 的任务设置位于哪里？', 'assets/resource/tasks/OnlineMapNavigation.json', ['assets/interface.json', 'docs/zh_cn/introduction.md', 'docs/README_zh-tw.md'], 'Navi 文档说明任务设置位于 assets/resource/tasks/OnlineMapNavigation.json。'],
  ['功能文档 / 在线地图', 'navi', 'Navi WebSocket 服务固定监听哪个地址？', '0.0.0.0', ['127.0.0.1', 'localhost', 'github.com'], 'Navi 文档说明服务固定监听 0.0.0.0，且不可通过任务设置或 Pipeline 参数修改。'],
  ['功能文档 / 在线地图', 'navi', 'Navi 客户端连接地址是什么？', 'ws://127.0.0.1:14514', ['http://127.0.0.1:3000', 'wss://github.com:443', 'file://OnlineMapNavigation.json'], 'Navi 文档给出的客户端连接地址是 ws://127.0.0.1:14514。'],
  ['功能文档 / 在线地图', 'navi', 'Navi 采样间隔的最低限制是多少秒？', '0.05 秒', ['0.5 秒', '1 秒', '5 秒'], 'Navi 文档说明采样间隔单位为秒，最低限制为 0.05 秒。'],

  ['功能文档 / 领取奖励', 'claimRewards', '领取奖励任务自动领取哪两类奖励？', '活跃度奖励以及环期赏令奖励', ['鱼饵和渔获', 'MIDI 谱子和音频阈值', 'DMCA 工单和 Abuse 工单'], '领取奖励简介说明会自动领取活跃度奖励以及环期赏令奖励。'],
  ['功能文档 / 领取奖励', 'claimRewards', '领取活跃度奖励时，文档说会先按什么键打开活动界面？', 'F1', ['F2', 'F5', 'Esc'], '领取奖励流程第一步是按 F1 打开活动界面。'],
  ['功能文档 / 领取奖励', 'claimRewards', '领取环期赏令奖励时，文档说会按什么键打开环期赏令界面？', 'F2', ['F1', 'F5', 'Space'], '领取奖励流程第二步是按 F2 打开环期赏令界面。'],

  ['功能文档 / 一咖舍收益', 'withdrawMoney', '领取一咖舍收益需要使用哪类控制器？', '前台控制器', ['后台控制器', '无需控制器', 'WebSocket 控制器'], '领取一咖舍收益简介说明需要使用前台控制器。'],
  ['功能文档 / 一咖舍收益', 'withdrawMoney', '领取一咖舍收益中，按 F5 会打开什么界面？', '一咖舍界面', ['活动界面', '环期赏令界面', 'GitHub Actions 页面'], '自动领取收益说明会按 F5 打开一咖舍界面。'],
  ['功能文档 / 一咖舍收益', 'withdrawMoney', '自动补货功能关闭时，任务会如何处理？', '只领取收益，不进行补货操作', ['强制选择 12 小时补货', '删除库存记录', '改为自动钓鱼'], '自动补货配置说明关闭时只领取收益，并跳过补货流程直接按 Esc 退出。'],

  ['功能文档 / 自动做咖啡', 'makeCoffee', '自动做咖啡是否需要前台控制器？', '无需前台控制器', ['必须使用桌面端-前台', '必须使用浏览器控制器', '必须使用在线地图控制器'], '自动做咖啡简介明确写到无需前台控制器。'],
  ['功能文档 / 自动做咖啡', 'makeCoffee', '自动做咖啡每轮流程中，等待哪个按钮出现并点击？', '开始营业', ['我要参加', '确认撤离', '下载 .NET'], '流程第二步是等待“开始营业”按钮出现并点击。'],
  ['功能文档 / 自动做咖啡', 'makeCoffee', 'MakeCoffeeLoopTime 的默认值是多少？', '10', ['5', '60', '99'], '循环次数配置说明 MakeCoffeeLoopTime 默认值为 10。'],

  ['功能文档 / 钓鱼任务', 'fish', '钓鱼任务包含哪两套任务入口？', '旧版和新版', ['前台和后台 GitHub 入口', 'DMCA 和 Abuse 入口', '桌面端和网页端文档入口'], '钓鱼任务简介说明包含旧版和新版两套任务入口。'],
  ['功能文档 / 钓鱼任务', 'fish', '钓鱼任务（新）的理论能力是什么？', '理论上能无限钓鱼', ['只能钓 1 次', '只能卖鱼不能钓鱼', '只能购买 MIDI 谱子'], '新版钓鱼功能说明理论上能无限钓鱼。'],
  ['功能文档 / 钓鱼任务', 'fish', '钓鱼功能中哪些操作会抢占鼠标？', '仅自动买鱼饵和自动卖鱼', ['所有钓鱼步骤都会抢占鼠标', '只有打开文档会抢占鼠标', '没有任何操作会使用鼠标'], '警告说明钓鱼功能仅自动买鱼饵和自动卖鱼会抢占鼠标。'],
  ['功能文档 / 钓鱼任务', 'fish', '“循环次数”在什么情况下生效？', '不启用“无限循环”时', ['启用“自动选曲”时', '打开 DMCA 表单时', 'WebSocket 断开时'], '循环次数配置说明仅在不启用“无限循环”时生效。'],
  ['功能文档 / 钓鱼任务', 'fish', '“每次钓鱼数量”的默认值是多少？', '99', ['10', '5', '0.13'], '每次钓鱼数量配置说明默认值为 99。'],
  ['功能文档 / 钓鱼任务', 'fish', '自动买鱼饵每次购买多少个鱼饵？', '99 个（上限）', ['5 个', '10 个', '无限个且无上限'], '自动买鱼饵说明每次自动购买 99 个鱼饵（上限）。'],
  ['功能文档 / 钓鱼任务', 'fish', '鱼饵识别阈值可选值包含哪一组？', '0.8、0.7、0.6', ['0.13、0.12、1.0', '30、60、120', 'F1、F2、F5'], '鱼饵识别阈值配置说明可选值为 0.8、0.7、0.6。'],

  ['功能文档 / 粉爪大劫案', 'pinkPaw', '粉爪大劫案需要使用哪类控制器？', '桌面端-前台控制器', ['后台控制器', 'WebSocket 控制器', '无需控制器'], '粉爪大劫案简介明确写到需要使用桌面端-前台控制器。'],
  ['功能文档 / 粉爪大劫案', 'pinkPaw', '粉爪大劫案当前支持的方案一需要怎样的配队？', '1娜娜莉 3薄荷 4早雾', ['1白藏 2娜娜莉 3早雾', '全员任意配队', '只需要 4 个薄荷'], '地图方案说明方案一需要配队 1娜娜莉 3薄荷 4早雾。'],
  ['功能文档 / 粉爪大劫案', 'pinkPaw', '粉爪流程第一步检测什么交互？', '小吱交互', ['喷泉打卡按钮', 'MIDI 谱子路径', 'GitHub DMCA 表单'], '流程说明第一步是在小吱附近 OCR 识别“小吱”文字。'],
  ['功能文档 / 粉爪大劫案', 'pinkPaw', '粉爪流程中点击“我要参加”后会进入哪里？', '副本', ['背包', 'PR 描述页', '设置-连接设置'], '流程第三步说明点击“我要参加”进入副本。'],
  ['功能文档 / 粉爪大劫案', 'pinkPaw', '等待粉爪地图加载完成时，OCR 识别什么文字？', '本局收益', ['猎人等级', '背包', '自动选曲'], '流程第六步说明等待加载完成时 OCR 识别“本局收益”。'],
  ['功能文档 / 粉爪大劫案', 'pinkPaw', '方案一的自动战斗如何检测怪物血条？', '颜色匹配', ['MIDI 解析', 'DMCA 哈希', 'Git rebase'], '方案一说明自动战斗会检测怪物血条（颜色匹配）。'],

  ['功能文档 / 超强音', 'rhythm', '超强音自动选曲启用后会自动选择哪首默认歌曲？', '迷星叫', ['Destiny', 'Heroic_Appearance', 'Everlasting_Dazing_Summer'], '自动选曲说明启用后自动选择默认歌曲“迷星叫”。'],
  ['功能文档 / 超强音', 'rhythm', '超强音目标帧率影响什么？', '识别和按键的响应速度', ['Git 提交类型', 'AGPL 许可证文本', '任务文档标题'], '目标帧率说明演奏循环的每秒帧率会影响识别和按键响应速度。'],
  ['功能文档 / 超强音', 'rhythm', '手动选择目标歌曲在什么情况下可用？', '关闭“自动选曲”时', ['开启“自动选曲”时', '开启自动买鱼饵时', '关闭全部任务时'], '目标歌曲配置说明仅在关闭“自动选曲”时可用。'],
  ['功能文档 / 超强音', 'rhythm', '“自动连打”关闭时会如何演奏？', '仅演奏一次', ['无限演奏直到手动停止', '只播放 MIDI 预览', '只打开目标帧率输入框'], '自动连打说明关闭则仅演奏一次。'],
  ['功能文档 / 超强音', 'rhythm', '“连打次数”的默认值是多少？', '5', ['10', '60', '99'], '连打次数配置说明默认值为 5。'],

  ['功能文档 / 音频闪避', 'soundDodge', '音频闪避与反击基于什么进行识别？', '音频识别', ['模板截图识别', 'Git 提交识别', 'MIDI 谱面识别'], '简介说明该功能基于音频识别触发闪避和反击。'],
  ['功能文档 / 音频闪避', 'soundDodge', '音频闪避与反击需要使用哪类控制器？', '桌面端-前台控制器', ['后台控制器', '无需控制器', 'WebSocket 控制器'], '简介说明需要使用桌面端-前台控制器。'],
  ['功能文档 / 音频闪避', 'soundDodge', '关闭“启用音频闪避”总开关时会怎样？', '同时关闭闪避和反击', ['只关闭 UI 文案', '只关闭 GitHub Actions', '只关闭鱼饵购买'], '启用音频闪避说明关闭时会同时关闭闪避和反击。'],
  ['功能文档 / 音频闪避', 'soundDodge', '闪避阈值默认是多少？', '0.13', ['0.12', '0.8', '60'], '闪避阈值配置说明默认值为 0.13。'],
  ['功能文档 / 音频闪避', 'soundDodge', '反击阈值默认是多少？', '0.12', ['0.13', '0.7', '99'], '反击阈值配置说明默认值为 0.12。'],

  ['功能文档 / 自动弹琴', 'autoPiano', '自动弹琴读取什么谱子格式来演奏？', 'MIDI 谱子', ['PDF 文档', 'Git patch', 'WebSocket 消息'], '自动弹琴简介说明读取 MIDI 谱子并发送键盘演奏事件。'],
  ['功能文档 / 自动弹琴', 'autoPiano', '自动弹琴播放速度中，1.0 表示什么？', '原速', ['降低一个八度', '加快两倍', '禁用播放'], '播放速度说明 1.0 为原速。'],
  ['功能文档 / 自动弹琴', 'autoPiano', '自动弹琴转调参数的单位是什么？', '半音', ['毫秒', '像素', 'Hz'], '转调说明单位为半音，例如 -12 降低一个八度。'],

  ['功能文档 / 喷泉打卡', 'fountain', '喷泉打卡第一步如何识别打卡交互按钮？', '模板匹配', ['颜色匹配血条', 'DMCA 表单匹配', 'MIDI 文件匹配'], '喷泉打卡流程第一步说明通过模板匹配识别打卡交互按钮。'],
  ['功能文档 / 喷泉打卡', 'fountain', '喷泉打卡流程中，等待动画后会做什么？', '识别许愿选项并点击', ['购买 99 个鱼饵', '执行 Git rebase', '打开环期赏令第二页'], '喷泉打卡流程第三步是识别许愿选项并点击。'],
  ['功能文档 / 喷泉打卡', 'fountain', '喷泉打卡任务入口是什么？', 'FountainCheckinEntrance', ['ClaimRewardsEntrance', 'AutoFScroll', 'PinkPawHeist_CoreSequence'], '配置详解说明任务入口为 FountainCheckinEntrance。'],

  ['功能文档 / 粉爪快速拾取', 'autoFScroll', '粉爪快速拾取启动后会模拟什么操作？', 'F 键按压和鼠标滚轮滚动', ['F1/F2 切换奖励界面', 'Space + 鼠标点击战斗', 'GitHub Draft PR 创建'], '粉爪快速拾取功能说明启动后模拟 F 键按压和鼠标滚轮滚动。'],
].forEach((item) => addQuestion(...item));

[
  ['问题排查 / 运行问题', 'troubleshooting', '弹窗提示“To run this application, you must install .NET”时，文档建议安装什么？', '.NET 10.0 Desktop Runtime', ['WebView2 Runtime', 'Maa Pipeline Support', 'Npcap/WinPcap'], '问题排查手册说明该弹窗需要前往下载 .NET 10.0 并安装 .NET 10.0 Desktop Runtime。'],
  ['问题排查 / 运行问题', 'troubleshooting', '无法连接窗口时，第一项建议确认什么？', '已经打开异环', ['已经打开 GitHub', '已经关闭所有显示器', '已经删除 config 文件夹'], '无法连接窗口条目第一步要求确保打开了异环。'],
  ['问题排查 / 运行问题', 'troubleshooting', '无法连接窗口时，MaaNTE 应以什么权限运行？', '管理员身份', ['访客身份', '普通网页权限', '安全模式命令行'], '无法连接窗口条目要求以管理员身份运行 MaaNTE。'],
  ['问题排查 / 运行问题', 'troubleshooting', '无法连接窗口时，异环建议设置为什么分辨率并窗口化？', '1280x720', ['1920x1080', '800x600', '22528x22528'], '无法连接窗口条目要求将异环设为 1280x720 分辨率，窗口化。'],
  ['问题排查 / 任务问题', 'troubleshooting', '“我的功能比别人少”时，文档建议尝试什么？', '切换控制器', ['修改 Git 提交类型', '降低 MIDI 播放速度', '删除路线 JSON'], '问题排查说明部分功能需要选择特定控制器才会出现。'],
  ['问题排查 / 任务问题', 'troubleshooting', '主页切换控制器功能存在问题时，应在哪里更改控制器？', '设置-连接设置', ['GitHub Actions', '浏览器收藏夹', 'Windows 回收站'], '问题排查说明目前主页切换控制器存在问题，请在设置-连接设置里更改。'],
  ['问题排查 / 任务问题', 'troubleshooting', '文档中前台控制器的鼠标方式是什么？', 'Seize', ['SendMessageWithWindowPos', 'DirectML', 'pktmon'], '问题排查说明前台控制器为鼠标 Seize。'],
  ['问题排查 / 任务问题', 'troubleshooting', '文档中后台控制器的鼠标方式是什么？', 'SendMessageWithWindowPos', ['Seize', 'TemplateMatch', 'pyarmor_runtime'], '问题排查说明后台控制器为鼠标 SendMessageWithWindowPos。'],
  ['问题排查 / 任务问题', 'troubleshooting', '任务一开始就立刻完成时，应检查左侧哪里？', '任务列表是否勾选相应任务', ['PR 标题是否加 WIP', 'MIDI 谱子是否是绝对路径', 'DMCA 表单是否提交'], '问题排查建议检查左侧任务列表中有没有勾选相应任务。'],
  ['问题排查 / 任务问题', 'troubleshooting', '识别失败或任务立刻完成时，文档建议关闭哪些影响画质的功能？', '游戏内插帧、超分辨率等', ['Git 子模块', 'WebSocket 自动重连', '五语言 i18n'], '问题排查多处建议关闭游戏内插帧、超分辨率等影响画质的功能。'],
  ['问题排查 / 任务问题', 'troubleshooting', '无法连接窗口/开始任务时，应如何处理杀毒软件？', '把 MaaNTE 加入白名单或关闭杀毒软件', ['把 GitHub 加入收藏夹', '卸载 Python', '删除所有日志'], '无法连接窗口/开始任务条目建议将 MaaNTE 添加到杀毒软件白名单，或关闭杀毒软件。'],
  ['问题排查 / 任务问题', 'troubleshooting', '无法连接窗口/开始任务时，游戏语言应是什么？', '简体中文', ['英语', '日语', '繁体中文'], '问题排查要求确保游戏语言为简体中文。'],
  ['问题排查 / 点击操作', 'troubleshooting', '无法正常点击/操作时，MaaNTE 路径应满足什么要求？', '纯英文路径且没有全角符号', ['必须放在中文桌面目录', '必须包含空格和全角符号', '必须位于浏览器缓存'], '问题排查要求 MaaNTE 处于纯英文路径下，并且没有全角符号。'],
  ['问题排查 / 点击操作', 'troubleshooting', '无法正常点击时，文档建议尝试将鼠标输入方式改为什么？', 'Seize', ['pktmon', 'OCR', 'DirectHit'], '无法正常进行点击/操作条目建议尝试将鼠标输入方式改为 Seize。'],
  ['问题排查 / 点击操作', 'troubleshooting', '无法正常点击/操作时，Windows 屏幕缩放应设置为多少？', '100%', ['125%', '150%', '自动', '200%'].slice(0, 3), '问题排查要求确保 Windows 屏幕缩放为 100%。'],
  ['问题排查 / 抢占鼠标', 'troubleshooting', '遇到抢占鼠标问题时，文档建议将鼠标改为什么？', 'SendMessageWithWindowPos', ['Seize', 'ColorMatch', 'LocalRouteNavigation'], '抢占鼠标问题条目建议在设置-连接设置里将鼠标改为 SendMessageWithWindowPos。'],
  ['问题排查 / 自动钓鱼', 'troubleshooting', '无法售卖渔获时，文档建议尝试将游戏改为什么帧率？', '120帧', ['30帧', '60帧', '无限帧'], '自动钓鱼问题排查中无法售卖渔获条目建议尝试将游戏改为 120 帧。'],
  ['问题排查 / 自动钓鱼', 'troubleshooting', '无法购买鱼饵时，文档建议降低什么？', '鱼饵识别阈值', ['目标帧率', 'PR 评审要求', 'WebSocket 端口'], '自动钓鱼问题排查中无法购买鱼饵条目建议降低鱼饵识别阈值。'],
  ['问题排查 / 自动钓鱼', 'troubleshooting', '钓鱼任务提前结束时，应保证什么？', '剩余鱼饵多于每轮钓鱼数', ['自动选曲开启', 'PR 标题含 WIP', '路线 JSON 为空'], '问题排查说明钓鱼任务提前结束时要保证剩余鱼饵多于每轮钓鱼数。'],
  ['问题排查 / 自动做咖啡', 'troubleshooting', '自动做咖啡没有收益/没有全连击时，文档说需要谁的都市技能？', '娜娜莉、白藏', ['薄荷、早雾', '小吱、ReroRero', 'Git、Python'], '问题排查中自动做咖啡条目说明需要娜娜莉、白藏的都市技能。'],
].forEach((item) => addQuestion(...item));

[
  ['开发者文档 / 阅读路线', 'devIndex', '开发者文档建议第一次从零开始参与时先看哪篇？', 'getting-started.md', ['pipeline-guide.md', 'dmca-abuse-template.md', 'common-buttons.md'], '开发者文档阅读路线第一步是搭环境、跑起来、完成第一次改动和 PR，对应 getting-started.md。'],
  ['开发者文档 / 阅读路线', 'devIndex', '提交 PR 前检查格式、描述与验证记录应看哪篇？', 'pull-request-guidelines.md', ['scene-manager.md', 'node-testing.md', 'custom-action.md'], '开发者文档阅读路线第二步指向 pull-request-guidelines.md。'],
  ['开发者文档 / 阅读路线', 'devIndex', '了解 Pipeline 编写规范应看哪篇？', 'pipeline-guide.md', ['README_zh-tw.md', 'NaviWebSocket.md', '问题排查.md'], '开发者文档阅读路线第三步指向 pipeline-guide.md。'],
  ['开发者文档 / 阅读路线', 'devIndex', '需要编写 Python 自定义逻辑时应看哪篇？', 'custom-action.md', ['common-buttons.md', 'node-testing.md', 'dmca-abuse-template.md'], '开发者文档阅读路线说明 Python 自定义逻辑对应 custom-action.md。'],
  ['开发者文档 / 阅读路线', 'devIndex', '理解场景跳转机制应看哪篇？', 'scene-manager.md', ['getting-started.md', 'AutoPiano.md', 'Fish.md'], '开发者文档阅读路线说明场景跳转机制对应 scene-manager.md。'],
  ['开发者文档 / 快速跳转', 'devIndex', '开发者文档首页的快速跳转表中，想调用本地路线寻路应看哪里？', 'local-route-navigation.md', ['pull-request-guidelines.md', 'coding-standards.md', 'node-testing.md'], '开发者文档首页快速跳转表中，“调用本地路线寻路”对应 local-route-navigation.md。'],
  ['开发者文档 / 基础组件', 'devIndex', '开发者文档首页中，Pipeline 基础组件主要面向哪类节点？', '日常开发最常用的可复用节点', ['仅发布用的打包产物', '仅用户排障用的截图', '仅 DMCA 表单占位符'], '开发者文档首页说明 Pipeline 基础组件是日常开发最常用的可复用节点，建议 Pipeline 开发者查询复用。'],
  ['开发者文档 / 快速跳转', 'devIndex', '开发者文档首页的快速跳转表中，场景跳转/界面导航应看哪里？', 'scene-manager.md', ['pull-request-guidelines.md', 'local-route-navigation.md', 'node-testing.md'], '开发者文档首页快速跳转表中，“场景跳转/界面导航”对应 scene-manager.md。'],
].forEach((item) => addQuestion(...item));

const COMMIT_TYPES = [
  ['feat', '新增功能'],
  ['fix', '修复 Bug'],
  ['docs', '仅文档更改'],
  ['style', '格式调整（不影响代码含义）'],
  ['refactor', '重构'],
  ['perf', '性能优化'],
  ['test', '添加或修改测试'],
  ['chore', '构建/依赖/工具变动'],
  ['revert', '回退'],
  ['ci', 'CI/CD 变更'],
];
const COMMIT_MEANINGS = COMMIT_TYPES.map(([, meaning]) => meaning);
COMMIT_TYPES.forEach(([type, meaning]) => {
  addQuestion(
    '开发者文档 / 提交规范',
    'gettingStarted',
    `约定式提交中，\`${type}\` 表示什么类型？`,
    meaning,
    pickWrong(meaning, COMMIT_MEANINGS),
    `快速开始的 type 表格中，${type} 对应「${meaning}」。`,
  );
});

[
  ['开发者文档 / 快速开始', 'gettingStarted', '快速开始文档要走一遍怎样的开发流程？', '从需求到合并的完整开发流程', ['只填写 DMCA 表单', '只配置 WebSocket 端口', '只调整自动弹琴转调'], '快速开始开头说明该文档会走一遍从需求到合并的完整开发流程。'],
  ['开发者文档 / 确认需求', 'gettingStarted', '快速开始中，开始动手前应先在 Issue 里做什么？', '确认需求合理', ['直接合并 PR', '删除所有子模块', '上传 OCR 资源到仓库'], '确认需求章节说明先在 Issue 里确认需求合理，再开始动手。'],
  ['开发者文档 / 环境准备', 'gettingStarted', '环境准备要求的 Python 版本是什么？', 'Python 3.11+', ['Python 3.10 only', 'Python 2.7', '不需要 Python'], '环境准备列表包含 Python 3.11+。'],
  ['开发者文档 / 环境准备', 'gettingStarted', '克隆仓库时文档使用了哪个参数拉取子模块？', '--recurse-submodules', ['--single-branch-only', '--no-submodule', '--docs-only'], '快速开始克隆命令是 git clone --recurse-submodules。'],
  ['开发者文档 / 环境准备', 'gettingStarted', 'Windows 下激活虚拟环境的命令是哪一个？', '.venv/Scripts/activate', ['source .venv/bin/activate', 'npm run dev', 'git submodule update'], '快速开始命令块中 Windows 激活命令为 .venv/Scripts/activate。'],
  ['开发者文档 / 环境准备', 'gettingStarted', '快速开始推荐 VS Code 安装哪个插件？', 'Maa Pipeline Support', ['GitHub Copilot Chat only', 'WebView2 Runtime', 'MIDI Player'], '环境准备说明推荐 VS Code 安装 Maa Pipeline Support 插件。'],
  ['开发者文档 / 子模块', 'gettingStarted', '模型缺失或 Git 提示子模块被修改时，应运行什么命令？', 'git submodule update --init --recursive', ['git reset --hard', 'npm uninstall', 'python scripts/update_navi_coordinate_transform.py'], '子模块章节给出的修复命令是 git submodule update --init --recursive。'],
  ['开发者文档 / Pipeline 示例', 'gettingStarted', 'Touch 示例中，TouchDetect 用什么识别“抚摸”？', 'OCR', ['TemplateMatch', 'ColorMatch', 'DirectHit'], 'Touch.json 示例中 TouchDetect 的 recognition type 为 OCR，expected 为“抚摸”。'],
  ['开发者文档 / Pipeline 示例', 'gettingStarted', 'Touch 示例中，TouchPressF 的 key 70 表示哪个键？', 'F 键', ['Esc 键', 'F1 键', 'Space 键'], '示例注释写明 key: 70 是 F 键。'],
  ['开发者文档 / Pipeline 示例', 'gettingStarted', 'Touch 示例中，TouchPressEsc 的 key 27 表示哪个键？', 'Esc 键', ['F 键', 'F2 键', '鼠标滚轮'], '示例注释写明 key: 27 是 Esc 关闭界面。'],
  ['开发者文档 / 任务配置', 'gettingStarted', '新建任务配置后必须在哪里注册？', 'assets/interface.json 的 import 数组', ['docs/zh_cn/introduction.md', 'README_zh-tw.md', 'GitHub DMCA 表单'], '任务配置章节说明新建后必须在 assets/interface.json 的 import 数组中注册。'],
  ['开发者文档 / 任务配置', 'gettingStarted', '任务配置文档列出的三种选项类型是什么？', 'switch、input、select', ['OCR、ColorMatch、DirectHit', 'feat、fix、docs', 'DMCA、Abuse、Draft'], '快速开始任务配置章节列出 switch、input、select 三种选项类型。'],
].forEach((item) => addQuestion(...item));

[
  ['开发者文档 / Pipeline 原则', 'pipelineGuide', 'Pipeline JSON 编写指南的第一条核心原则是什么？', '状态驱动', ['只写硬延迟', '先提交 PR', '只用 Python'], 'Pipeline 指南核心原则第一条是状态驱动：遵循“识别 → 操作 → 识别”循环。'],
  ['开发者文档 / Pipeline 原则', 'pipelineGuide', 'Pipeline 指南要求所有坐标、ROI、图片基于什么分辨率？', '1280×720', ['1920×1080', '11264×11264', '22528×22528'], 'Pipeline 指南核心原则写明 720p 基准，即 1280×720。'],
  ['开发者文档 / Pipeline 命名', 'pipelineGuide', 'Pipeline 节点命名应使用什么风格？', 'PascalCase', ['snake_case', 'kebab-case', '全小写拼音'], '节点命名章节要求使用 PascalCase。'],
  ['开发者文档 / Pipeline 命名', 'pipelineGuide', '私有节点应以什么开头？', '__', ['$', '@', '#'], '节点命名章节说明私有节点以 __ 开头。'],
  ['开发者文档 / Pipeline v2', 'pipelineGuide', 'MaaNTE 使用的 Pipeline 格式是什么？', 'v2 格式', ['v1 扁平格式', 'YAML 格式', 'Markdown 表格'], 'Pipeline v2 格式章节说明 MaaNTE 使用 v2 格式。'],
  ['开发者文档 / Pipeline v2', 'pipelineGuide', 'Pipeline v2 中 recognition 和 action 放在哪里？', '二级字典', ['文件名后缀', 'README 标题', 'Git commit scope'], 'Pipeline v2 格式说明 recognition 和 action 放入二级字典。'],
].forEach((item) => addQuestion(...item));

const RECOGNITION_ROWS = [
  ['TemplateMatch', '找固定图标、按钮'],
  ['OCR', '读屏幕文字'],
  ['ColorMatch', '检测特定颜色区域'],
  ['And + all_of', '多条件都满足才命中'],
  ['DirectHit', '不做识别，直接执行动作'],
  ['Custom + custom_action', '调用 Python 自定义动作'],
];
const RECOGNITION_USES = RECOGNITION_ROWS.map(([, usage]) => usage);
RECOGNITION_ROWS.forEach(([name, usage]) => {
  addQuestion(
    '开发者文档 / 识别方式',
    'gettingStarted',
    `常用识别方式中，\`${name}\` 的使用场景是什么？`,
    usage,
    pickWrong(usage, RECOGNITION_USES),
    `快速开始的常用识别方式表中，${name} 对应「${usage}」。`,
  );
});

const ACTION_ROWS = [
  ['Click', 'target'],
  ['LongPress', 'target, duration'],
  ['Swipe', 'begin, end, duration, end_hold'],
  ['ClickKey', 'key（虚拟键码）'],
  ['Custom', 'custom_action, custom_action_param'],
  ['DoNothing', '不执行动作'],
  ['StopTask', '停止当前任务'],
];
const ACTION_FIELDS = ACTION_ROWS.map(([, fields]) => fields);
ACTION_ROWS.forEach(([action, fields]) => {
  addQuestion(
    '开发者文档 / 动作类型',
    'pipelineGuide',
    `Pipeline 常用动作类型 \`${action}\` 的关键字段或作用是什么？`,
    fields,
    pickWrong(fields, ACTION_FIELDS),
    `Pipeline 指南的常用动作类型表中，${action} 对应「${fields}」。`,
  );
});

[
  ['开发者文档 / 流程控制', 'pipelineGuide', 'next 列表按什么规则识别节点？', '按序识别，首个命中的节点执行', ['随机执行所有节点', '只执行最后一个节点', '只按文件名排序'], '流程控制章节说明 next 列表按序识别，首个命中的节点执行后成为当前节点。'],
  ['开发者文档 / 流程控制', 'pipelineGuide', 'next 全部超时时，默认会怎样？', '任务结束', ['自动创建 PR', '强制重启电脑', '切换到 MIDI 模式'], '流程控制章节说明 next 全部超时则任务结束。'],
  ['开发者文档 / 流程控制', 'pipelineGuide', '[JumpBack] 适合处理什么场景？', '弹窗、加载等中断场景', ['提交 commit 类型', 'MIDI 转调', 'DMCA 联系信息'], '节点属性说明 [JumpBack] 适用于处理弹窗、加载等中断场景。'],
  ['开发者文档 / 流程控制', 'pipelineGuide', '[Anchor] 的作用是什么？', '动态引用锚点', ['强制截图', '关闭任务', '降低阈值'], '节点属性说明 [Anchor] 会在运行时解析为最后设置该锚点的节点。'],
  ['开发者文档 / 流程控制', 'pipelineGuide', 'max_hit 用于什么？', '限制节点最大命中次数', ['设置 WebSocket 端口', '声明 PR 目标分支', '选择 MIDI 谱子'], 'max_hit 章节说明用于限制节点最大命中次数，实现可控循环。'],
  ['开发者文档 / 流程控制', 'pipelineGuide', 'focus 用户消息推荐使用什么格式？', '$i18n_key', ['硬编码英文长句', 'GitHub URL', '随机数字'], 'focus 章节推荐使用 $i18n_key 格式，并在五种语言文件中定义翻译。'],
  ['开发者文档 / 典型模式', 'pipelineGuide', 'switch 控制节点启停主要通过什么实现？', 'pipeline_override 覆写 enabled', ['git submodule update', 'DMCA 表单字段', 'MIDI 转调参数'], '典型模式中 switch 示例通过 pipeline_override 将节点 enabled 设为 true 或 false。'],
  ['开发者文档 / 典型模式', 'pipelineGuide', '复杂任务建议如何组织子模块目录？', '拆分为独立目录', ['全部写在一个 README', '只写进 issue 标题', '放在浏览器缓存'], 'Pipeline 指南建议复杂任务拆分为独立目录。'],
  ['开发者文档 / 典型模式', 'pipelineGuide', 'TemplateMatch 图片路径相对哪个目录？', 'resource/base/image', ['docs/zh_cn', 'assets/resource/routes', 'GitHub Release'], 'TemplateMatch 示例注释说明 template 相对 resource/base/image。'],
  ['开发者文档 / 典型模式', 'pipelineGuide', 'OCR 的 only_rec: true 常用于什么？', 'Python 侧处理多结果', ['自动提交 PR', '禁用 i18n 同步', '固定 WebSocket 端口'], 'OCR 说明 only_rec: true 用于 Python 侧处理多结果。'],
].forEach((item) => addQuestion(...item));

[
  ['开发者文档 / 场景管理器', 'sceneManager', 'SceneManager 提供什么能力？', '从任意界面自动导航到目标场景', ['生成 MIDI 谱子', '提交 DMCA 表单', '压缩日志包'], '场景管理器概述说明它提供从任意界面自动导航到目标场景的能力。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'SceneManager 的公共接口位于哪里？', 'Interface/Scene/', ['SceneManager/', 'agent/custom/action/temp/', 'docs/eng/'], '设计原理说明公共接口位于 Interface/Scene/。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'SceneManager 的私有实现位于哪里？', 'SceneManager/', ['Interface/Scene/', 'agent/custom/action/Common/', 'assets/resource/routes/'], '设计原理说明私有实现位于 SceneManager/。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'Pipeline 任务中是否可以直接引用 __ScenePrivate 节点？', '禁止直接引用', ['必须直接引用', '只在 README 中引用', '只能用作 PR 标题'], '场景管理器文档多处强调禁止在 Pipeline 中直接引用 __ScenePrivate* 节点。'],
  ['开发者文档 / 场景管理器', 'sceneManager', '使用 SceneManager 跳转后必须有什么节点确认目标场景？', '状态检查节点', ['DMCA 检测节点', 'MIDI 转调节点', 'Git tag 节点'], '使用方式说明跳转后必须有状态检查节点确认已在目标场景。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'SceneAnyEnterWorld 的作用是什么？', '从任意界面返回大世界', ['进入背包', '等待加载界面结束', '终止任务'], '常用接口表说明 SceneAnyEnterWorld 从任意界面返回大世界。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'SceneLoading 的作用是什么？', '等待加载界面结束', ['进入 Esc 菜单', '点击空白关闭弹窗', '进入活动菜单'], '常用接口表说明 SceneLoading 用于等待加载界面结束。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'SceneClickBlankToExit 的作用是什么？', '点击空白区域关闭弹窗', ['进入环期赏令', '从任意界面返回大世界', '判断在背包界面'], '常用接口表说明 SceneClickBlankToExit 用于点击空白区域关闭弹窗。'],
  ['开发者文档 / 场景管理器', 'sceneManager', '扩展新场景接口时，状态检测节点应添加到哪里？', 'Status.json', ['README.md', 'CNAME', 'questions.js'], '扩展新场景接口步骤要求在 Status.json 中添加状态检测节点。'],
  ['开发者文档 / 场景管理器', 'sceneManager', 'StopNode 的作用是什么？', '终止当前任务', ['空流程中转', '进入都市大亨', '识别 MIDI 文件'], '流程控制表说明 StopNode 终止当前任务。'],

  ['开发者文档 / InScene', 'inScene', 'InScene 只负责什么？', '识别当前画面在哪个界面', ['执行所有点击', '提交 PR', '下载依赖'], 'InScene 核心概念说明它只负责识别、不做任何操作。'],
  ['开发者文档 / InScene', 'inScene', 'InScene 节点定义在哪个文件？', 'assets/resource/base/pipeline/Interface/Scene/Status.json', ['assets/resource/tasks/OnlineMapNavigation.json', 'agent/custom/action/Common/utils.py', 'docs/zh_cn/introduction.md'], 'InScene 概述说明所有识别节点定义在 Interface/Scene/Status.json 中。'],
  ['开发者文档 / InScene', 'inScene', 'InWorld 的识别方式是什么？', 'And（同时存在 EscMenu 按钮和任务按钮）', ['OCR 识别“背包”', 'OCR 识别“活动”', 'ColorMatch 怪物血条'], 'InScene 可用节点表中 InWorld 的识别方式为 And，同时存在 EscMenu 按钮和任务按钮。'],
  ['开发者文档 / InScene', 'inScene', 'InEscMenu 通过 OCR 识别什么文字？', '猎人等级', ['背包', '活动', '历练奖赏'], 'InScene 表中 InEscMenu 的识别方式为 OCR 识别“猎人等级”。'],
  ['开发者文档 / InScene', 'inScene', 'InBagMenu 通过 OCR 识别什么文字？', '背包', ['猎人等级', '都市大亨', '个人信息'], 'InScene 表中 InBagMenu 的识别方式为 OCR 识别“背包”。'],
  ['开发者文档 / InScene', 'inScene', '新增场景识别节点建议使用什么命名？', 'InXxxMenu 或 InXxx', ['__ScenePrivateOnly', 'random_lowercase', 'feat/<name>'], '新增场景识别节点章节给出命名规范：InXxxMenu 或 InXxx。'],
  ['开发者文档 / InScene', 'inScene', '文字类场景识别建议使用什么，不要用什么？', '使用 OCR，不要用 TemplateMatch', ['使用 TemplateMatch，不要用 OCR', '使用 DMCA，不要用 Abuse', '使用 MIDI，不要用 JSON'], '新增场景识别节点说明文字类识别用 OCR，不要用 TemplateMatch。'],

  ['开发者文档 / Custom Action', 'customAction', '通用 Custom Action 位于哪个目录？', 'agent/custom/action/Common/', ['assets/resource/routes/', 'docs/zh_cn/introduction/', 'Interface/Scene/Status.json'], 'Custom 动作与识别开头说明这些 Custom Action 位于 agent/custom/action/Common/。'],
  ['开发者文档 / Custom Action', 'customAction', 'click_override 的注册名是什么？', 'click_override', ['alt_click', 'auto_make_coffee', 'local_route_navigation'], 'click_override 小节列出注册名为 click_override。'],
  ['开发者文档 / Custom Action', 'customAction', 'click_override 未提供 custom_action_param 时使用什么？', 'argv.box（识别结果 box）', ['固定 [0,0]', 'MIDI 谱子路径', 'Git branch 名称'], 'click_override 说明未提供参数时使用 argv.box。'],
  ['开发者文档 / Custom Action', 'customAction', 'alt_click 的点击位置由什么决定？', '识别结果的 box', ['任务配置 label', 'GitHub Issue 编号', 'MIDI 转调值'], 'alt_click 说明无需额外参数，点击位置由识别结果的 box 决定。'],
  ['开发者文档 / Custom Action', 'customAction', '编写新的 Custom Action 时，长循环中应检查什么？', 'context.tasker.stopping', ['document.body', 'window.location', 'git status --short'], 'Custom Action 核心原则要求长循环中检查 context.tasker.stopping。'],

  ['开发者文档 / 本地路线寻路', 'localRoute', '本地路线寻路位于哪个目录？', 'agent/custom/action/Navi/', ['agent/custom/action/Common/', 'assets/resource/tasks/', 'docs/zh_cn/introduction/'], '本地路线寻路接口开头说明它位于 agent/custom/action/Navi/。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'Pipeline 入口 local_route_navigation 一次执行什么？', '一个 route segment', ['完整 PR 评审', '所有 DMCA 表单', '全部 MIDI 歌曲'], '文档说明 Pipeline 入口一次执行一个 route segment。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'Python 入口 LocalRouteNavigation 类适合什么场景？', '同一个函数中连续执行多个 segment', ['只运行一个静态单选题', '仅检查 PR 标题', '只提交 Abuse 报告'], '文档说明 Python 类接口适合在同一函数中连续执行多个 segment。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'local_route_navigation_unit_test 固定加载哪条路线？', 'penquan', ['fish', 'touch', 'dmca'], '文档说明 unit test 内部固定加载 penquan 路线。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'segment_index 对外按什么编号方式开始？', '从 1 开始', ['从 0 开始', '从 -1 开始', '按字符串排序'], '参数表说明 segment_index 对外按 1 开始编号。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'frame_interval 的默认值是多少？', '0.1', ['5.0', '60', '1.0'], '参数表中 frame_interval 默认值为 0.1。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'position_backend=auto 的优先策略是什么？', '优先网络位置与摄像机朝向，并按 pcap、pktmon、视觉定位回退', ['始终只使用视觉定位', '始终只读取 MIDI 文件', '只使用 GitHub API'], '参数表说明 auto 优先使用网络位置与摄像机朝向，并按 pcap、pktmon、视觉定位顺序回退。'],
  ['开发者文档 / 本地路线寻路', 'localRoute', 'debug=true 会带来什么效果？', '打开定位和方向预测调试窗口并输出日志', ['自动合并 PR', '禁用所有识别', '删除路线 JSON'], '参数表说明 debug 是否打开定位和方向预测调试窗口，并输出相关日志。'],
].forEach((item) => addQuestion(...item));

[
  ['开发者文档 / 编码规范', 'codingStandards', 'AI 编程规范禁止在什么情况下让 AI 直接编写 Pipeline？', '未提供游戏界面截图、界面跳转逻辑等上下文', ['已经提供 ROI 和模板图片', '已经阅读编码规范', '只让 AI 做增量建议'], '编码规范警告缺乏界面信息的 AI 只能依赖幻觉和已有代码拼凑。'],
  ['开发者文档 / 编码规范', 'codingStandards', 'Pipeline 低代码规范中，推荐的步骤顺序是什么？', '识别 A → 点击 A → 识别 B → 点击 B', ['整体识别一次 → 连续点击 A/B/C', '先提交 PR → 再截图', '先写 Python → 再考虑 Pipeline'], '编码规范明确推荐识别 A、点击 A、识别 B、点击 B，并禁止整体识别一次后连续点击。'],
  ['开发者文档 / 编码规范', 'codingStandards', '新增或修改任务时，除任务和 Pipeline 外还需要补哪些语言文件？', 'assets/resource/locales/interface/zh_cn.json 等五种语言文件', ['只补 README.md', '只补 CNAME', '只补 package-lock.json'], '配套文件章节说明新增或修改任务需要补五种语言 i18n 文件。'],
  ['开发者文档 / 编码规范', 'codingStandards', '资源规范中，所有图片、坐标、ROI、target、box 以什么为基准？', '1280×720', ['1920×1080', '22528×22528', '窗口任意尺寸'], '资源规范说明所有图片和坐标均以 1280×720 为基准。'],
  ['开发者文档 / PR 规范', 'prGuidelines', 'MaaNTE 功能、修复与文档 PR 默认提交到哪个分支？', 'dev', ['main', 'master', 'release-only'], 'PR 规范基本原则说明目标分支默认是 dev。'],
  ['开发者文档 / PR 规范', 'prGuidelines', '需求尚未完全确定、实现还在探索时，应先创建什么 PR？', 'Draft PR', ['WIP 标题 PR', 'DMCA PR', 'Release PR'], 'PR 规范基本原则建议尽早 Draft。'],
  ['开发者文档 / PR 规范', 'prGuidelines', 'PR 描述中的验证记录不应只写什么？', '已测试', ['测试入口、设备/控制器、结论', '使用 Maa Pipeline Support 的结果', '完整运行次数'], 'PR 规范要求验证记录写清楚测试入口、设备/控制器、结论，不要只写“已测试”。'],
  ['开发者文档 / PR 规范', 'prGuidelines', '如果 PR 评审意见涉及设计方向，应先做什么？', '回复确认方案', ['立即大量改动', '关闭所有 Issue', '改成 WIP 标题'], '评审与合并章节说明设计方向意见应先回复确认方案，再继续大量改动。'],
  ['开发者文档 / DMCA 模板', 'dmca', 'DMCA / Abuse 模板建议哪两条都提？', 'DMCA 和 Abuse', ['feat 和 fix', 'OCR 和 DirectHit', 'F1 和 F2'], '官方入口章节建议 DMCA 处理版权、Abuse 处理安全风险，两条都提。'],
  ['开发者文档 / DMCA 模板', 'dmca', '提报前准备清单中，样本哈希要求是哪种？', 'SHA256', ['MD5 only', 'CRC32', 'Git commit subject'], '提报前准备清单列出样本哈希（SHA256）。'],
  ['开发者文档 / DMCA 模板', 'dmca', '提报前准备清单中，AGPL-3.0 违反点包括哪些示例？', '源码提供、修改说明、许可声明等', ['MIDI 速度、转调、谱子路径', '窗口分辨率、缩放、帧率', 'PR 标题、分支名、Draft 状态'], '提报前准备清单列出 AGPL-3.0 违反点示例：源码提供、修改说明、许可声明等。'],
  ['开发者文档 / 通用按钮', 'commonButtons', '通用按钮节点参考中说异环目前常用的可复用图形类按钮标志主要是哪类？', '关闭与主界面按钮一类', ['所有战斗按钮', '所有 MIDI 按键', '所有 GitHub 表单'], '通用按钮文档说明可复用图形类按钮标志较少，目前常用仅有关闭与主界面按钮一类。'],
  ['开发者文档 / 节点测试', 'nodeTesting', '节点测试文档当前状态是什么？', '自动测试待开发中', ['已经完整实现', '只用于 DMCA', '只测试 MIDI'], '节点测试文档说明自动测试待开发中。'],
  ['开发者文档 / 编码规范', 'codingStandards', '常见坑中，直接引用 __ScenePrivate* 节点应如何处理？', '引用 Interface/Scene/ 目录暴露的公共接口节点', ['继续直接引用私有节点', '改成 MIDI 文件路径', '写入 CNAME'], '编码规范常见坑表要求引用 Interface/Scene/ 目录暴露的公共接口节点。'],
  ['开发者文档 / PR 规范', 'prGuidelines', '新增任务选项时，PR 规范要求补充什么？', '对应 i18n 文案', ['浏览器收藏夹', '调试截图缓存', 'CNAME 记录'], 'PR 规范的 Pipeline/任务改动要求新增任务选项时补充对应 i18n 文案。'],
].forEach((item) => addQuestion(...item));

if (QUESTIONS.length !== 200) {
  throw new Error(`Expected 200 questions, got ${QUESTIONS.length}`);
}
