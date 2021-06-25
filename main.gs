function main() {
  // 今日が休みか確認。休みならtrue, 出勤ならfalse
  if (dateData()) {
    // 休みのステータス変更
    changeSlackStatus(':palm_tree:', '休暇中');
    // 休みだから通知も停止
    dndOn();
  }else {
    // 出勤のステータス変更
    changeSlackStatus(':office:', '');
    // 通知もアクティブに
    dndOff();
  }
}
