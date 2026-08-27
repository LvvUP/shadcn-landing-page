<div align="center">

# Shadcn Landing Page

**一个支持双语与多主题、帮助你更快讲清产品故事的 Next.js Landing Page 起始模板。**

[![CI](https://github.com/LvvUP/shadcn-landing-page/actions/workflows/ci.yml/badge.svg)](https://github.com/LvvUP/shadcn-landing-page/actions/workflows/ci.yml)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![i18n: zh-CN + en-US](https://img.shields.io/badge/i18n-zh--CN%20%2B%20en--US-f05a24)](./messages)
[![MIT License](https://img.shields.io/badge/license-MIT-f5c542)](./LICENSE)

[快速开始](#快速开始) · [English](./README.md) · [贡献指南](./CONTRIBUTING.md) · [交流讨论](https://github.com/LvvUP/shadcn-landing-page/discussions)

</div>

![展示双语、主题和页面区块能力的 Shadcn Landing Page 组件画布](./assets/readme/hero.svg)

Shadcn Landing Page 是一个基于 Next.js 16、React 19、Tailwind CSS 4、shadcn/ui 和 next-intl 的可定制营销网站起始模板。它为独立开发者和产品团队提供完整的页面叙事结构，同时保留可直接编辑的组件源码，不依赖封闭式页面生成器。

> [!NOTE]
> 这是前端起始模板，不是已托管的产品或后端服务。人物、客户评价、联系方式和价格均为明确标注的虚构演示内容。网站没有表单后端；提交时会把输入内容交给你配置的邮件应用生成草稿，后续处理受该应用的隐私规则约束。

## 为什么选择它

| 能力 | 你可以获得什么 |
| --- | --- |
| 双语服务端渲染 | 根据已保存的语言 Cookie，在服务端输出中文或英文内容。 |
| 完整主题支持 | 基于 `next-themes` 支持浅色、深色和跟随系统，并可通过 CSS 令牌定制。 |
| 完整产品叙事 | 12 个响应式区块，覆盖价值、信任、价格、联系和转化路径。 |
| 可编辑的 shadcn/ui | 本地组件源码可自由调整、替换和扩展，不受页面框架锁定。 |
| 可访问性基线 | 跳转到主内容、语义化区块、本地化控件标签、键盘友好组件和减少动态效果支持。 |
| 可重复质量门禁 | 语言键一致性、依赖兼容性、Lint、类型、生产构建、安全审计、CI 和 Dependabot。 |

## 包含的页面区块

| 发现 | 评估 | 转化 |
| --- | --- | --- |
| Hero | Benefits | Community |
| Sponsors | Features | Pricing |
| Services | Testimonials | Contact |
| Team | FAQ | Footer |

所有示例身份均为合成内容，页面也不再依赖远程头像或图库图片服务。

## 快速开始

需要 Node.js `>= 20.9.0`。

```bash
git clone https://github.com/LvvUP/shadcn-landing-page.git
cd shadcn-landing-page
npm ci
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

创建并运行生产构建：

```bash
npm run build
npm run start
```

## 定制项目

| 修改内容 | 文件位置 |
| --- | --- |
| 品牌色、圆角、字体和动效 | [`app/globals.css`](./app/globals.css) |
| 页面区块内容与顺序 | [`components/layout/sections/`](./components/layout/sections) 和 [`app/page.tsx`](./app/page.tsx) |
| 中英文文案 | [`messages/zh-CN.json`](./messages/zh-CN.json) 和 [`messages/en-US.json`](./messages/en-US.json) |
| 通用 UI 组件 | [`components/ui/`](./components/ui) |
| 本地化标题与简介 | 两份语言文件中的 `metadata` 命名空间 |
| 默认语言与时区 | [`lib/i18n-config.ts`](./lib/i18n-config.ts) |

模板使用 Cookie 保存语言，因此下一次服务端响应会使用已选择的语言。项目有意保持单一 URL；如果需要让不同语言页面分别被搜索引擎索引，请在部署架构中加入语言路由段。

## 质量与安全

执行与 CI 相同的完整检查：

```bash
npm run check
npm run audit
```

`npm run check` 会验证两份语言资源、阻止已知的不兼容依赖回归、执行 ESLint 与 TypeScript，并完成 Next.js 生产构建。依赖漏洞结果会随安全公告变化，因此每次发布前都应重新执行审计。

安全修复以最新的 `main` 分支为准。请按照 [SECURITY.md](./SECURITY.md) 私密报告漏洞，不要在公开 Issue 中披露。仓库还提供保守的安全响应头、受限的 GitHub Actions 权限、自动依赖更新，以及提醒贡献者不要提交密钥和隐私数据的模板。

## 正式部署前

- 替换所有演示文案、虚构身份、价格、联系方式和跳转链接。
- 配置正式环境的 Metadata、Canonical URL 和统计分析同意策略；仓库已提供可直接上传的 [Social Preview PNG](./assets/readme/social-preview.png)。
- 连接表单前，明确验证、滥用防护、数据保留和隐私处理方式。
- 验证移动端、键盘操作、两种语言和全部主题偏好。
- 保留[第三方许可声明](./THIRD_PARTY_NOTICES.md)，检查素材授权，并重新运行 `npm run check` 与 `npm run audit`。

## 项目结构

```text
shadcn-landing-page/
├── app/                    # App Router、Metadata、布局和全局主题
├── assets/readme/          # 项目原生 README 视觉素材
├── components/
│   ├── layout/             # 导航、语言/主题控件和页面区块
│   └── ui/                 # 可编辑的 shadcn/ui 组件
├── lib/                    # 语言配置和通用工具
├── messages/               # zh-CN 与 en-US 语言资源
├── scripts/                # 确定性项目检查
├── .github/                # CI、Dependabot 和贡献模板
├── CONTRIBUTING.md
├── SECURITY.md
├── THIRD_PARTY_NOTICES.md
└── NOTICE.md
```

## 参与贡献与项目来源

欢迎提交聚焦的 Bug 修复、可访问性改进、文档优化和可复用页面区块。提交 Pull Request 前请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

本项目延续自 [nobruf/shadcn-landing-page](https://github.com/nobruf/shadcn-landing-page)，其代码基于 [leoMirandaa/shadcn-vue-landing-page](https://github.com/leoMirandaa/shadcn-vue-landing-page)。上游版权声明和现代化改造记录保留在 [NOTICE.md](./NOTICE.md) 中。

项目依据 [MIT License](./LICENSE) 开源。

<div align="center">

如果这个模板为你节省了时间，一个 **Star** 可以帮助更多开发者发现它。

</div>
