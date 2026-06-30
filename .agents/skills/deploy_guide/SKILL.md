---
name: deploy_guide
description: Hướng dẫn hoặc thực hiện quy trình triển khai (deploy) dự án lên Vercel hoặc GitHub Pages
---

# Hướng dẫn triển khai Dự án Portfolio

Kỹ năng này giúp người dùng tự động hóa hoặc được hướng dẫn chi tiết từng bước để đưa dự án Portfolio lên môi trường trực tuyến (Vercel hoặc GitHub Pages).

## Quy trình triển khai nhanh lên Vercel:
1. Đảm bảo đã cài đặt Vercel CLI: `npm install -g vercel`
2. Chạy lệnh `vercel` ở thư mục gốc của dự án.
3. Làm theo hướng dẫn trên màn hình để liên kết dự án và xuất bản.

## Quy trình triển khai lên GitHub Pages:
1. Cài đặt gói `gh-pages`: `npm install gh-pages --save-dev`
2. Cấu hình `"homepage": "https://<username>.github.io/<repository-name>"` trong tệp `package.json`.
3. Thêm các kịch bản (scripts) vào `package.json`:
   - `"predeploy": "npm run build"`
   - `"deploy": "gh-pages -d dist"`
4. Chạy lệnh `npm run deploy`.
