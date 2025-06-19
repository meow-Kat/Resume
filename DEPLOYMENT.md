# GitHub Pages 部署指南

## 自動部署設置

本專案已經配置好自動部署到 GitHub Pages。以下是完整的設置步驟：

### 1. GitHub Repository 設置

1. 前往 GitHub Repository 設置頁面：`https://github.com/meow-Kat/Resume/settings`
2. 點擊左側選單的 "Pages"
3. 在 "Source" 區域選擇 "GitHub Actions"

### 2. 啟用 GitHub Actions

1. 前往 Repository 的 "Actions" 標籤
2. 如果是第一次使用，可能需要啟用 GitHub Actions
3. 確認 "Deploy Next.js to GitHub Pages" workflow 已經出現

### 3. 觸發部署

部署會在以下情況自動觸發：
- 推送代碼到 `main` 分支
- 手動觸發（在 Actions 頁面點擊 "Run workflow"）

### 4. 網站訪問

部署完成後，您的履歷網站將可以通過以下網址訪問：
`https://meow-kat.github.io/Resume/`

## 配置說明

### Next.js 配置 (`next.config.ts`)

- `output: 'export'`: 啟用靜態導出
- `trailingSlash: true`: 確保 URL 以斜線結尾
- `basePath` 和 `assetPrefix`: 設置 GitHub Pages 的子路徑
- `images.unoptimized: true`: 禁用圖片優化（靜態部署必須）

### GitHub Actions 工作流程 (`.github/workflows/deploy.yml`)

- 自動安裝依賴
- 構建靜態網站
- 部署到 GitHub Pages

## 本地測試

測試靜態構建：
```bash
npm run export
```

構建完成後，檔案會輸出到 `out` 目錄。

## 故障排除

1. **部署失敗**: 檢查 Actions 頁面的錯誤日誌
2. **網站無法訪問**: 確認 GitHub Pages 設置正確
3. **樣式或圖片不顯示**: 檢查 basePath 配置是否正確

## 手動部署（備用方案）

如果自動部署有問題，可以手動部署：

1. 本地構建：
```bash
npm run export
```

2. 將 `out` 目錄的內容上傳到 `gh-pages` 分支 