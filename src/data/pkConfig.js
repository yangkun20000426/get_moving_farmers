// PK 挑战类型说明（可扩展）
export const PK_TYPES = [
  {
    id: 'exercise_minutes',
    label: '运动总时长',
    unit: '分钟',
    hint: '挑战有效期内，累计完成运动分钟更多的一方获胜'
  },
  {
    id: 'exercise_sessions',
    label: '运动打卡次数',
    unit: '次',
    hint: '挑战有效期内，完成「开始运动」打卡次数更多的一方获胜（每次打卡算一次）'
  }
]

export function getPkType(id) {
  return PK_TYPES.find(t => t.id === id) || PK_TYPES[0]
}
