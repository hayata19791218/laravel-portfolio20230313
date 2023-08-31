<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="noindex">
    <link href="{{ asset('css/reset.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/workShow.css') }}" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Shippori+Mincho&display=swap" rel="stylesheet">
    <title>制作実績</title>
  </head>
  <body>
    <div id="mouse-stalker"></div>
    <main class="show-main">
        <div class="top-bar">
            <a href="{{route('admin.index')}}">サイトへ</a>
            <a href="{{route('admin.workEdit',['work' => $work])}}">制作実績の編集</a>
        </div>
        <h1>{{$work->title}}</h1>
        <div class="body">
            {!!$work->body!!}
            <a class="back hover" href="{{route('admin.index')}}#work">実績掲載ページに戻る</a>
        </div>
    </main>
    <script type="text/javascript" src="{{ asset('js/work-product.js') }}"></script>
  </body>
</html>