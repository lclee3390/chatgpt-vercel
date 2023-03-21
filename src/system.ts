export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- [[Shift]] + [[Enter]] 換行。開頭輸入 [[/]] 或者 [[空格]] Prompt 預設。[[↑]] 可編輯最近一次提問。點擊頂部名稱滾動到頂部，點擊輸入框滾動到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
