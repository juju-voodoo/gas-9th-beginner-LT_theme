
function dateData() {
  // 休日を格納したスプレッドシートのデータと検索実施日との比較をする
  // 一致したらture、一致しなかったらfalseを返す

  // 休日データのあるスプレッドシートのID
  const mySpreadSheetId = '*******************************';

  const sht = SpreadsheetApp.openById(mySpreadSheetId).getSheetByName('data');
  const dataRange = sht.getDataRange().getValues();
  dataRange.shift();

  // スプレッドシートに記載されている日付を格納
  // スプレッドシートの書式は日付にしておくこと　日付オブジェクトが使えなくなるため
  let yyyyMmDd = [, ,];

  // 検索当日の日付を格納
  const toDay = new Date();
  const yyyyMnDnToday = [toDay.getFullYear(), toDay.getMonth(), toDay.getDate()];

  // スプレッドシートから配列に入れた休日のデータをひとつづつチェック
  // forof文だとオブジェクトと認識されないためか関数が使えない。普通のfor文で要素のチェックをする。
  for (let dataElement = 0; dataElement < dataRange.length; dataElement++) {
    for (let i = 0; i < dataRange[0].length; i++) {
      yyyyMmDd = [dataRange[dataElement][i].getFullYear(), dataRange[dataElement][i].getMonth(), dataRange[dataElement][i].getDate()];
      // JSON形式の文字列で検索当日の日付と検索対象の日付が一致しているかチェック
      if (JSON.stringify(yyyyMmDd) === JSON.stringify(yyyyMnDnToday)) return true;
    }
  }
  return false;
}
