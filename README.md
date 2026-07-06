# MaaNTE Quiz

MaaNTE 用户群入群验证静态网页。

- 题库：200 道单选题
  - 覆盖功能介绍、问题排查与开发者文档
- 每次固定随机抽取 20 道题
- 选项顺序会随机打乱
- 通过线固定为 95%

## 本地预览

直接打开 `index.html`，或用任意静态文件服务器预览。

## 题库维护

题库位于 `questions.js`，每道题包含：

- `category`：分类
- `question`：题干
- `options`：选项数组
- `answer`：正确选项下标（从 0 开始）
- `explanation`：提交后用于错题回顾的解释
- `source`：参考文档链接
