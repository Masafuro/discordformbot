function onSubmit(e) {

  // discordのwebhookURLを入れる
  const discordWebHookURL = " *** ";


  const itemResponses = e.response.getItemResponses();
  const firstItem = itemResponses[0]
  // 質問
  const question = firstItem.getItem().getTitle();
  // 質問の種類
  const questionType = firstItem.getItem().getType();
  // 答え
  const answer = firstItem.getResponse();

/*
  Logger.log(e);
  console.log(JSON.stringify(e));
  const name = e.namedValues["状態"][0]
  Logger.log(name);
*/

  // 投稿するチャット内容と設定
  
  const message = {
    //"content": "Hello!", // チャット本文
    "content": answer, // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}
