const QUESTIONS = [
  {
    category: '用户文档 / 快速开始',
    question: '普通用户通常推荐选择哪类 MaaNTE 版本？',
    options: ['正式版', '公测版 beta', '内测版 alpha', '任意 CI 构建'],
    answer: 0,
    explanation: '正式版相对稳定，通常推荐普通用户选择。',
    source: 'https://maante.org/zh_cn/userdocs/intro.html'
  },
  {
    category: '用户文档 / 快速开始',
    question: '带有 beta 字样的 MaaNTE 版本通常属于哪一类？',
    options: ['正式版', '公测版', '内测版', '文档版'],
    answer: 1,
    explanation: '快速开始中说明 beta 字样属于公测版，更新较快但稳定性通常低于正式版。',
    source: 'https://maante.org/zh_cn/userdocs/intro.html'
  },
  {
    category: '用户文档 / 快速开始',
    question: '安装 MaaNTE 时，推荐将软件放在哪类目录中？',
    options: ['纯英文目录', '包含中文用户名的桌面目录', '任意带全角符号的目录', '系统回收站目录'],
    answer: 0,
    explanation: '文档强调安装路径应为纯英文目录，后续 FAQ 也把非英文/特殊符号路径列为异常原因之一。',
    source: 'https://maante.org/zh_cn/userdocs/intro.html'
  },
  {
    category: '用户文档 / 快速开始',
    question: '启动 MaaNTE.exe 时推荐使用什么权限？',
    options: ['普通用户权限', '管理员身份运行', '访客账户权限', '安全模式权限'],
    answer: 1,
    explanation: '快速开始与 FAQ 均建议以管理员身份运行 MaaNTE。',
    source: 'https://maante.org/zh_cn/userdocs/intro.html'
  },
  {
    category: '用户文档 / 快速开始',
    question: '非官方渠道获取 MaaNTE 可能带来的问题是什么？',
    options: ['可能存在病毒风险，也可能不是最新版本', '一定会自动更新到最新版', '一定比官方版本更稳定', '可以绕过所有配置步骤'],
    answer: 0,
    explanation: '快速开始提醒非官方渠道的软件可能有病毒风险，也可能不是最新版本。',
    source: 'https://maante.org/zh_cn/userdocs/intro.html'
  },
  {
    category: '常见问题 / 运行环境',
    question: '启动弹窗提示 “Could not find the WebView2 Runtime.” 通常表示缺少什么？',
    options: ['WebView2 Runtime', '显卡驱动控制面板', 'Git 命令行', 'Python 源码'],
    answer: 0,
    explanation: 'FAQ 指出该弹窗原因是缺少 WebView2，应到 Microsoft Edge WebView2 开发者页面下载安装。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 运行环境',
    question: 'MaaNTE 1.0.0 及之后版本改用 MXU 后，关于 .NET 的说法哪项正确？',
    options: ['仍然必须安装 .NET 10.0 Desktop Runtime', '不再需要 .NET 运行库', '必须卸载 WebView2', '必须安装 Android SDK'],
    answer: 1,
    explanation: 'FAQ 说明 .NET 缺失属于 MFAA 旧版本特有问题，1.0.0 及之后改用 MXU，不再需要 .NET。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 连接',
    question: '无法开始任务并提示不支持当前控制器时，应优先在哪里调整？',
    options: ['右上角“连接设置”', '浏览器收藏夹', 'Windows 注册表编辑器', 'GitHub Issues 模板'],
    answer: 0,
    explanation: 'FAQ 建议在右上角“连接设置”中选择合适控制器。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 连接',
    question: '无法连接窗口时，下列哪项是文档建议检查的内容？',
    options: ['是否已经打开游戏《异环》', '是否关闭了所有显示器', '是否删除了 config 文件夹', '是否安装了手机模拟器'],
    answer: 0,
    explanation: 'FAQ 建议确认已经打开游戏《异环》，并确认 MaaNTE 以管理员身份运行。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 资源加载',
    question: '资源加载失败时，文档建议如何处理？',
    options: ['删除 MaaNTE 目录下全部内容后重新解压，可保留 config 文件夹', '只修改电脑时区', '把游戏窗口最小化', '卸载浏览器'],
    answer: 0,
    explanation: 'FAQ 建议删除 MaaNTE 目录下全部内容后重新解压，config 文件夹可以保留。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 安全',
    question: '出现 “HD_python.exe” 窗口时，FAQ 认为电脑可能存在什么情况？',
    options: ['蠕虫病毒或部分外挂工具影响', '网络坐标 API 正常运行', '任务顺序设置正确', 'WebView2 自动升级'],
    answer: 0,
    explanation: 'FAQ 认为这可能与蠕虫病毒或部分外挂工具有关，建议尽快杀毒并重装系统；外挂导致的问题项目方不受理。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 点击操作',
    question: '无法正常点击或操作时，下列哪项是建议排查项？',
    options: ['确认 Windows 屏幕缩放为 100%', '将游戏窗口永久最小化', '把 MaaNTE 放到带全角符号的路径', '关闭所有日志面板'],
    answer: 0,
    explanation: 'FAQ 建议检查纯英文路径、管理员权限、屏幕缩放 100%、是否连接正确窗口等。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 控制器',
    question: '使用“桌面端-默认”或“桌面端-前台”控制器时，哪种现象在 FAQ 中被说明为正常？',
    options: ['抢占鼠标', '自动删除配置', '强制关闭游戏账号', '永久禁用日志'],
    answer: 0,
    explanation: 'FAQ 说明使用桌面端-默认/前台控制器时，抢占鼠标属于正常情况。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 控制器',
    question: '使用“桌面端-后台”控制器时，FAQ 中哪种现象被说明为正常？',
    options: ['窗口乱飞', '必须安装 .NET', '不能读取任何配置', '自动上传数据集'],
    answer: 0,
    explanation: 'FAQ 说明桌面端-后台控制器通过移动窗口来避免鼠标乱飞，因此窗口乱飞属于正常情况。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 任务失败',
    question: '任务频繁失败时，FAQ 建议关闭哪些游戏画质相关功能？',
    options: ['插帧、超分辨率等影响画质的功能', '所有声音输出设备', '键盘输入法', 'GitHub Actions'],
    answer: 0,
    explanation: 'FAQ 建议关闭游戏内插帧、超分辨率等影响画质的功能。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 自动钓鱼',
    question: '自动钓鱼无法购买鱼饵时，可以先尝试什么？',
    options: ['降低“鱼饵识别阈值”', '提高 Windows 缩放到 200%', '删除所有日志', '切换到开发者分支'],
    answer: 0,
    explanation: 'FAQ 建议自动钓鱼无法购买鱼饵时可尝试降低“鱼饵识别阈值”。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '常见问题 / 自动钓鱼',
    question: '如果自动钓鱼仍无法自动买鱼饵，FAQ 建议手动购买多少以上鱼饵后关闭自动购买？',
    options: ['100 个以上', '500 个以上', '1000 个以上', '10000 个以上'],
    answer: 2,
    explanation: 'FAQ 建议自行购买足够鱼饵后关闭自动购买功能，建议数量为 1000 个以上。',
    source: 'https://maante.org/zh_cn/userdocs/FAQ.html'
  },
  {
    category: '问题排查 / 任务机制',
    question: 'MaaNTE 中每个自动化功能通常被称为什么？',
    options: ['任务', '标签页', '仓库', '控制器'],
    answer: 0,
    explanation: '问题排查手册说明 MaaNTE 中每个自动化功能被称为一个“任务”。',
    source: 'https://maante.org/zh_cn/userdocs/trouble_shooting.html'
  },
  {
    category: '问题排查 / 任务机制',
    question: 'MaaNTE 的任务执行顺序是怎样的？',
    options: ['从任务列表上到下依次执行', '所有任务同时并行执行', '按任务名称拼音随机执行', '只执行列表最后一个任务'],
    answer: 0,
    explanation: '问题排查手册说明 MaaNTE 会按照任务列表顺序依次执行任务。',
    source: 'https://maante.org/zh_cn/userdocs/trouble_shooting.html'
  },
  {
    category: '问题排查 / 任务机制',
    question: '为什么 MaaNTE 不支持多个任务同时执行？',
    options: ['图像识别和模拟键鼠操作会互相干扰', 'GitHub Pages 不支持并行', 'AGPL-3.0 禁止并行任务', 'WebView2 不允许多个窗口'],
    answer: 0,
    explanation: '问题排查手册说明不支持并行任务，是因为图像识别和模拟键鼠操作会互相干扰。',
    source: 'https://maante.org/zh_cn/userdocs/trouble_shooting.html'
  },
  {
    category: '开发者文档 / 阅读路线',
    question: '第一次参与 MaaNTE 开发时，开发者文档建议优先阅读哪部分？',
    options: ['快速开始', 'DMCA / Abuse 提报模板', '在线地图工具', '用户 FAQ'],
    answer: 0,
    explanation: '开发者文档首页建议首次参与开发优先阅读“快速开始”。',
    source: 'https://maante.org/zh_cn/develop/'
  },
  {
    category: '开发者文档 / PR',
    question: '提交 PR 前应重点查看哪份文档？',
    options: ['PR 规范', '常见问题', '功能介绍', '在线地图说明'],
    answer: 0,
    explanation: '开发者文档把“PR 规范”作为提交 PR 前应阅读的内容。',
    source: 'https://maante.org/zh_cn/develop/pull-request-guidelines.html'
  },
  {
    category: '开发者文档 / Pipeline',
    question: '编写或修改 Pipeline JSON 时，应主要参考哪份文档？',
    options: ['Pipeline JSON 编写指南', '用户快速开始', '问题排查手册', 'Bilibili 主页'],
    answer: 0,
    explanation: '开发者文档首页列出 Pipeline JSON 编写指南用于 Pipeline 编写。',
    source: 'https://maante.org/zh_cn/develop/pipeline-guide.html'
  },
  {
    category: '开发者文档 / 编码规范',
    question: '想了解项目编码要求，应查阅哪份文档？',
    options: ['编码规范', '常见问题', '快速开始用户版', 'Mirror 酱说明'],
    answer: 0,
    explanation: '开发者文档首页把编码要求对应到“编码规范”。',
    source: 'https://maante.org/zh_cn/develop/coding-standards.html'
  },
  {
    category: '开发者文档 / Custom',
    question: '需要编写 Python 自定义逻辑时，应优先阅读哪篇文档？',
    options: ['Custom 动作与识别', 'PR 规范', '问题排查手册', '功能介绍总览'],
    answer: 0,
    explanation: '开发者文档指出 Python 自定义逻辑应查阅 Custom 动作与识别。',
    source: 'https://maante.org/zh_cn/develop/custom-action.html'
  },
  {
    category: '开发者文档 / 场景',
    question: '从任意界面导航到目标场景的机制主要对应哪个组件？',
    options: ['场景管理器', 'WebView2 Runtime', 'Mirror 酱', 'GitHub Pages'],
    answer: 0,
    explanation: '场景管理器用于从任意界面导航到目标场景。',
    source: 'https://maante.org/zh_cn/develop/scene-manager.html'
  },
  {
    category: '开发者文档 / 场景',
    question: '判断当前画面所在场景时，应参考哪个组件/文档？',
    options: ['InScene 场景识别', '自动钓鱼阈值', '定时执行', '数据收集'],
    answer: 0,
    explanation: 'InScene 场景识别用于判断当前画面所在场景。',
    source: 'https://maante.org/zh_cn/develop/in-scene.html'
  },
  {
    category: '开发者文档 / 调试',
    question: '调试单个节点、验证识别是否稳定命中时，应查看哪份文档？',
    options: ['节点测试', '常见问题', '用户快速开始', '在线地图工具'],
    answer: 0,
    explanation: '节点测试文档说明如何编写和运行节点测试，目标是验证识别是否稳定命中。',
    source: 'https://maante.org/zh_cn/develop/node-testing.html'
  },
  {
    category: '开发者文档 / 路径',
    question: '场景管理器的资源路径是什么？',
    options: ['Interface/Scene/', 'Common/Button/', 'agent/custom/action/Common/', 'assets/resource/model/ocr/'],
    answer: 0,
    explanation: '开发者文档将场景管理器路径列为 Interface/Scene/。',
    source: 'https://maante.org/zh_cn/develop/scene-manager.html'
  },
  {
    category: '开发者文档 / 路径',
    question: 'InScene 场景识别配置文件位于哪里？',
    options: ['Interface/Scene/Status.json', 'Common/Button/index.json', 'agent/main.py', 'README.md'],
    answer: 0,
    explanation: '开发者文档指出 InScene 场景识别配置位于 Interface/Scene/Status.json。',
    source: 'https://maante.org/zh_cn/develop/in-scene.html'
  },
  {
    category: '开发者文档 / 路径',
    question: '通用按钮节点资源位于哪个路径？',
    options: ['Common/Button/', 'Interface/Scene/', 'agent/utils/', 'docs/eng/'],
    answer: 0,
    explanation: '开发者文档将通用按钮路径列为 Common/Button/。',
    source: 'https://maante.org/zh_cn/develop/common-buttons.html'
  },
  {
    category: '开发者文档 / 路径',
    question: '通用 Python 工具所在路径是什么？',
    options: ['agent/custom/action/Common/', 'Interface/Scene/', 'Common/Button/', 'docs/zh_cn/userdocs/'],
    answer: 0,
    explanation: '开发者文档列出通用 Python 工具路径为 agent/custom/action/Common/。',
    source: 'https://maante.org/zh_cn/develop/custom-action.html'
  },
  {
    category: '开发者文档 / API',
    question: '网络坐标 API 对应模块名是什么？',
    options: ['nte_coordinate_api', 'webview2_runtime', 'mxu_tabs', 'maa_pages'],
    answer: 0,
    explanation: '开发者文档将网络坐标 API 对应模块列为 nte_coordinate_api。',
    source: 'https://maante.org/zh_cn/develop/coordinate-capture-api.html'
  },
  {
    category: '开发者文档 / 导航',
    question: '本地路线寻路入口文件是什么？',
    options: ['LocalRouteNavigation.json', 'Status.json', 'interface.json', 'package.json'],
    answer: 0,
    explanation: '开发者文档列出本地路线寻路入口文件为 LocalRouteNavigation.json。',
    source: 'https://maante.org/zh_cn/develop/local-route-navigation.html'
  },
  {
    category: '开发者文档 / Custom',
    question: 'Custom 动作开发主要面向哪类扩展？',
    options: ['Python CustomAction', '浏览器插件', 'GitHub Pages 主题', 'Windows 服务驱动'],
    answer: 0,
    explanation: 'Custom 动作与识别文档面向 Python CustomAction，并涉及 Controller API 与 Pipeline 集成。',
    source: 'https://maante.org/zh_cn/develop/custom-action.html'
  },
  {
    category: '开发者文档 / Custom',
    question: '通用 Python 工具中提到的能力示例是哪一个？',
    options: ['alt_click', 'git_tag_only', 'webview_setup', 'discord_bot'],
    answer: 0,
    explanation: '开发者文档在通用 Python 工具中提到 alt_click 等能力。',
    source: 'https://maante.org/zh_cn/develop/custom-action.html'
  },
  {
    category: '开发者文档 / 组件',
    question: '常用可复用 Pipeline 组件集中在哪一部分？',
    options: ['Pipeline 基础组件', '用户 FAQ', '软件下载页', '问题排查手册'],
    answer: 0,
    explanation: '开发者文档将常用可复用 Pipeline 组件集中在 Pipeline 基础组件部分。',
    source: 'https://maante.org/zh_cn/develop/'
  },
  {
    category: '开发者文档 / 高级组件',
    question: '开发者文档高级组件参考中，哪些组件状态为开发中？',
    options: ['自动战斗和自动导航', 'WebView2 和 .NET', 'QQ群下载和百度网盘', '用户文档和功能介绍'],
    answer: 0,
    explanation: '开发者文档高级组件参考中列出自动战斗和自动导航，状态为开发中。',
    source: 'https://maante.org/zh_cn/develop/'
  },
  {
    category: '开发者文档 / 外部参考',
    question: 'MaaFramework 官方哪份资料可作为 Pipeline 协议参考？',
    options: ['MaaFramework Pipeline 协议', 'Microsoft Edge WebView2 页面', 'GitHub Pages 文档', 'Windows Defender 设置'],
    answer: 0,
    explanation: '开发者文档提供 MaaFramework Pipeline 协议作为外部参考。',
    source: 'https://maafw.com/docs/3.1-PipelineProtocol/'
  },
  {
    category: '开发者文档 / 快速开始',
    question: '开始开发前，文档建议先阅读 MaaFramework 开发文档的哪个章节？',
    options: ['快速开始', '发布说明', '商店页面', '用户协议'],
    answer: 0,
    explanation: '“如何开发”文档开头建议先阅读 MaaFramework 开发文档的快速开始章节。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / 快速开始',
    question: '开发前提中默认使用什么作为版本控制工具？',
    options: ['git', 'SVN', 'FTP', '网盘同步'],
    answer: 0,
    explanation: '开发文档前提之一是使用 git 作为版本控制工具。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / 快速开始',
    question: '项目托管和 CI/CD 工作流主要基于哪个平台？',
    options: ['GitHub 与 GitHub Actions', '百度网盘', 'Discord Bot', 'Microsoft Store'],
    answer: 0,
    explanation: '开发前提提到使用 GitHub 托管代码，并使用 GitHub Actions 相关 CI/CD 工作流。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / OCR',
    question: 'OCR 资源文件 ppocr_v5.zip 应解压到哪个目录？',
    options: ['assets/resource/model/ocr/', 'docs/zh_cn/userdocs/', 'Common/Button/', 'Interface/Scene/'],
    answer: 0,
    explanation: '开发快速开始要求将 OCR 资源解压到 assets/resource/model/ocr/，包含 det.onnx、keys.txt、rec.onnx。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / OCR',
    question: '关于 OCR 资源文件上传代码仓库，下列说法正确的是？',
    options: ['不需要上传，.gitignore 已忽略且发布 workflow 会自动配置', '必须手动提交到仓库', '只能上传到 docs 目录', '必须放在 GitHub Issues 附件中'],
    answer: 0,
    explanation: '开发快速开始警告不需要将 OCR 资源上传到代码仓库，.gitignore 已忽略该目录。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / 开发内容',
    question: '进行业务开发时，文档主要建议修改哪些内容？',
    options: ['assets 目录下的 resource 资源文件以及 interface.json', 'Windows 注册表和系统 hosts', '浏览器缓存和收藏夹', 'GitHub 账户头像'],
    answer: 0,
    explanation: '开发步骤建议按业务需求修改 assets 目录下 resource 资源文件以及 interface.json，并使用开发工具调试。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / 发布',
    question: '开发文档中，CI 自动打包和发布通常由什么触发？',
    options: ['推送 tag', '打开用户 FAQ', '修改 Windows 缩放', '关闭游戏窗口'],
    answer: 0,
    explanation: '开发文档说明 CI 检测到 tag 会自动进行打包和发布。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / 发布',
    question: '第一次发布前，GitHub 仓库 Actions 权限应设置为什么？',
    options: ['Read and write permissions', '只读权限', '禁用 Actions', '删除所有 secrets'],
    answer: 0,
    explanation: '开发文档提示第一次操作前，需要在 Settings - Actions - General 中设置 Read and write permissions 并保存。',
    source: 'https://maante.org/zh_cn/develop/getting-started.html'
  },
  {
    category: '开发者文档 / 声明',
    question: 'MaaNTE 使用什么开源协议发布？',
    options: ['AGPL-3.0', 'MIT', 'Apache-2.0', 'GPL-2.0-only'],
    answer: 0,
    explanation: '用户文档和开发者文档均声明 MaaNTE 使用 AGPL-3.0 协议发布。',
    source: 'https://maante.org/zh_cn/develop/'
  },
  {
    category: '开发者文档 / 声明',
    question: '关于 MaaNTE 与《异环》开发商及发行商的关系，哪项正确？',
    options: ['MaaNTE 与其没有关联', 'MaaNTE 是官方发行商产品', 'MaaNTE 由游戏服务器内置', 'MaaNTE 只在商业授权下可用'],
    answer: 0,
    explanation: '文档声明 MaaNTE 与《异环》的开发商及发行商没有关联。',
    source: 'https://maante.org/zh_cn/develop/'
  },
  {
    category: '开发者文档 / 项目性质',
    question: 'MaaNTE 的项目性质是什么？',
    options: ['开源项目', '闭源商业插件', '官方游戏客户端', '硬件设备驱动'],
    answer: 0,
    explanation: '文档多处声明 MaaNTE 是开源项目。',
    source: 'https://maante.org/zh_cn/develop/'
  }
];
