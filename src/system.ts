export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 由 [@ourongxing](https://github.com/ourongxing) 基於 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 開發，查看 [源碼](https://github.com/ourongxing/chatgpt-vercel)，歡迎自部署。
- 該網站僅作為演示，不提供長期服務，網站密碼為 \`ourongxing\`，請勿濫用。
- 如果本項目對你有所幫助，可以給小貓 [買點零食](https://cdn.jsdelivr.net/gh/ourongxing/chatgpt-vercel/assets/reward.gif)，但不接受任何付費功能請求。
- 該預覽頁面域名由 [@AUDI_GUZZ](https://m.okjike.com/users/4af3cfb4-1291-4a8b-b210-f515c86934a9) 和 [@Airyland](https://m.okjike.com/users/C6C8DE3A-E89D-4978-9E7D-B2E167D835A9) 免費提供，感謝。API Key 由我自己免費提供，注意不要濫用。
- [[Shift]] + [[Enter]] 換行。開頭輸入 [[/]] 或者 [[空格]] Prompt 預設。[[↑]] 可編輯最近一次提問。點擊頂部名稱滾動到頂部，點擊輸入框滾動到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
