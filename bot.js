const bedrock = require('bedrock-protocol');

console.log('✔ جاري إطلاق البوت على السحابة...');

function startBot() {
  const client = bedrock.createClient({
    host: 'MinecraftTeems.aternos.me',
    port: 23407,
    username: 'Cloud_Bot_247',
    offline: true,
    skipPing: true
  });

  client.on('join', () => {
    console.log('✔ [نجاح] دخل البوت السيرفر وأصبح العداد 1/50!');
    
    setInterval(() => {
      try {
        client.write('player_auth_input', {
          pitch: 0, yaw: 0,
          position: { x: 0, y: 4, z: 0 },
          move_vector: { x: 0.1, z: 0.1 },
          head_yaw: 0, input_data: 2,
          input_mouse_vector: { x: 0, y: 0 },
          player_epoch: 0, actions: 1
        });
        console.log('-> البوت يتحرك لمنع الطرد.');
      } catch (e) {}
    }, 4000);
  });

  client.on('error', (err) => {
    console.log('تنبيه اتصال:', err.message);
  });

  client.on('close', () => {
    console.log('انفصل البوت، جاري إعادة المحاولة...');
    setTimeout(startBot, 5000);
  });
}

startBot();
