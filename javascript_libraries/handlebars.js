$(function() {
  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  };

  post.body = '<p>' + post.body + '</p>';
  post.tags = ['Food', 'Cooking', 'Vegetables'];
  Handlebars.registerPartial('tag', $('#tag').html());

  let posts = [
    {
      title: "Ave's",
      published: 'June 2, 1992',
      body: '10/10'
    }
  ];
  posts.push(post);
  
  let postsTemplate = Handlebars.compile(document.getElementById('posts').innerHTML);
  
  $('body').append(postsTemplate({ posts: posts }));
  
});
