const https = require('https');
const topics = ['power+plant', 'water+treatment', 'heavy+equipment', 'agriculture'];

Promise.all(topics.map(topic => new Promise(resolve => {
  https.get('https://unsplash.com/s/photos/' + topic, res => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      // Find href="/photos/xxxxxxxxx"
      const match = body.match(/href="\/photos\/([a-zA-Z0-9_-]{10,25})"/);
      if(match) resolve({topic, id: match[1]});
      else resolve({topic, id: null});
    });
  });
}))).then(console.log);
