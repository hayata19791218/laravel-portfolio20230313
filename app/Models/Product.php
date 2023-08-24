<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function getRouteKeyName(){
        return 'slug';
    }

    public function productStore($request){
        $inputs = $request->validate([
            'title' => 'required',
            'url' => 'required',
            'body' => 'required',
        ]);

        $this->title = $inputs['title'];
        $this->url = $inputs['url'];
        $this->slug = $this->url;
        $this->body = $inputs['body'];
        if($request->file('eyecatch')){
            $original = $request->file('eyecatch')->getClientOriginalName();
            $name = date('Ymd_His').'_'.$original;
            $request->file('eyecatch')->move('storage/images',$name);
            $this->eyecatch = $name;
        }
        $this->publish_flag = 0;
        $this->save();
    }

    public function productRelease($request){
        $inputs = $request->validate([
            'title' => 'required',
            'url' => 'required',
            'body' => 'required',
        ]);

        $this->title = $inputs['title'];
        $this->url = $inputs['url'];
        $this->slug = $this->url;
        $this->body = $inputs['body'];
        if($request->file('eyecatch')){
            $original = $request->file('eyecatch')->getClientOriginalName();
            $name = date('Ymd_His').'_'.$original;
            $request->file('eyecatch')->move('storage/images',$name);
            $this->eyecatch = $name;
        }
        $this->publish_flag = 1;
        $this->save();
    }
}
