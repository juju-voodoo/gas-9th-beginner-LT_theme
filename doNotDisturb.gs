// このアプリの自分のslackIDとAPIトークンはchangeSlackStatusで定義済み
function dndOn() {
  // スヌーズの時間を分単位で入力 24時間×60分=1440
  const numMinutes = 1440;
  // スヌーズ設定のエンドポイントとなるURL
  const slackSetSnoozeUrl = 'https://slack.com/api/dnd.setSnooze' + '?num_minutes=' + numMinutes + '&pretty=1';

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + slackApiToken
  };

  const options = {
    'method': 'post',
    'headers': headers
  };

  const res = UrlFetchApp.fetch(slackSetSnoozeUrl, options);
  // 書式が不明だけど
  console.log(JSON.parse(res, false, 2));
}


// **********************
function dndOff() {
  const slackOffDndUrl = 'https://slack.com/api/dnd.endDnd';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + slackApiToken
  };

  const options = {
    'method': 'post',
    'headers': headers
  };

  const res = UrlFetchApp.fetch(slackOffDndUrl, options);
  console.log(JSON.parse(res, false, 2));
}