const Blog = require('hatena-blog-api2').Blog;

const client = new Blog({
  type: 'wsse',
  userName: process.env.HATENA_USERNAME, // 'username'
  blogId: process.env.HATENA_BLOG_ID,    // 'blog id'
  apiKey: process.env.HATENA_APIKEY      // 'apikey'
});

//process.on('unhandledRejection', console.dir);

// POST CollectionURI (/<username>/<blog_id>/atom/entry)
client.postEntry({
  title: 'テストエントリ',
  updated:new Date(2010,1,1,10,10),
  content: '# テストエントリ\r\nこれはテストです。\r\n\r\n',
  categories:['blog','hatena']
})
.then(
  // resolve
  (res)=>{
    console.log('#ポストの結果\n',JSON.stringify(res,null,1));
  },
  console.error
);


