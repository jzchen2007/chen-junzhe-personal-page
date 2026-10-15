# 关于我与我的未来

作者：陈俊哲  
班级：软产2501  
年级 / 专业：大二 / 软件工程  
考核任务一：个人主页设计与未来规划展示

源码仓库：[jzchen2007/chen-junzhe-personal-page](https://github.com/jzchen2007/chen-junzhe-personal-page)  
在线网页：[陈俊哲的个人主页](https://jzchen2007.github.io/chen-junzhe-personal-page/)

## 本地运行

直接用现代浏览器打开 `dist/index.html` 即可，无需安装依赖、编译或后端服务。也可以用 VS Code Live Server 打开 `dist` 文件夹预览。

## 文件结构

- `dist/index.html`：语义化页面结构与个人资料。
- `dist/styles.css`：配色、响应式布局、书本插画与滚动吸附。
- `dist/script.js`：导航展开折叠、章节定位、高亮、回到顶部及 QQ 号复制。
- `dist/assets/lucide.min.js`：本地 Lucide 图标库。
- `dist/assets/LUCIDE-LICENSE`：图标库许可证。
- `dist/assets/favicon.svg`：自主绘制的文字站点图标。
- `.openai/hosting.json`：网站托管配置，不影响本地打开。
- `.github/workflows/pages.yml`：将 `dist` 文件夹自动发布到 GitHub Pages。

## 技术与主要功能

使用原生 HTML + CSS + JavaScript，结构、样式、脚本分别保存在独立文件中。CSS 使用 Grid、Flex、媒体查询和原生滚动吸附。

1. 三大板块：自我介绍、未来规划、想学什么。导航平滑跳转到对应章节，滚动时更新顶部导航及右侧圆点。
2. 导航折叠展开：电脑默认展开，手机默认折叠，支持 Escape 关闭；切换屏幕宽度时更新状态。
3. 回到顶部：向下阅读后显示，点击返回自我介绍。
4. 三阶段行动时间轴：桌面横向展示，手机转为纵向时间轴。所有阶段均为未来计划，不表示已完成。
5. QQ 复制：点击联系方式复制号码，成功后显示反馈；浏览器限制剪贴板时提供兼容方式或手动复制提示。
6. 吸附阅读：使用 `scroll-snap-type: y proximity`，靠近章节起点时吸附。正文较长时仍可正常阅读，手机上不强制一屏容纳所有内容。
7. 无障碍：语义化标题、键盘焦点样式、跳到主要内容、按钮状态说明、状态提示；遵循系统减少动态效果偏好。

## 个人实现与特色

暖白纸张底色与墨绿配色，以阅读笔记为视觉主题。书本插画由 CSS 绘制，无需在线图片。通过不同的排版组织个人介绍、未来时间轴和学习目标，避免三部分重复堆砌卡片。基础内容与交互无需网络即可使用。

行动阶段来自个人计划；将原始计划细化为可展示的准备事项，不虚构竞赛、科研或项目成果。

## 第三方资源来源

- [Lucide 0.468.0](https://lucide.dev/)：ISC 许可证，本地文件来自 `https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js`，许可证已随项目保留。
- [Google Fonts：Noto Serif SC 与 DM Sans](https://fonts.google.com/)：开放字体，SIL Open Font License，通过 Google Fonts 样式接口加载。无网络或服务无法访问时自动退回系统宋体、微软雅黑及通用字体，不影响内容和交互。
- 不使用完整网页模板，不依赖 UI 框架；页面布局、装饰插画与交互为本项目编写。

## 提交提示

整个项目文件夹均可提交；入口在 `dist/index.html`。仓库使用 GitHub Actions 将 `dist` 自动部署到 GitHub Pages，向 `main` 分支推送修改后会自动更新网页。

作者已选择公开仓库与网页，可向评审提交本 README 顶部的源码仓库与在线网页地址。建议现场讲解导航事件、滚动高亮、时间轴布局、响应式适配及复制反馈的实现。
