// 自分のslackID 正しいものを入力ください
const slackUserId = '*******';

// このアプリのAPIトークン　正しいものを入力ください
const slackApiToken = 'xoxp-************-************-************-********************************';

function changeSlackStatus(emoji, message) {
  // slackへのエンドポイントとなるURL
  const slackSetStatusUrl = 'https://slack.com/api/users.profile.set';

  // optionsにわたすheader情報のオブジェクト
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' + slackApiToken,
    'X-Slack-User': slackUserId
  };

  // slackに反映させるステータス情報
  // 絵文字とコメント
  const payload = {
    'profile': {
      'status_emoji': emoji,
      'status_text': message
    }
  };

  // UrlFetchAppにわたすoptions
  const options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  const res = UrlFetchApp.fetch(slackSetStatusUrl, options);

  const resJson = JSON.parse(res.getContentText());
  console.log(JSON.stringify(resJson, false, 2));
}