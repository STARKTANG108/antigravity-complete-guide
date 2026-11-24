# 最强 AI Agent：Google Antigravity【完全攻略】（精校中文版）

> 情报基准日期：2026 年 11 月 23 日  
> 原稿说明：依据日文长文《最強のAIエージェントGoogle Antigravity【完全網羅】》全文精校编译，完整保留价格、基准测试、操作步骤、封号边界与 3 套实战提示词。

## 导言：一杯咖啡差价换来的 AI 全家桶

2026 年 11 月黑色星期五促销期间，**Google AI Pro** 年付方案迎来最高半价优惠——首年仅 **14,500 日元（含税）**，折合每月约 **1,208 日元**（较常规月付 2,900 日元/月、全年 34,800 日元直省 20,300 日元）。

这一份订阅直接打包了以下核心权益：
- 搭载全球多项第一新主力模型 **Gemini 4 Neon** 的 **Google Antigravity** 本体
- 同一界面免加价直接调用 **Claude Opus 5.5** 与 **Claude Sonnet 5.5**（付费正式版 Pro/Ultra）
- 影音创作工作室 **Google Flow**（每月 1,000 积分）＋ 低配电脑也能借用 96GB 云端 GPU 做视频的 **Google Colab**（每月 200 算力单元）
- 单买 780 日元/月的 **YouTube Premium Lite**（常规视频免广告、支持后台播放与离线缓存）
- 可与最多 5 位家人共享的 **5TB 存储空间** ＋ Gmail / 文档 / 表格等 Workspace 原生 Gemini 集成

扣除 YouTube Premium Lite 的 780 日元后，净差价仅 **428 日元/月**（一杯咖啡的钱）。本文本身亦是借助 Google Antigravity 上的 Gemini 4 Neon（思考等级 XHigh）核查一手资料撰写的实证样本。

---

## 第 1 章：为什么现在「Google Antigravity」是最强 AI Agent？

### 从“代码编辑器”进化为 5 大入口联动的自主操作系统
自 2026 年 5 月 Google I/O 发布 **Antigravity 2.0** 起，它不再只是魔改版代码编辑器，而是底层共享同一套大脑、权限、Skills 与 MCP 配置，同时联动 5 大入口的综合平台：
1. **Antigravity App**：多 Agent 并行指挥台，v2.30.0+ 支持个人账号切换 `Knowledge Work` 与 `Software Engineering` 双布局，侧栏 PDF 阅读器可划词 `Quote` / `Comment` 精准派发修改。
2. **Antigravity CLI (`agy`)**：命令行极速执行、脚本自动化与常驻守护进程。
3. **官方 IDE 扩展 & Antigravity IDE**：无缝集成 VS Code、JetBrains、Xcode、Zed、Android Studio。
4. **Antigravity Python SDK**：`pip install google-antigravity` 直接嵌入自有程序。
5. **ACP（Agent Client Protocol）**：通过官方 `antigravity-acp` 二进制对接 T3 Code 等外部控制台。

### 2026 年 11 月重磅更新连发
- **`/btw` 侧边分支与转正合并**：不中断主任务即可分叉出继承上下文的侧边标签页，实读文件核查且不污染主历史；满意的备选方案可直接 `Insert into main conversation` 汇入或直接晋升（Promote）为主对话。
- **内置浏览器 (`/browser`)**：无需另开 Chrome，多标签并行验屏截图，遇登录页可临时交还人工验证。
- **OpenSSH (`v2.33.0+`)**：专属窗口直连远程 Linux 服务器常驻运行。
- **Voice Mode（Gemini Live）**：麦克风或 CLI 按 `F6` 语音交互、纠偏与审批（高危操作仍须界面点击确认）。
- **四阶多智能体**：后台 `Subagent` → 并行分工 + `@verifier` 验收 `/swarm`（**免费可用**）→ 攻坚 `/boost` → 带审计闸门的多日大重构 `/teamwork`。
- **自主与定时**：`/goal`、`/grill-me`、`/run-workflow`、`/schedule` & `Automations`。

---

## 第 2 章：黑五半价与全权益拆解（含 Colab 96GB GPU & 月领 API 额度）

### 2026 黑五关键条件
- 老用户抢先购自约 11 月 20 日起至 **2026 年 11 月 26 日（周四）**；已有月付转年付享半价并获按比例退差报告。
- 新用户预计在 **11 月 27 日前后** 正式黑五档期开放折扣。
- Google AI Ultra 与单月付费不参与直降；半价仅限首年 12 个月，第 2 年按常规 29,000 日元/年自动续费。

### 日本区全套餐对照表

| 套餐 | 含税价格 | 存储与核心模型 | 附带权益 |
| --- | --- | --- | --- |
| **Free** | 0 日元 | Gemini 3.8 Flash、Tab 补全不限量、CLI、每周限额 `/swarm`（免费档 Claude 4.6 系与 GPT-OSS-120b 预定 2026/11/30 终止） | Flow 每日 50 积分 |
| **Google AI Plus** | 725 日元/月 | 400GB；不含 Neon 与 Claude 5.5 | Flow 200 积分/月 |
| **Google AI Pro** | 常规 2,900/月 · 年付 29,000（**黑五首年 14,500，折合 1,208/月**） | **5TB（5 人共享）**；Neon / Argon / Hydrogen / Orchestrator；正式付费解锁 **Claude Opus 5.5 & Sonnet 5.5** | Flow 1,000 积分/月 ＋ Colab 200 单元/月 ＋ YouTube Premium Lite ＋ API $10/月 ＋ Workspace / Home / Health |
| **Google AI Ultra 5x** | 14,500 日元/月 | 20TB；约 Pro 5 倍配额；解锁 **Gemini 4 Carbon** | Flow 10,000 积分档 ＋ Colab 高阶 GPU ＋ YouTube Premium 家庭版（5 人）＋ API $40/月 |
| **Google AI Ultra 20x** | 32,000 日元/月 | 30TB；约 Pro 20 倍优先配额；Carbon 全速 | Flow 25,000 积分档 ＋ Colab 2,000 单元/月 ＋ YouTube Premium 家庭版 ＋ API $100/月 |
| **Gemini Enterprise** | $30+/席位/月或按量 | 企业级治理、审计日志、数据不用于训练 | 面向法人团队（不享个人消费权益） |

### 隐藏神福利：Google Colab 96GB Blackwell G4 云端 GPU
- 2026 年秋起，Pro 自动附赠 **200 算力单元/月**（有效期 90 天），Ultra 附赠 **2,000 算力单元/月**，可直接租用 96GB 显存的 NVIDIA Blackwell **G4 (RTX PRO 6000 Blackwell Server Edition)**。
- **实测参考（ComfyUI + MiniMax H3 32kHz 立体声 + RealESRGAN）**：生成 45 秒 1080p 有声连贯短片（4 幕 1280×704 衔接 + 超分），总生成 16 分 07 秒、超分约 6 分钟、总耗约 **3.7~4.2 单元** → 理论月产能 Ultra 达 **470+ 条**、Pro 亦可达 **45+ 条**。
- 可借 `google-colab-cli` + `comfy-mcp` 由本地 Antigravity 全自动启动、通过 `aria2` 拉权重到临时盘、用 `colab ssh` 转发 8188 端口监工并在完成后执行 `colab stop` 及时止损。

### 每月 $10~$100 Gemini API 额度 3 步领取备忘录
- **前提机制**：Pro 每月 $10 / Ultra 5x 每月 $40 / Ultra 20x 每月 $100，可滚存 12 个月（仅主账号）。首次需预充 **800 日元（最低 $5）** 保持正余额；消耗时优先扣除每月免费赠金，自动充值保持关闭即可；页面右侧的「$300 欢迎赠金」系首户免费试用，不会扣费。
- **Step 1**：打开 <https://aistudio.google.com/> → Billing → 购买额度充值 800 日元 → 确认 `有料 1 (Tier 1)` 与 `¥800`。
- **Step 2**：用同一 Google 账号打开 <https://developers.google.com/profile/u/me> → 填必填姓名创建档案 → 确认 `Google Developer Program premium tier` 徽章。
- **Step 3**：打开 <https://developers.google.com/program/my-benefits> → 找到月度 GenAI/Cloud 赠金卡 → 选择 Step 1 结算账号 → 勾选「始终使用此结算账号」→ 应用。

---

## 第 3 章：「Gemini 4 Neon」实测表现与 Claude 5.5 同屏绝杀

- **2026 年 11 月 18 日**发布，提供 `Low / Medium（默认）/ High / Extra (xhigh)` 4 档思考深度。
- **权威跑分**：Coding Agent Index 第 1（58.6 / xhigh ~59.0）、Zapier AutomationBench 第 1（56.3%）、Intelligence Index xhigh 61 分（第 3）、Vals Index 第 2（高于 Claude Opus 5.5）、AutoBaxBench Hard 76%（SOTA）、SEC-bench Pro 90.5%、CWE-bench v2 70.7%（超 Carbon 3.4 点）。
- **SWE-sweep 框架效应**：同一套 Neon 权重在简易框架 `mini-SWE` 仅 12.8%，在原生 Antigravity 跃升至 **39.0%（约 3 倍）**。
- **API 价格**：输入 $3.00 / 输出 $15.00（每百万 Token），缓存输入 95% OFF 仅 $0.15（对比 Claude Opus 5.5 约 $4 / $20 档位）；标准 High 较 Carbon 单任务低约 32%。
- **Orchestrator 双引擎**：默认 Planner（Neon 只读规划＋终审）＋ Executor（Hydrogen 极速施工与测试），连错 2 次自动回退 Neon 修补计划。
- **写作与 Claude 5.5 同屏切换**：Neon 拥有 API 100 万 / Antigravity 512K 上下文、极低捏造率与全球第 2 的改稿服从度；付费正式版 Pro/Ultra 可在同一界面免加价切换 **Claude Opus 5.5 / Sonnet 5.5 (thinking)** 做精细润色。

---

## 第 4 章：手机远程操控两大路线

1. **路线 ①：T3 Code（免费开源）**：通过 `antigravity-acp` 对接家里电脑，经 T3 Connect（免费 3 台）/ LAN / Tailscale 连手机 App「T3 Code - Remote Claude & more」，一屏统管 Antigravity + Claude Code + Codex，支持彩色 Diff 审批与单步回滚。
2. **路线 ②：官方 Remote Control & Remote Agents**：
   - `Settings → Application → Enable Remote Control`（CLI：`agy remote-control start`），手机打开 `antigravity.google.com` 并添加到主屏可收推送通知。
   - **Remote Agents（Pro/Ultra 个人版）**：电脑关机照常跑云端任务，直连 GitHub / Google Drive。

---

## 第 5 章：短板、封号红线与选型速查表

### 5 大注意点
1. Pro 存在 5 小时滚动恢复＋周配额上限，猛跑 XHigh / Opus 5.5 / `/teamwork` / `/boost` 会触顶。
2. 免费试用期限制 Claude 5.5 与 Hydrogen；免费档 Claude 4.6 与 GPT-OSS-120b 预定 2026/11/30 下线。
3. Antigravity 2.0 桌面 App 分离了代码编辑器本体，一体化写代码可选 Antigravity IDE 或 VS Code/JetBrains 扩展。
4. 企业 Google Workspace 不享个人套餐黑五权益。
5. 61 分为 xhigh 成绩；Antigravity 上下文标定 512K；低幻觉率 ≠ 零幻觉。

### 条款第 6 条封号边界
- **合规安全区**：单人交互式开发，运行官方未改写 `antigravity-acp` + 原生个人 `oauth-personal` 标准 JSON-RPC（T3 Code 方式）。
- **封号红线区**：OpenClaw 等提取 OAuth Token 转发代理、多账号轮询、无人值守大规模脚本刷量（易触发 `403 PERMISSION_DENIED` 或永久封号）。
- **本机安全**：慎用免确认 `Turbo` 模式，坚持 Terminal Sandbox 开启 ＋ 审批开启 ＋ Git 管理目录。

### 选型速查表
- **Gemini 4 Neon**：日常全能主力（日常 Medium~High，硬仗 Extra/xhigh）
- **Orchestrator [Neon×Hydrogen]**：日常开发最省配额组合
- **Gemini 4 Carbon**：Ultra/Enterprise 级超重型架构迁移终极重炮
- **Claude Opus 5.5 / Sonnet 5.5**：付费 Pro/Ultra 免加价细腻文风与 UI 精修
- **手机遥控**：零风险＆关机可用选官方 Remote Control / Remote Agents；多工具聚合选 T3 Code
- **多智能体**：后台 `Subagent` / 免费并行验收 `/swarm` / 攻坚 `/boost` / 多日大重构 `/teamwork`

---

## 第 6 章：可直接复制的 3 套实战提示词 & 10 分钟上手 3 步

### 提示词 ①：一手信源查证＋零 AI 味深度长文写作
```text
请围绕以下主题，先通过 Web 搜索与官方文档核查一手信息，再撰写一篇深度长文。

【主题】在此填写你的主题
【目标读者】在此填写目标受众

写作规范：
1. 明确区分已核实的官方事实（价格、日期、基准测试、规格参数）与推断内容
2. 未核实的数字或规格绝不臆测补全，直接写明“未确认”或仅呈现已核实范围
3. 采用自然亲切的口语化表达，保持每段 1~2 句的清爽换行节奏，严禁浮夸煽动与翻译腔
4. 除了亮点，必须客观写出短板、注意事项与场景选型速查表
5. 输出定稿前请自查一遍，确保无前后矛盾或过时信息。
```

### 提示词 ②：省额度高质开发规划与执行
```text
/plan /grill-me 我想推进以下这项任务。

【想要制作的内容 / 目标】在此写明你的目的

推进规范：
1. 不要一上来就直接修改文件，只针对需求中模糊的地方每次提 1 个问题（每个问题把推荐方案放在第一位）
2. 方向敲定后，将涉及修改的文件、实施步骤与验证测试项整理成简短计划发我确认
3. 获得批准后再高效执行；若同一个报错连续出现 2 次，先暂停并向我汇报原因及修复方案。
```

### 提示词 ③：不打断主线 `/btw` ＋ 质检闭环 `/swarm`
```text
【在主线任务后台同步调研规格或备选方案时】
/btw 对比当前方案与备选方案（〇〇方案），两者在工作量和 Bug 风险上有什么差异？请实际阅读相关文件后，用 3 句话给出结论。

【将多项任务并行拆分并引入验收把关时】
/swarm 请把以下任务拆分为独立分工并行推进。最后必须由 @verifier 全面核查所有文件与运行结果，确认零问题后再提交完工报告。
・分工 1：〇〇的调研与结构方案制定
・分工 2：〇〇的代码实现与测试编写
・分工 3：最终复核与遗漏修补
```

### 今日 10 分钟上手 3 步
1. 打开 Google One 套餐管理页，确认是否出现黑五 Google AI Pro 年付半价（14,500 日元）优惠。
2. 前往 <https://antigravity.google> 安装 Antigravity App（或 CLI `agy`），先用免费档体验 Gemini 3.8 Flash 与 `/swarm`。
3. 抛一个日常小任务，运行途中用 `/btw` 侧边提问，并开启 `Enable Remote Control` 用手机浏览器实测遥控。
