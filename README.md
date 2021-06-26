# gas-9th-beginner-LT_theme
## GAS初級講座9期LTコード

GAS初級講座LTで作成したslackのステータス変更のコードです。
スプレッドシートに休日データを入力しておきます。毎日6時にデータを確認して今日が休日ならステータスを休日へ変更し通知を24時間オフにします。
必要なslackデータは
- slack APIトークン
- slack メンバーID
- スプレッドシートのID

です。公開コードでは上記のデータはアスタリスクでごまかしています。

休日のデータを入力しておくスプレッドシートのシート名は ```data``` です。
休日のデータは一列のみで画像のようにしておきます。

A列の書式は日付にしておいてください。日付オブジェクトで配列に格納されるようになります。日付のチェックは日付オブジェクトのメソッドを使用して確認をします。

<img src="https://github.com/juju-voodoo/imageArchive/blob/main/dataSpreadSheetExample.png" alt="データ画像" titel="見本" width="30%" height="30%">


