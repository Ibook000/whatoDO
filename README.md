# WhatDO

WhatDO 是一个基于 Vue 3、TypeScript 和 Vite 构建的日记与时间管理应用，支持前后端分离。前端采用现代化技术栈，后端使用 Python 实现 API 服务。

## 项目简介

- 支持日记编辑、时间线展示、统计分析等功能。
- 前端使用 Vue 3 + TypeScript + Vite，界面简洁高效。
- 后端基于 Python，提供 API 支持。
- 支持 Tailwind CSS 快速样式开发。

## 主要功能

- 日记内容编辑与保存
- 时间线视图展示历史记录
- 统计视图分析数据
- 响应式设计，适配多端

## 技术栈

- 前端：Vue 3, TypeScript, Vite, Tailwind CSS
- 后端：Python (server 目录)
- 依赖管理：npm

## 目录结构

```
.
├── public/                # 静态资源
├── server/                # 后端 Python API
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
├── src/                   # 前端源码
│   ├── assets/            # 图片等资源
│   ├── components/        # 组件
│   ├── services/          # API 服务
│   ├── types/             # 类型定义
│   ├── App.vue
│   └── main.ts
├── package.json           # 前端依赖
├── vite.config.ts         # Vite 配置
└── README.md              # 项目说明
```

## 快速开始

### 前端

```bash
npm install
npm run dev
```

### 后端

```bash
cd server
pip install -r requirements.txt
python main.py
```

## 贡献

欢迎提交 issue 和 PR！
