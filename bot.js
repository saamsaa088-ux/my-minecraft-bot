const bedrock = require('bedrock-protocol');

console.log('🚀 [الخارق] جاري تشغيل بوت أترنوس الذكي...');

function createBot() {
  const client = bedrock.createClient({
    host: 'MinecraftTeems.aternos.me',
    port: 23407,
    username: 'Aternos_Guard_Bot',
    offline: true,
    skipPing: false
  });

  client.on('spawn', () => {
    console.log('🎉 [نجاح خارق] دخل البوت السيرفر وأصبح العداد 1/50 بنجاح!');
  });

  // البقاء نشطاً ومنع الطرد نهائياً
  setInterval(() => {
    try {
      client.queue('player_auth_input', {
        pitch: 0, yaw: 0,
        position: { x: 0, y: 4, z: 0 },
        move_vector: { x: 0, z: 0 },
        head_yaw: 0, input_data: 0,
        input_mouse_vector: { x: 0, y: 0 },
        player_epoch: 0, actions: 0
      });
    } catch (e) {}
  }, 10000);

  client.on('error', (err) => {
    console.log('⚠️ ملاحظة اتصال:', err.message);
  });

  client.on('end', (reason) => {
    console.log('🔄 انقطع الاتصال بسبب:', reason, '- جاري إعادة الاتصال فوراً...');
    setTimeout(createBot, 3000);
  });
}

createBot();
console.log('انفصل البوت، جاري إعادة المحاولة...');
    setTimeout(startBot, 5000);
  });
}

startBot();
